import {showCategoryLoading} from './category-loading';
import { TactileAudio } from './audio';
import type { createDetails } from './details';
import { createSurfaceController } from '../shared/surface-controller';
import { index as parts, loadCategory } from '../catalog/browser';
import { categories } from '../catalog/categories';
import {createSelectController} from '../shared/select-controller';
import type {SelectController} from '../shared/select-controller';
import { escapeHTML, icon, required, toast, wireTabs } from './utils';
import type { PartPreview, PartSummary, PartController, MountPart } from '../catalog/types';
window.SOP_CATALOG = parts;
const isGlassPart=(part:{id:string})=>part.id.startsWith('lg-')||part.id.startsWith('lgc-');
const state = new Map(parts.filter(p => p.category === 'toggles').map(p => [p.id, p.initial ?? false]));
let activeCategory = 'toggles', activeDesign = 'all', demo = 0, demoIndex = 0, progressDemo = 0, progressDemoPhase = 0;
const progressDemoValues = [0,20,40,60,80,100,80,60,40,20] as const;
const sound = new TactileAudio();
const grid = required('#part-grid');
let categorySelector: SelectController | undefined;
let rendered: {cleanup?:()=>void; part: PartPreview; card: HTMLElement; controller: PartController; surface?: PartController}[] = [];
let details: ReturnType<typeof createDetails> | undefined;
let detailModule: Promise<ReturnType<typeof createDetails>> | undefined;
let routeRequest = 0;
function getDetails() {
    return detailModule ??= import('./details').then(({createDetails}) => {
        details = createDetails(parts, {onActive(active) {
            stopDemo();
            for (const r of rendered) { r.controller.setPaused?.(active); r.surface?.setPaused?.(active); }
        }, onNavigate: openPart});
        return details;
    }).catch(error => { detailModule = undefined; throw error; });
}
async function openPart(id: string, trigger?: HTMLElement) {
    if (!parts.some(p => p.id === id)) return;
    const token = ++routeRequest;
    if (location.hash !== '#part='+id) history.pushState(null, '', '#part='+id);
    try {
        const view = await getDetails();
        if (token === routeRequest) await view.open(id, trigger);
    } catch { if (token === routeRequest) toast('詳細を読み込めませんでした。CODEから再試行してください。'); }
}
function readRoute() {
    if(location.hash.startsWith('#sop-demo-')) return;
    let id = '';
    try { id = location.hash.startsWith('#part=') ? decodeURIComponent(location.hash.slice(6)) : ''; } catch { /* malformed route */ }
    if (id && parts.some(p => p.id === id)) void openPart(id);
    else { routeRequest++; details?.close(); }
}
window.addEventListener('popstate', readRoute);
window.addEventListener('hashchange', readRoute);
function stopDemo() { clearInterval(demo); demo = 0; const b = required('#demo'); b.setAttribute('aria-pressed', 'false'); required('span', b).textContent = 'デモ再生'; clearInterval(progressDemo); progressDemo = 0; const p = required('#progress-demo'); p.setAttribute('aria-pressed', 'false'); required('span', p).textContent = 'デモ再生'; }
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
    const progressCount = rendered.filter(r => r.part.category === 'progress').length;
    required('#progress-controls').hidden = activeCategory !== 'progress' || progressCount === 0;
    const on = rendered.filter(r => r.part.category === 'toggles' && state.get(r.part.id)).length;
    required('#active-count').textContent = String(on).padStart(2, '0');
    required('#toggle-total').textContent = String(count).padStart(2, '0');
    document.querySelectorAll<HTMLElement>('[data-design-count]').forEach(el => { const kind = el.dataset.designCount; el.textContent = String(parts.filter(p => (activeCategory === 'all' || p.category === activeCategory) && (kind === 'all' || p.designType === kind)).length).padStart(2, '0'); });
    required('#visible-count').textContent = `${String(rendered.length).padStart(2, '0')} OBJECTS`;
}
function matchPart(part: PartSummary) {
    return (activeCategory === 'all' || part.category === activeCategory) && (activeDesign === 'all' || part.designType === activeDesign);
}
let galleryRequest = 0;
let visibleLimit = 24;
let clearCategoryLoading:(()=>void)|undefined;
const more = document.createElement('button'); more.type = 'button'; more.id = 'load-more'; more.className = 'small-button load-more'; more.hidden = true;
grid.after(more);
more.addEventListener('click', () => { visibleLimit += 24; void renderGallery(true); });
async function renderGallery(append = false) {
    const token = ++galleryRequest;
    clearCategoryLoading?.(); clearCategoryLoading=undefined;
    stopDemo();
    if (!append) {
        // The old cards keep the page tall while the next category's module loads.
        // Without this, the short loading message clamps scrollY toward the top.
        grid.style.minHeight = Math.ceil(grid.getBoundingClientRect().height) + 'px';
        visibleLimit = 24;
        rendered.forEach(r => { r.cleanup?.(); r.controller.destroy(); r.surface?.destroy(); });
        rendered = [];
    }
    const matches = parts.filter(matchPart);
    if (activeCategory !== 'all') matches.sort((a,b) => a.designType.localeCompare(b.designType) || (activeCategory === 'scrollbars' || activeCategory === 'dropdowns' ? Number(b.tags.includes('KINETIC')) - Number(a.tags.includes('KINETIC')) : 0) || a.order - b.order);
    const selected = activeCategory === 'all' ? matches.slice(0, visibleLimit) : matches;
    const pending = selected.filter(p => !rendered.some(r => r.part.id === p.id));
    grid.setAttribute('aria-busy', 'true'); more.hidden = true;
    updateControls();
    if (!append) clearCategoryLoading=showCategoryLoading(grid);
    let visible: PartPreview[];
    const mounts: Record<string, MountPart> = {};
    let workbenchHelper: typeof import('./workbench-preview') | null = null;
    let signatureHelper: typeof import('./signature-preview') | null = null;
    let foundationHelper: typeof import('./foundation-preview') | null = null;
    let popupHelper: typeof import('./check-popup-preview') | null = null;
    let actionHelper: typeof import('./action-preview') | null = null;
    let sampleHelper: typeof import('./samples') | null = null;
    let glassHelper: typeof import('./liquid-glass-preview') | null = null;
    try {
        const modules = await Promise.all([...new Set(pending.map(p => p.category))].map(loadCategory));
        if (token !== galleryRequest) return;
        const previews = new Map(modules.flatMap(m => m.parts).map(p => [p.id, p]));
        modules.forEach(m => Object.assign(mounts, m.mounts));
        visible = pending.map(p => { const preview = previews.get(p.id); if (!preview) throw new Error('Missing preview: '+p.id); return preview; });
        const [workbench,signature,foundation,popup,action,sample,glass] = await Promise.all([
            visible.some(p => !!p.workbench) ? import('./workbench-preview') : Promise.resolve(null),
            visible.some(p => !!p.signature) ? import('./signature-preview') : Promise.resolve(null),
            visible.some(p => !!p.foundation) ? import('./foundation-preview') : Promise.resolve(null),
            visible.some(p => p.category === 'popups') ? import('./check-popup-preview') : Promise.resolve(null),
            visible.some(p => p.category === 'buttons' || p.category === 'links') ? import('./action-preview') : Promise.resolve(null),
            visible.some(p => p.category === 'blocks' || p.category === 'scrollbars') ? import('./samples') : Promise.resolve(null),
            visible.some(isGlassPart) ? import('./liquid-glass-preview') : Promise.resolve(null)
        ]);
        if (token !== galleryRequest) return;
        workbenchHelper=workbench;signatureHelper=signature;foundationHelper=foundation;
        popupHelper=popup;actionHelper=action;sampleHelper=sample;
        glassHelper=glass;
    } catch {
        if (token !== galleryRequest) return;
        clearCategoryLoading?.(); clearCategoryLoading=undefined;
        grid.setAttribute('aria-busy', 'false');
        const message = document.createElement('div'); message.className = 'collection-message'; message.setAttribute('role', 'status');
        message.innerHTML = '<p>読み込めませんでした。通信を確認してページを再読み込みしてください。</p><button type="button" class="small-button">再読み込み</button>';
        message.querySelector('button')!.addEventListener('click', () => {
            const url = new URL(location.href); url.searchParams.set('category', activeCategory); url.searchParams.set('design', activeDesign); url.searchParams.delete('q');
            location.assign(url.href);
        });
        if (!append) grid.replaceChildren(message); else grid.append(message);
        return;
    }
    clearCategoryLoading?.(); clearCategoryLoading=undefined;
    const cardsHTML = visible.length ? visible.map(part => {
        const foundation=!!part.foundation, signature=!!part.signature, workbench=!!part.workbench;
        const toggle = part.category === 'toggles', ornament = part.category === 'ornaments';
        const scroll = part.category === 'scrollbars';
        const dropdown = part.category === 'dropdowns', accordion = part.category === 'accordions', textbox = part.category === 'textboxes', action = part.category === 'buttons', link = part.category === 'links', tabs = part.category === 'tabs', segments = part.category === 'segments', checkbox = part.category === 'checkboxes', popup = part.category === 'popups';
        return `<article class="object-card ${isGlassPart(part) ? 'glass-series ' : ''}${workbench ? 'workbench-card workbench-'+part.category : signature ? 'signature-card signature-'+part.category : foundation ? 'foundation-card foundation-'+part.category : toggle ? 'sop-surface sop-original-surface toggle-card' : scroll ? 'scroll-card' : dropdown ? 'dropdown-card' : accordion ? 'accordion-card' : textbox ? 'textbox-card' : action ? 'action-card' : link ? 'link-card' : tabs ? 'tabs-card' : segments ? 'segments-card' : checkbox ? 'checkbox-card' : popup ? 'popup-card' : ornament ? 'ornament-card' : 'block-card'}" data-part="${escapeHTML(part.id)}" data-design="${part.designType}" style="--sop-accent:${part.accent};--accent:${part.accent}"><header class="card-top"><span class="object-no mono">${String(part.order).padStart(2, '0')} /</span><span class="design-badge design-${part.designType}" title="${part.designType === 'A' ? '表現重視' : '実用重視'}">${part.designType}</span><span class="object-type mono">${part.tags.includes('KINETIC') ? 'KINETIC / ' : ''}${escapeHTML(part.material)}</span><span class="state-readout mono" aria-hidden="true"><i></i><span class="state-word">${toggle ? (state.get(part.id) ? 'ON' : 'OFF') : scroll ? 'SCROLL' : dropdown ? 'SELECT' : accordion ? 'EXPAND' : textbox ? 'WRITE' : action ? 'READY' : link ? 'LINK' : tabs ? 'EXPLORE' : segments ? 'CHOOSE' : checkbox ? 'CHECK' : popup ? 'OPEN' : workbench ? 'TRY IT' : signature ? 'TRY IT' : foundation ? 'TRY IT' : ornament ? 'AMBIENT' : 'SURFACE'}</span></span></header><div class="object-stage" data-stage="${escapeHTML(part.id)}"><div class="stage-glow"></div><div class="stage-mount"></div></div><footer class="card-bottom"><div><h2>${escapeHTML(part.name)}<span>${escapeHTML(part.tagline)}</span></h2><p>${escapeHTML(part.description)}</p></div><button type="button" class="open-part" data-open="${escapeHTML(part.id)}" aria-label="${escapeHTML(part.name)} のコードと詳細を開く">${icon('code')}<span>CODE</span>${icon('arrow')}</button></footer></article>`;
    }).join('') : `<div class="empty-state"><span class="empty-symbol">∅</span><h2>まだ、そのパーツはありません。</h2><p>カテゴリやデザインの方向性を変えてみてください。</p><button type="button" class="small-button" id="clear-empty">すべてのパーツを表示</button></div>`;
    if (append) grid.insertAdjacentHTML('beforeend', cardsHTML); else grid.innerHTML = cardsHTML;
    for (const part of visible) {
        const card = required(`[data-part="${part.id}"]`, grid);
        const mount = required('.stage-mount', card);
        mount.innerHTML = part.markup;
        const root = mount.firstElementChild;
        if (!(root instanceof HTMLElement)) throw new Error(`Invalid markup: ${part.id}`);
        root.dataset.demoRoot = '';
        if (part.category === 'blocks' || part.category === 'scrollbars') sampleHelper!.fillSample(root, part);
        const controller = mounts[part.id](root, { onValueChange: value => { if(part.category==='tabs'||part.category==='segments') required('.state-word',card).textContent=value.replace('choice-','0'); }, onOpenChange: open => { required('.state-word', card).textContent = open ? 'OPEN' : part.category === 'popups' ? 'CLOSED' : 'SELECT'; }, onExpandedChange: values => { required('.state-word', card).textContent = String(values.length) + ' OPEN'; }, onProgressChange: progress => { required('.state-word', card).textContent = Math.round(progress * 100) + '%'; }, checked: state.get(part.id), onCheckedChange: (value: boolean) => { stopDemo(); if(part.category==='toggles') syncCard(part.id, value); } });
        const surface = part.category === 'toggles' ? createSurfaceController(card) : undefined;
        const demo = part.category === 'buttons' || part.category === 'links' ? actionHelper!.mountActionDemo(root,part,controller,card,text=>required('.state-word',card).textContent=text) : undefined;
        rendered.push({ part, controller, card, surface, cleanup:part.workbench ? workbenchHelper!.mountWorkbenchSample(root,part,controller) : part.signature ? signatureHelper!.mountSignatureSample(root,part,controller) : part.foundation ? foundationHelper!.mountFoundationSample(root,part,controller) : part.category==='popups'?popupHelper!.mountPopupSample(root,part):demo?.destroy });
        if (isGlassPart(part)) { const entry=rendered[rendered.length-1], prior=entry.cleanup, clean=glassHelper!.glassScene(mount,root); entry.cleanup=()=>{prior?.();clean();}; }
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
    if (details?.isOpen()) for (const r of rendered) { r.controller.setPaused?.(true); r.surface?.setPaused?.(true); }
    grid.setAttribute('aria-busy', 'false');
    if (!append) grid.style.minHeight = '';
    more.hidden = selected.length >= matches.length;
    more.textContent = 'さらに表示（'+rendered.length+' / '+matches.length+'）';
    if (append) rendered.find(r => r.part.id === pending[0]?.id)?.card.querySelector<HTMLElement>('[data-open]')?.focus({preventScroll:true});
    grid.querySelector('#clear-empty')?.addEventListener('click', () => { activeDesign = 'all'; syncDesignFilter(); setCategory('all'); });
    updateControls();
    required('#result-announcement').textContent = `${matches.length}個中${rendered.length}個のパーツを表示しています。`;
}
function setCategory(id: string) {
    activeCategory = id;
    categorySelector?.setOpen(false);
    categorySelector?.setValue(id);
    document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(b => { const active = b.dataset.category === id; b.setAttribute('aria-selected', String(active)); b.tabIndex = active ? 0 : -1; });
    return renderGallery();
}
function syncDesignFilter() { document.querySelectorAll<HTMLButtonElement>('[data-design-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.designFilter === activeDesign))); }
document.querySelectorAll<HTMLButtonElement>('[data-design-filter]').forEach(b => b.addEventListener('click', () => { activeDesign = b.dataset.designFilter ?? 'all'; syncDesignFilter(); renderGallery(); }));
const categoryList = required('#category-tabs');
categoryList.innerHTML = categories.map(c => `<button type="button" role="tab" aria-controls="part-grid" data-category="${c.id}" id="category-option-${c.id}"><span>${c.label}</span><small>${String(c.id === 'all' ? parts.length : parts.filter(p => p.category === c.id).length).padStart(2, '0')}</small></button>`).join('');
categoryList.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setCategory(b.dataset.category ?? 'all')));
wireTabs(categoryList, b => setCategory(b.dataset.category ?? 'all'));
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
required('#progress-demo').addEventListener('click', () => {
    if (progressDemo) { stopDemo(); return; }
    const progress = rendered.filter(r => r.part.category === 'progress' && r.controller.setData);
    if (!progress.length) return;
    progressDemoPhase = 0;
    const tick = () => {
        progress.forEach((r, index) => r.controller.setData?.(progressDemoValues[(index + progressDemoPhase) % progressDemoValues.length]));
        progressDemoPhase = (progressDemoPhase + 1) % progressDemoValues.length;
    };
    tick();
    progressDemo = window.setInterval(tick, 480);
    required('#progress-demo').setAttribute('aria-pressed', 'true');
    required('#progress-demo span').textContent = 'デモ停止';
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
const categoryJump=required<HTMLElement>('.collection-toolbar .category-jump');
const categoryOptions=categories.map(c=>{const count=c.id==='all'?parts.length:parts.filter(p=>p.category===c.id).length;return `<div class="sop-select-option" role="option" data-value="${escapeHTML(c.id)}" data-label="${escapeHTML(c.label)}" aria-selected="false"><span class="sop-select-option-copy"><b>${escapeHTML(c.label)}</b><small>${escapeHTML(c.english)} · ${count} PARTS</small></span><span class="sop-select-check" aria-hidden="true">✓</span></div>`;}).join('');
categoryJump.innerHTML=`<div class="sop-select sop-select-sculpted sop-aurora-select" id="category-jump" data-value="toggles" data-placeholder="カテゴリを選んでください"><span class="sr-only" id="category-jump-caption">カテゴリを選ぶ</span><button class="sop-select-trigger" type="button" role="combobox" aria-labelledby="category-jump-caption category-jump-current" aria-expanded="false" aria-haspopup="listbox"><span class="sop-select-value" id="category-jump-current"></span><span class="sop-select-chevron" aria-hidden="true"></span></button><input class="sop-select-input" type="hidden" name="category" value="toggles"><div class="sop-select-popup" role="listbox" aria-label="パーツのカテゴリ" hidden>${categoryOptions}</div></div>`;
categorySelector=createSelectController(required<HTMLElement>('#category-jump'),{value:activeCategory,onValueChange:id=>{void setCategory(id);}});
window.addEventListener('pagehide',()=>categorySelector?.destroy(),{once:true});
const restored = new URL(location.href).searchParams;
activeDesign = ['A','B'].includes(restored.get('design') ?? '') ? restored.get('design')! : 'all';
syncDesignFilter();
let initialCategory: string = parts.some(p => p.category === 'toggles') ? 'toggles' : parts[0].category;
if (categories.some(c => c.id === restored.get('category'))) initialCategory = restored.get('category')!;
try { const id = decodeURIComponent(location.hash.slice(6)); if (location.hash.startsWith('#part=')) initialCategory = parts.find(p => p.id === id)?.category ?? initialCategory; } catch { /* malformed route */ }
void setCategory(initialCategory).then(() => {
    requestAnimationFrame(() => {
        document.documentElement.classList.add('site-ready');
        window.setTimeout(() => document.getElementById('site-boot')?.remove(), 250);
    });
}, () => {
    const boot = document.getElementById('site-boot');
    const status = document.getElementById('site-boot-status');
    if (status) status.textContent = '読み込めませんでした。';
    const retry = boot?.querySelector<HTMLAnchorElement>('.site-boot-retry');
    if (retry) { retry.href = location.href; retry.hidden = false; }
});
readRoute();
