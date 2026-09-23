/** SEQUENCE: label-free material surfaces. All controls/text stay in the normal DOM. */
export const SEQUENCE_MATERIALS = ['aurora','mercury','nixie','folio','blueprint','prism','copper','botanical','velvet','obsidian','ceramic','tide','aperture','transit','relay','contour'] as const;
export type SequenceMaterial = typeof SEQUENCE_MATERIALS[number];
export const materialOf = (value: string | undefined): SequenceMaterial => SEQUENCE_MATERIALS.includes(value as SequenceMaterial) ? value as SequenceMaterial : 'aurora';
const bounded=(v:number,min=0,max=1)=>Number.isFinite(v)?Math.max(min,Math.min(max,v)):min;
const f=(v:number)=>Number(v.toFixed(3));
/** Small viewport; viewBox coordinates don't depend on label length or content. */
export function sequenceSkin(material:SequenceMaterial, selected=0, hover=0, pulse=0, id='sq-art'):string {
 const s=bounded(selected),h=bounded(hover),p=bounded(pulse,0,1.6),open=bounded(.08+s*.45+h*.52+p*.44);
 // Internally-generated IDs only. A public raw string must never become executable markup.
 const uid=id.replace(/[^a-zA-Z0-9_-]/g,'_');
 const ref=(name:string)=>`url(#${uid}-${name})`;
 const gradient=(name:string,a:string,b:string,c?:string)=>`<linearGradient id="${uid}-${name}" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="${a}"/>${c?`<stop offset=".5" stop-color="${c}"/>`:''}<stop offset="1" stop-color="${b}"/></linearGradient>`;
 const defs=gradient('glass','#b9ffec88','#90abf13d','#36536c44')+gradient('metal','#d9e0dd','#273039','#647b7a')+gradient('paper','#fff9e6','#d9cfb5','#f0e9d7')+gradient('copper','#f4ccaa','#684736','#a1775c')+gradient('spectrum','#cdbaf484','#9be4d08a','#a7bad83e');
 const rect=(fill:string,stroke='none',radius=12,x=3,y=4,w=154,height=48)=>`<rect x="${x}" y="${y}" width="${w}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
 const line=(d:string,stroke:string,width=1,extra='')=>`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
 let shape='';
 switch(material){
 case 'aurora': {
  const dip=f(6+open*7),bow=f(7+p*5);
  shape=`<path d="M19 4Q80 ${dip} 143 4Q159 6 157 28Q160 49 141 52Q81 ${f(48-open*5)} 19 52Q${bow} 51 3 28Q0 5 19 4Z" fill="${ref('glass')}" stroke="#aeeae07d"/>`+
   line(`M16 9Q78 ${f(13-open*12)} 145 10`,'#ecfffcc4',1.2)+line(`M13 44Q87 ${f(22+open*19)} 150 42`,'#a5b6f091',1.4)+
   `<path d="M3 24Q60 ${f(5+open*29)} 157 17L157 34Q70 ${f(36-open*18)} 3 42Z" fill="${ref('spectrum')}" opacity="${f(.35+open*.3)}"/>`;break;
 }
 case 'mercury': {
  const k=f(10+open*15);
  shape=`<path d="M12 3H147L158 13V43L147 53H12L2 43V13Z" fill="${ref('metal')}" stroke="#b8c6c975"/>`+rect('#19232bcc','#c7d9d944',7,6,7,148,42)+
   `<path d="M${f(11+open*80)} 7l${k} 0l24 42h-${k}Z" fill="#efffff" opacity="${f(.06+open*.15)}"/>`+
   line('M13 4H146M8 50H147','#eef9ef80')+line('M5 14V41M155 14V41','#111b20b0',2);break;
 }
 case 'nixie': {
  shape=rect('#171c20','#6d554274',10)+rect('#291f1696','#d2a77655',8,7,8,146,40);
  for(let i=0;i<14;i++)shape+=`<path d="M${12+i*10} 7V49" stroke="#af90654b" stroke-width=".6"/>`;
  shape+=line(`M12 46H${f(18+open*125)}`,'#eeb877',2.2)+line('M12 9H148','#efdec648')+
    `<rect x="${f(9+open*113)}" y="11" width="${f(15+p*12)}" height="32" rx="7" fill="#efba6133"/>`;break;
 }
 case 'folio': {
  const fold=f(9+open*40),crease=f(156-fold);
  shape=rect('#b6aa8c','#8d806743',2,6,7,151,46)+rect('#e0d7be','#b6a78b66',2,4,5,151,46)+
   `<path d="M2 3H${crease}L156 ${f(4+fold*.45)}V50H2Z" fill="${ref('paper')}" stroke="#a494785c"/>`+
   `<path d="M${crease} 3Q${f(crease+fold*.35)} ${f(3+fold*.46)} 156 ${f(4+fold*.45)}L${crease} ${f(4+fold*.45)}Z" fill="#fffbea" stroke="#b0a08277"/>`+
   line('M12 11V44','#a79a7b6b')+line('M15 47H148','#aa9f8249');break;
 }
 case 'blueprint': {
  const edge=f(4+open*11);
  shape=rect('#112b3d','#8bbed956',3)+line('M18 4V52M143 4V52M3 12H157M3 44H157','#9cc8dc25',.7);
  for(let i=0;i<9;i++)shape+=line(`M${20+i*15} 7v${i%2?3:5}`,'#93c7db72',.8);
  shape+=line(`M${edge+13} 9H${edge}V47H${edge+13}M${160-edge-13} 9H${160-edge}V47H${160-edge-13}`,'#c2ebf2',1.4)+
   line(`M${f(21+open*113)} 13V43`,'#abddeb',.8,`opacity="${f(.15+open*.5)}"`);break;
 }
 case 'prism': {
  const spread=f(3+open*6);
  shape=`<path d="M18 4H143L158 16V40L144 52H18L2 40V16Z" fill="#202b3a" stroke="#c8b4ee75"/>`+
   `<path d="M18 4L${f(65-open*12)} 5L${f(26+spread)} 49L2 40V16Z" fill="${ref('spectrum')}"/>`+
   `<path d="M143 4L158 16V40L144 52L${f(100+open*16)} 49L${f(135-spread)} 11Z" fill="${ref('glass')}"/>`+
   line(`M${f(34+spread)} 6L${f(15+spread)} 43M${f(136-spread)} 9L${f(114-spread)} 50`,'#e6ddfa80',.8)+
   `<path d="M28 6L${f(89+open*20)} 6L130 51H${f(52+open*17)}Z" fill="#bed0e9" opacity="${f(.06+p*.1)}"/>`;break;
 }
 case 'copper': {
  const lift=f(open*13);
  shape=`<path d="M4 5H147L157 15V51H15L3 40Z" fill="${ref('copper')}" stroke="#efcbaa72"/>`+rect('#332921b3','#f8d5ae38',2,10,9,139,37)+
   `<path d="M5 5H${f(34+lift)}L${f(17+lift)} 51H15L3 40Z" fill="${ref('copper')}"/>`+
   line(`M${f(13+open*80)} 9L${f(33+open*80)} 46`,'#f6d5b269',1.1)+line('M8 6H145M15 49H151','#fbe2c29c');break;
 }
 case 'botanical': {
  const b=f(3+open*5);
  shape=`<path d="M3 29Q5 ${b} 33 4H154Q${f(158-open*6)} 50 127 52H5Z" fill="#213630" stroke="#b6ceb66b"/>`+
   `<path d="M4 46Q${f(30+open*10)} ${f(17-open*11)} 100 9Q134 4 154 4Q125 12 116 15Q44 16 5 50Z" fill="#afc589" opacity="${f(.12+open*.16)}"/>`+
   line(`M8 46Q66 ${f(29-open*18)} 149 7`,'#b7c99869',.9)+line(`M16 50Q95 ${f(48-open*4)} 139 46`,'#c6d8b351');break;
 }
 case 'velvet': {
  shape=rect('#2d2836','#a198a752',15);
  for(let i=0;i<9;i++){const x=3+i*17.2,off=Math.sin(i*.7)*open*7;shape+=`<path d="M${f(x)} 6Q${f(x+off-2)} 28 ${f(x)} 50H${f(x+17)}Q${f(x+off+11)} 28 ${f(x+17)} 6Z" fill="${i%2?'#5c496126':'#080e193d'}"/>`;}
  shape+=line('M17 7H143M17 49H143','#b49baa51',1,'stroke-dasharray="2 4"');break;
 }
 case 'obsidian': {
  const gap=f(1+open*8);
  shape=`<path d="M14 4H147L157 14V45L146 53H14L3 42V14Z" fill="#111b23" stroke="#7b8e9e88"/>`+
   `<path d="M${f(86-gap)} 4L${f(75-gap)} 20L${f(89-gap)} 34L${f(77-gap)} 52H${f(81+gap)}L${f(93+gap)} 34L${f(79+gap)} 20L${f(90+gap)} 4Z" fill="${ref('spectrum')}" opacity="${f(.3+open*.5)}"/>`+
   `<path d="M14 4H${f(86-gap)}L${f(75-gap)} 20L${f(89-gap)} 34L${f(77-gap)} 52H14L3 42V14Z" fill="#17212bcc"/>`+
   line('M15 6H75M93 6H145M7 42L15 50H74','#b6c2d340',.9);break;
 }
 case 'ceramic': {
  shape=rect('#cecbbd','#e7e1ce99',23,3,6,154,47)+rect('#f5f4e8','#b8c6bb77',23,3,3,154,47)+
   `<path d="M10 33Q77 ${f(45-open*32)} 150 20V35Q145 49 133 49H27Q14 49 10 33Z" fill="#a6c9bc" opacity="${f(.15+open*.24)}"/>`+
   line('M20 8Q80 1 142 9','#ffffff',1.7);break;
 }
 case 'tide': {
  const wave=f(34-open*19);
  shape=rect('#172d3c','#badde478',23)+`<path d="M4 ${wave}Q42 ${f(wave-8-p*6)} 82 ${wave}T156 ${wave}V32Q155 51 138 52H20Q4 51 4 32Z" fill="${ref('glass')}"/>`+
   line(`M6 ${wave}Q45 ${f(wave-8-p*6)} 82 ${wave}T154 ${wave}`,'#b6ebefa6',1.2)+line('M21 8H138','#d1faff78',1)+
   `<path d="M7 40Q80 ${f(29-open*8)} 153 40" fill="none" stroke="#899fc666"/>`;break;
 }
 case 'aperture': {
  shape=rect('#13242d','#8299a16c',24);
  for(let i=0;i<6;i++){const x=5+i*25;shape+=`<path d="M${x} 6H${x+25}L${f(x+14-open*9)} ${f(25-open*10)}L${f(x+5-open*4)} ${f(29-open*10)}Z" fill="${i%2?'#82939e42':'#4b676b77'}" stroke="#a6bab735"/>`+
   `<path d="M${x} 50H${x+25}L${f(x+25+open*3)} ${f(31+open*10)}L${f(x+10+open*9)} ${f(31+open*10)}Z" fill="${i%2?'#4259678a':'#83959b3d'}"/>`;}
  shape+=line('M20 8H140M20 48H140','#bccfc962',.8);break;
 }
 case 'transit': {
  const seam=f(124-open*7);
  shape=`<path d="M4 4H156V17Q146 20 156 24V32Q147 37 156 40V52H4V39Q14 36 4 32V24Q14 19 4 16Z" fill="#e2d8c2" stroke="#a49c8699"/>`+
   line(`M${seam} 6V50`,'#8b826f99',1,'stroke-dasharray="2 3"')+
   `<path d="M${seam+2} 6H152V17Q142 20 152 24V32Q143 37 152 40V50H${seam+2}Z" fill="#ba9c78" opacity="${f(.14+open*.2)}"/>`+
   line('M15 8H109M15 48H109','#9b91784b',1);break;
 }
 case 'relay': {
  shape=rect('#15251f','#81997a6b',5);
  for(let i=0;i<8;i++){const turn=bounded(open*1.6-i*.08),depth=f(3+Math.sin(turn*Math.PI)*14);shape+=`<path d="M${5+i*19} 6l18 ${depth}v${f(44-depth*2)}l-18 ${depth}Z" fill="${turn>.45?'#77976e33':'#b7c5a915'}" stroke="#a6c79a4d" stroke-width=".6"/>`;}
  shape+=line(`M8 49H${f(12+open*138)}`,'#c1dda99c',1.7);break;
 }
 case 'contour': {
  shape=`<path d="M7 7Q40 1 78 5T153 7L157 43Q125 55 78 51T3 47Z" fill="#263a3d" stroke="#9ec0b475"/>`;
  for(let i=0;i<4;i++){const off=i*2.4;shape+=line(`M${f(8+off)} ${f(12+off)}Q50 ${f(4+off+open*i*1.9)} 82 ${f(10+off)}T${f(151-off)} ${f(11+off)}M${f(8+off)} ${f(44-off)}Q70 ${f(55-off-open*4*i)} 152 ${f(43-off)}`,'#b2d0b8',.7,`opacity="${f(.14+i*.08)}"`);}
  break;
 }
 }
 return `<svg viewBox="0 0 160 56" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false"><defs>${defs}</defs>${shape}</svg>`;
}
