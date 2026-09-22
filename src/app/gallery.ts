import {mountFoundationSample} from './foundation-preview';
import {mountPopupSample} from './check-popup-preview';
import { mountActionDemo } from './action-preview';
import { fillSample } from './samples';
import { TactileAudio } from './audio';
import { createDetails } from './details';
import { createSurfaceController } from '../shared/surface-controller';
import { mounts } from '../catalog/mounts';
import { categories } from '../catalog/categories';
import { escapeHTML, icon, required, toast, wireTabs } from './utils';
import type { Part, PartController } from '../catalog/types';
import parts from 'virtual:sop-catalog';
window.SOP_CATALOG = parts;
const state = new Map(parts.filter(p => p.category === 'toggles').map(p => [p.id, p.initial ?? false]));
let activeCategory = 'all', activeDesign = 'all', query = '', demo = 0, demoIndex = 0;
const sound = new TactileAudio();
const grid = required('#part-grid');
const search = required<HTMLInputElement>('#search-parts');
let rendered: {cleanup?:()=>void; part: Part; card: HTMLElement; controller: PartController; surface?: PartController}[] = [];
const details = createDetails(parts, { onActive(active) {
        stopDemo();
        for (const r of rendered)
            { r.controller.setPaused?.(active); r.surface?.setPaused?.(active); }
    }, onNavigate: openPart });
