import type {Locator, Page} from 'playwright';

/** Measure actual backing pixels for audited text on sculpted/gradient surfaces.
 * A computed ancestor background cannot describe these surfaces. Hide only text
 * paint, preserve its layout, sample its glyph rectangles, and always restore it.
 */
export async function paintedTextContrast(page: Page, targets: Locator) {
  const results: {text: string; ratio: number}[] = [];
  for (const target of await targets.all()) {
    if (!await target.evaluate(e => e.checkVisibility({checkOpacity: true, checkVisibilityCSS: true}))) continue;
    await target.scrollIntoViewIfNeeded();
    const saved = await target.evaluate(e => {
      const canvas = document.createElement('canvas'), context = canvas.getContext('2d')!;
      const walker = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
      const nodes: {text: string; fg: number[]; rects: {x: number; y: number; width: number; height: number}[]}[] = [];
      const parents = new Set<HTMLElement>();
      let node: Node | null;
      while (node = walker.nextNode()) {
        const text = node.textContent?.trim(), parent = node.parentElement;
        if (!text || !parent || parent.closest('[aria-hidden=true]') || !parent.checkVisibility({checkOpacity: true, checkVisibilityCSS: true})) continue;
        for(let ancestor:Element|null=parent;ancestor;ancestor=ancestor.parentElement)if(Number(getComputedStyle(ancestor).opacity)!==1)throw new Error('Text opacity must settle to 1 before measuring actual paint: '+text+' / '+ancestor.className+' / '+getComputedStyle(ancestor).opacity);
        const range = document.createRange(); range.selectNodeContents(node);
        const rects = [...range.getClientRects()].filter(r => r.width > 0 && r.height > 0).map(r => ({x:r.x,y:r.y,width:r.width,height:r.height}));
        if (!rects.length) continue;
        context.clearRect(0,0,1,1); context.fillStyle = getComputedStyle(parent).color; context.fillRect(0,0,1,1);
        nodes.push({text, fg:[...context.getImageData(0,0,1,1).data], rects}); parents.add(parent);
      }
      const styles = [...parents].map(parent => ({index: [...e.querySelectorAll('*')].indexOf(parent), root: parent === e, style: parent.getAttribute('style')}));
      for (const parent of parents) {
        parent.style.setProperty('color','transparent','important');
        parent.style.setProperty('text-shadow','none','important');
        parent.style.setProperty('-webkit-text-stroke-color','transparent','important');
      }
      return {nodes, styles};
    });
    try {
      if (!saved.nodes.length) throw new Error('Visible contrast target has no measurable text');
      const png = await page.screenshot();
      results.push(...await page.evaluate(async ({image, nodes}) => {
        const bitmap = new Image(); bitmap.src = image; await bitmap.decode();
        const canvas = document.createElement('canvas'); canvas.width=bitmap.width; canvas.height=bitmap.height;
        const context=canvas.getContext('2d')!; context.drawImage(bitmap,0,0);
        const lum=(c:number[])=>c.slice(0,3).reduce((sum,v,i)=>sum+(v/255<=.04045?v/3294.6:((v/255+.055)/1.055)**2.4)*[.2126,.7152,.0722][i],0);
        const scaleX=bitmap.width/innerWidth, scaleY=bitmap.height/innerHeight;
        return nodes.map(node=>{
          let ratio=Infinity;
          for(const rect of node.rects)for(const xf of [.15,.3,.5,.7,.85])for(const yf of [.3,.5,.7]){
            const x=Math.floor((rect.x+rect.width*xf)*scaleX),y=Math.floor((rect.y+rect.height*yf)*scaleY);
            if(x<0||y<0||x>=canvas.width||y>=canvas.height)throw new Error('Text sample is outside the screenshot: '+node.text);
            const bg=[...context.getImageData(x,y,1,1).data],alpha=node.fg[3]/255;
            const fg=node.fg.slice(0,3).map((v,i)=>v*alpha+bg[i]*(1-alpha));
            const a=lum(fg),b=lum(bg); ratio=Math.min(ratio,(Math.max(a,b)+.05)/(Math.min(a,b)+.05));
          }
          return {text:node.text,ratio};
        });
      }, {image:'data:image/png;base64,'+png.toString('base64'),nodes:saved.nodes}));
    } finally {
      await target.evaluate((e, styles) => {
        const children=[...e.querySelectorAll('*')];
        for(const entry of styles){const parent=entry.root?e:children[entry.index];if(entry.style===null)parent.removeAttribute('style');else parent.setAttribute('style',entry.style);}
      }, saved.styles);
    }
  }
  return results;
}
