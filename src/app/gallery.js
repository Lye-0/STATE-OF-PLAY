"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_2 = require("./utils.js");
const categories_1 = require("../catalog/categories.js");
const registry_generated_1 = require("../catalog/registry.generated.js");
const surface_controller_1 = require("../shared/surface-controller.ts");
const details_1 = require("./details.js");
const audio_1 = require("./audio.js");
const utils_1 = require("./utils.js");
const samples_1 = require("./samples.js");
const parts = window.SOP_CATALOG;
const state = new Map(parts.filter(p => p.category === 'toggles').map(p => [p.id, p.initial]));
let activeCategory = 'all', query = '', demo = 0, demoIndex = 0;
const sound = new audio_1.TactileAudio();
const grid = utils_2.required('#part-grid');
const search = utils_2.required('#search-parts');
let rendered = [];
const details = details_1.createDetails(parts, { onActive(active) {
        stopDemo();
        for (const r of rendered)
            r.controller.setPaused?.(active);
    }, onNavigate: openPart });
function openPart(id, trigger) {
    if (location.hash !== `#part=${id}`)
        history.pushState(null, '', `#part=${id}`);
    details.open(id, trigger);
}
function readRoute() {
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
function stopDemo() { clearInterval(demo); demo = 0; const b = utils_2.required(`#${'demo'}`); b.setAttribute('aria-pressed', 'false'); utils_2.required('span', b).textContent = 'デモ再生'; }
function syncCard(id, value) {
    state.set(id, value);
    const r = rendered.find(r => r.part.id === id);
    if (r) {
        r.card.classList.toggle('is-on', value);
        utils_2.required('.state-word', r.card).textContent = value ? 'ON' : 'OFF';
    }
    updateControls();
}
function updateControls() {
    const count = rendered.filter(r => r.part.category === 'toggles').length;
    utils_2.required(`#${'toggle-controls'}`).hidden = count === 0;
    const on = rendered.filter(r => r.part.category === 'toggles' && state.get(r.part.id)).length;
    utils_2.required(`#${'active-count'}`).textContent = String(on).padStart(2, '0');
    utils_2.required(`#${'toggle-total'}`).textContent = String(count).padStart(2, '0');
    utils_2.required(`#${'visible-count'}`).textContent = `${String(rendered.length).padStart(2, '0')} OBJECTS`;
}
function matchPart(part) {
    const haystack = [part.name, part.category, part.description, part.material, ...part.tags].join(' ').normalize('NFKC').toLowerCase();
    return (activeCategory === 'all' || part.category === activeCategory) && query.normalize('NFKC').toLowerCase().split(/\s+/).every(token => haystack.includes(token));
}
function renderGallery() {
    stopDemo();
    rendered.forEach(r => { r.controller.destroy(); r.surface?.destroy(); });
    rendered = [];
    const visible = parts.filter(matchPart);
    grid.innerHTML = visible.length ? visible.map(part => {
        const toggle = part.category === 'toggles';
        return `<article class="object-card ${toggle ? 'sop-surface sop-original-surface toggle-card' : 'block-card'}" data-part="${utils_1.escapeHTML(part.id)}" style="--sop-accent:${part.accent};--accent:${part.accent}"><header class="card-top"><span class="object-no mono">${String(part.order).padStart(2, '0')} /</span><span class="object-type mono">${utils_1.escapeHTML(part.material)}</span><span class="state-readout mono" aria-hidden="true"><i></i><span class="state-word">${toggle ? (state.get(part.id) ? 'ON' : 'OFF') : 'SURFACE'}</span></span></header><div class="object-stage" data-stage="${utils_1.escapeHTML(part.id)}"><div class="stage-glow"></div><div class="stage-mount"></div></div><footer class="card-bottom"><div><h2>${utils_1.escapeHTML(part.name)}<span>${utils_1.escapeHTML(part.tagline)}</span></h2><p>${utils_1.escapeHTML(part.description)}</p></div><button type="button" class="open-part" data-open="${utils_1.escapeHTML(part.id)}" aria-label="${utils_1.escapeHTML(part.name)} のコードと詳細を開く">${utils_1.icon('code')}<span>CODE</span>${utils_1.icon('arrow')}</button></footer></article>`;
    }).join('') : `<div class="empty-state"><span class="empty-symbol">∅</span><h2>まだ、そのパーツはありません。</h2><p>検索する言葉やカテゴリを変えてみてください。</p><button type="button" class="small-button" id="clear-empty">すべてのパーツを表示</button></div>`;
    for (const part of visible) {
        const card = utils_2.required(`[data-part="${part.id}"]`, grid);
        const mount = utils_2.required('.stage-mount', card);
        mount.innerHTML = part.markup;
        const root = mount.firstElementChild;
        root.dataset.demoRoot = '';
        samples_1.fillSample(root, part);
        const controller = registry_generated_1.mounts[part.id](root, { checked: state.get(part.id), onCheckedChange: value => { stopDemo(); syncCard(part.id, value); } });
        const surface = part.category === 'toggles' ? surface_controller_1.createSurfaceController(card) : undefined;
        rendered.push({ part, controller, card, surface });
        if (part.category === 'toggles')
            syncCard(part.id, !!state.get(part.id));
        card.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('[data-demo-root]'))
                return;
            const trigger = utils_2.required('[data-open]', card);
            openPart(part.id, trigger);
        });
        root.addEventListener('pointerdown', stopDemo);
    }
    grid.querySelector('#clear-empty')?.addEventListener('click', () => { query = ''; search.value = ''; setCategory('all'); });
    updateControls();
    utils_2.required(`#${'search-clear'}`).hidden = !query;
    utils_2.required(`#${'result-announcement'}`).textContent = `${visible.length}個のパーツを表示しています。`;
}
function setCategory(id) {
    activeCategory = id;
    document.querySelectorAll('[data-category]').forEach(b => { const active = b.dataset.category === id; b.setAttribute('aria-selected', String(active)); b.tabIndex = active ? 0 : -1; });
    renderGallery();
}
const categoryList = utils_2.required(`#${'category-tabs'}`);
categoryList.innerHTML = categories_1.categories.map(c => `<button type="button" role="tab" aria-controls="part-grid" data-category="${c.id}" id="category-${c.id}"><span>${c.label}</span><small>${String(c.id === 'all' ? parts.length : parts.filter(p => p.category === c.id).length).padStart(2, '0')}</small></button>`).join('');
categoryList.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setCategory(b.dataset.category ?? 'all')));
utils_1.wireTabs(categoryList, b => setCategory(b.dataset.category ?? 'all'));
search.addEventListener('input', () => { query = search.value.trim(); renderGallery(); });
utils_2.required(`#${'search-clear'}`).addEventListener('click', () => { search.value = ''; query = ''; renderGallery(); search.focus(); });
search.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        query = '';
        search.value = '';
        renderGallery();
    }
});
document.addEventListener('keydown', event => {
    if (event.key === '/' && !details.isOpen() && !event.target.closest('input,textarea,select,[contenteditable]')) {
        event.preventDefault();
        search.focus();
    }
});
for (const [id, on] of [['all-on', true], ['all-off', false]]) {
    utils_2.required(`#${id}`).addEventListener('click', () => {
        stopDemo();
        for (const r of rendered) {
            if (!r.controller.setChecked)
                continue;
            r.controller.setChecked?.(on);
            syncCard(r.part.id, on);
        }
    });
}
utils_2.required(`#${'demo'}`).addEventListener('click', () => {
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
    utils_2.required(`#${'demo'}`).setAttribute('aria-pressed', 'true');
    utils_2.required('#demo span').textContent = 'デモ停止';
});
const soundButton = utils_2.required(`#${'sound'}`);
soundButton.addEventListener('click', async () => {
    soundButton.disabled = true;
    const target = !sound.enabled;
    const enabled = await sound.setEnabled(target);
    soundButton.disabled = false;
    soundButton.setAttribute('aria-pressed', String(enabled));
    utils_2.required('span', soundButton).textContent = enabled ? 'SOUND ON' : 'SOUND OFF';
    if (target && !enabled)
        utils_1.toast('この環境では効果音を有効にできませんでした。');
});
document.addEventListener('sop:change', event => {
    const detail = event.detail;
    const part = parts.find(p => p.id === detail.id);
    if (part?.category === 'toggles')
        sound.play(part.config, detail.checked);
});
document.addEventListener('visibilitychange', () => {
    if (document.hidden)
        stopDemo();
});
window.StateOfPlay = Object.freeze({ version: '2.3.0', getStates: () => Object.fromEntries(state), getPartCount: () => parts.length });
setCategory('all');
readRoute();