function openPart(id: string, trigger?: HTMLElement) {
    if (location.hash !== `#part=${id}`)
        history.pushState(null, '', `#part=${id}`);
    details.open(id, trigger);
}
function readRoute() {
    if(location.hash.startsWith('#sop-demo-')) return;
    let id = '';
    try {
        id = location.hash.startsWith('#part=') ? decodeURIComponent(location.hash.slice(6)) : '';
    }
    catch {
        id = '';
    }
    if (id && parts.some(p => p.id === id))
        details.open(id);
    else if (details.isOpen())
        details.close();
}
window.addEventListener('popstate', readRoute);
window.addEventListener('hashchange', readRoute);
function stopDemo() { clearInterval(demo); demo = 0; const b = required('#demo'); b.setAttribute('aria-pressed', 'false'); required('span', b).textContent = 'デモ再生'; }
function syncCard(id: string, value: boolean) {
    state.set(id, value);
    const r = rendered.find(r => r.part.id === id);
    if (r) {
        r.card.classList.toggle('is-on', value);
        required('.state-word', r.card).textContent = value ? 'ON' : 'OFF';
    }
    updateControls();
}
function updateControls() {
    const count = rendered.filter(r => r.part.category === 'toggles').length;
    required('#toggle-controls').hidden = count === 0;
    const on = rendered.filter(r => r.part.category === 'toggles' && state.get(r.part.id)).length;
    required('#active-count').textContent = String(on).padStart(2, '0');
    required('#toggle-total').textContent = String(count).padStart(2, '0');
    document.querySelectorAll<HTMLElement>('[data-design-count]').forEach(el => { const kind = el.dataset.designCount; el.textContent = String(parts.filter(p => (activeCategory === 'all' || p.category === activeCategory) && (kind === 'all' || p.designType === kind)).length).padStart(2, '0'); });
    required('#visible-count').textContent = `${String(rendered.length).padStart(2, '0')} OBJECTS`;
}
function matchPart(part: Part) {
    const haystack = [part.name, part.category, part.description, part.material, part.designType === 'A' ? '表現重視 expressive type a' : '実用重視 essential simple type b', ...part.tags].join(' ').normalize('NFKC').toLowerCase();
    return (activeCategory === 'all' || part.category === activeCategory) && (activeDesign === 'all' || part.designType === activeDesign) && query.normalize('NFKC').toLowerCase().split(/\s+/).every(token => haystack.includes(token));
}
function renderGallery() {
    stopDemo();
    rendered.forEach(r => { r.cleanup?.(); r.controller.destroy(); r.surface?.destroy(); });
    rendered = [];
    const visible = parts.filter(matchPart);
    grid.innerHTML = visible.length ? visible.map(part => {
        const foundation=!!part.foundation;
        const toggle = part.category === 'toggles';
        const scroll = part.category === 'scrollbars';
        const dropdown = part.category === 'dropdowns', accordion = part.category === 'accordions', textbox = part.category === 'textboxes', action = part.category === 'buttons', link = part.category === 'links', tabs = part.category === 'tabs', segments = part.category === 'segments', checkbox = part.category === 'checkboxes', popup = part.category === 'popups';
        return `<article class="object-card ${foundation ? 'foundation-card foundation-'+part.category : toggle ? 'sop-surface sop-original-surface toggle-card' : scroll ? 'scroll-card' : dropdown ? 'dropdown-card' : accordion ? 'accordion-card' : textbox ? 'textbox-card' : action ? 'action-card' : link ? 'link-card' : tabs ? 'tabs-card' : segments ? 'segments-card' : checkbox ? 'checkbox-card' : popup ? 'popup-card' : 'block-card'}" data-part="${escapeHTML(part.id)}" data-design="${part.designType}" style="--sop-accent:${part.accent};--accent:${part.accent}"><header class="card-top"><span class="object-no mono">${String(part.order).padStart(2, '0')} /</span><span class="design-badge design-${part.designType}" title="${part.designType === 'A' ? '表現重視' : '実用重視'}">${part.designType}</span><span class="object-type mono">${escapeHTML(part.material)}</span><span class="state-readout mono" aria-hidden="true"><i></i><span class="state-word">${toggle ? (state.get(part.id) ? 'ON' : 'OFF') : scroll ? 'SCROLL' : dropdown ? 'SELECT' : accordion ? 'EXPAND' : textbox ? 'WRITE' : action ? 'READY' : link ? 'LINK' : tabs ? 'EXPLORE' : segments ? 'CHOOSE' : checkbox ? 'CHECK' : popup ? 'OPEN' : foundation ? 'TRY IT' : 'SURFACE'}</span></span></header><div class="object-stage" data-stage="${escapeHTML(part.id)}"><div class="stage-glow"></div><div class="stage-mount"></div></div><footer class="card-bottom"><div><h2>${escapeHTML(part.name)}<span>${escapeHTML(part.tagline)}</span></h2><p>${escapeHTML(part.description)}</p></div><button type="button" class="open-part" data-open="${escapeHTML(part.id)}" aria-label="${escapeHTML(part.name)} のコードと詳細を開く">${icon('code')}<span>CODE</span>${icon('arrow')}</button></footer></article>`;
    }).join('') : `<div class="empty-state"><span class="empty-symbol">∅</span><h2>まだ、そのパーツはありません。</h2><p>検索する言葉やカテゴリを変えてみてください。</p><button type="button" class="small-button" id="clear-empty">すべてのパーツを表示</button></div>`;
    for (const part of visible) {
        const card = required(`[data-part="${part.id}"]`, grid);
        const mount = required('.stage-mount', card);
        mount.innerHTML = part.markup;
        const root = mount.firstElementChild;
        if (!(root instanceof HTMLElement)) throw new Error(`Invalid markup: ${part.id}`);
        root.dataset.demoRoot = '';
        fillSample(root, part);
        const controller = mounts[part.id](root, { onValueChange: value => { if(part.category==='tabs'||part.category==='segments') required('.state-word',card).textContent=value.replace('choice-','0'); }, onOpenChange: open => { required('.state-word', card).textContent = open ? 'OPEN' : part.category === 'popups' ? 'CLOSED' : 'SELECT'; }, onExpandedChange: values => { required('.state-word', card).textContent = String(values.length) + ' OPEN'; }, onProgressChange: progress => { required('.state-word', card).textContent = Math.round(progress * 100) + '%'; }, checked: state.get(part.id), onCheckedChange: (value: boolean) => { stopDemo(); if(part.category==='toggles') syncCard(part.id, value); } });
        const surface = part.category === 'toggles' ? createSurfaceController(card) : undefined;
        const demo = part.category === 'buttons' || part.category === 'links' ? mountActionDemo(root,part,controller,card,text=>required('.state-word',card).textContent=text) : undefined;
        rendered.push({ part, controller, card, surface, cleanup:part.foundation ? mountFoundationSample(root,part,controller) : part.category==='popups'?mountPopupSample(root,part):demo?.destroy });
        if (part.category === 'checkboxes') {
            const sync=()=>{required('.state-word',card).textContent=(controller.getIndeterminate?.()?'mixed':controller.getChecked?.()?'checked':'unchecked').toUpperCase();};
            root.addEventListener('sop:checkbox-state',sync); sync();
        }
        if (part.category === 'toggles')
            syncCard(part.id, !!state.get(part.id));
        card.addEventListener('click', event => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            if (event.composedPath().some(node => node instanceof HTMLElement && node.hasAttribute('data-demo-root'))) 
                return;
            const trigger = required('[data-open]', card);
            openPart(part.id, trigger);
        });
        root.addEventListener('pointerdown', stopDemo);
        if (part.category === 'textboxes') root.addEventListener('sop:field-state', event => {
            const info = (event as CustomEvent<{focused:boolean;filled:boolean;composing:boolean}>).detail;
            required('.state-word',card).textContent = info.composing ? 'COMPOSING' : info.focused ? 'EDITING' : info.filled ? 'FILLED' : 'WRITE';
        });
    }
    grid.querySelector('#clear-empty')?.addEventListener('click', () => { query = ''; activeDesign = 'all'; search.value = ''; syncDesignFilter(); setCategory('all'); });
    updateControls();
    required('#search-clear').hidden = !query;
    required('#result-announcement').textContent = `${visible.length}個のパーツを表示しています。`;
}
function setCategory(id: string) {
    activeCategory = id;
    const jump=document.querySelector<HTMLSelectElement>('#category-jump');if(jump)jump.value=id;
    document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(b => { const active = b.dataset.category === id; b.setAttribute('aria-selected', String(active)); b.tabIndex = active ? 0 : -1; });
    renderGallery();
}
function syncDesignFilter() { document.querySelectorAll<HTMLButtonElement>('[data-design-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.designFilter === activeDesign))); }
document.querySelectorAll<HTMLButtonElement>('[data-design-filter]').forEach(b => b.addEventListener('click', () => { activeDesign = b.dataset.designFilter ?? 'all'; syncDesignFilter(); renderGallery(); }));
const categoryList = required('#category-tabs');
categoryList.innerHTML = categories.map(c => `<button type="button" role="tab" aria-controls="part-grid" data-category="${c.id}" id="category-option-${c.id}"><span>${c.label}</span><small>${String(c.id === 'all' ? parts.length : parts.filter(p => p.category === c.id).length).padStart(2, '0')}</small></button>`).join('');
categoryList.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setCategory(b.dataset.category ?? 'all')));
wireTabs(categoryList, b => setCategory(b.dataset.category ?? 'all'));
search.addEventListener('input', () => { query = search.value.trim(); renderGallery(); });
required('#search-clear').addEventListener('click', () => { search.value = ''; query = ''; renderGallery(); search.focus(); });
search.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        query = '';
        search.value = '';
        renderGallery();
    }
});
document.addEventListener('keydown', event => {
    if (event.key === '/' && !details.isOpen() && !(event.target instanceof Element && event.target.closest('input,textarea,select,[contenteditable]'))) {
        event.preventDefault();
        search.focus();
    }
});
for (const [id, on] of [['all-on', true], ['all-off', false]] as const) {
    required(`#${id}`).addEventListener('click', () => {
        stopDemo();
        for (const r of rendered) {
            if (r.part.category !== 'toggles' || !r.controller.setChecked)
                continue;
            r.controller.setChecked?.(on);
            syncCard(r.part.id, on);
        }
    });
}
required('#demo').addEventListener('click', () => {
    if (demo) {
        stopDemo();
        return;
    }
    const toggles = rendered.filter(r => r.part.category === 'toggles');
    if (!toggles.length)
        return;
    demoIndex = 0;
    const tick = () => { const r = toggles[demoIndex++ % toggles.length]; const value = !state.get(r.part.id); r.controller.setChecked?.(value); syncCard(r.part.id, value); };
    tick();
    demo = window.setInterval(tick, 480);
    required('#demo').setAttribute('aria-pressed', 'true');
    required('#demo span').textContent = 'デモ停止';
});
const soundButton = required<HTMLButtonElement>('#sound');
soundButton.addEventListener('click', async () => {
    soundButton.disabled = true;
    const target = !sound.enabled;
    const enabled = await sound.setEnabled(target);
    soundButton.disabled = false;
    soundButton.setAttribute('aria-pressed', String(enabled));
    required('span', soundButton).textContent = enabled ? 'SOUND ON' : 'SOUND OFF';
    if (target && !enabled)
        toast('この環境では効果音を有効にできませんでした。');
});
document.addEventListener('sop:change', event => {
    const detail = (event as CustomEvent<{id: string; checked: boolean}>).detail;
    const part = parts.find(p => p.id === detail.id);
    if (part?.category === 'toggles' && part.config)
        sound.play(part.config, detail.checked);
});
document.addEventListener('visibilitychange', () => {
    if (document.hidden)
        stopDemo();
});
window.StateOfPlay = Object.freeze({ version: __APP_VERSION__, getStates: () => Object.fromEntries(state), getPartCount: () => parts.length });
required('#library-total').textContent = String(parts.length);
required('#library-collections').textContent = String(categories.filter(c=>c.id!=='all').length).padStart(2,'0');
const categoryJump=document.createElement('label');categoryJump.className='category-jump';categoryJump.innerHTML='<span>COLLECTION</span><select id="category-jump" aria-label="カテゴリへ直接移動">'+categories.map(c=>`<option value="${c.id}">${c.label} · ${c.id==='all'?parts.length:parts.filter(p=>p.category===c.id).length}</option>`).join('')+'</select>';
required('.collection-toolbar').before(categoryJump);categoryJump.querySelector('select')!.addEventListener('change',event=>setCategory((event.target as HTMLSelectElement).value));
syncDesignFilter();
setCategory('all');
readRoute();
