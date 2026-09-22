import { escapeHTML } from './utils';
import type { Part } from '../catalog/types';
const content: Record<string, {eyebrow: string; title: string; sub: string; bottom: string; badge: string}> = {
    'original-surface': { eyebrow: 'LESS, BUT BETTER.', title: 'Room for<br><em>possibility.</em>', sub: '余白から、次のアイデアがはじまる。', bottom: 'THE ORIGINAL', badge: '01' },
    'frosted-glass': { eyebrow: 'A DIFFERENT PERSPECTIVE', title: 'Beyond<br><em>the surface.</em>', sub: 'その向こう側まで、美しく。', bottom: 'GLASS STUDY', badge: '02' },
    'machined-panel': { eyebrow: 'PRECISION / SERIES 03', title: 'Built to<br><em>feel real.</em>', sub: '触れたくなる、精密な存在感。', bottom: 'MACHINED ALUMINIUM', badge: '03' },
    'luminous-frame': { eyebrow: 'AN IDEA, ILLUMINATED', title: 'A quiet<br><em>brilliance.</em>', sub: '光は、輪郭だけに。', bottom: 'CONTINUOUS / 8s', badge: '04' },
    'folded-paper': { eyebrow: 'A NOTE TO YOUR FUTURE', title: 'Make room<br><em>for wonder.</em>', sub: '小さなアイデアを、ここに。', bottom: 'FIELD NOTES — No. 05', badge: '05' },
    'iridescent-surface': { eyebrow: 'NEVER QUITE THE SAME', title: 'Another<br><em>dimension.</em>', sub: '角度の数だけ、違う表情。', bottom: 'OPTICAL EXPERIMENT', badge: '06' }
};
export function fillSample(root: HTMLElement, part: Part) {
    if (part.category !== 'blocks')
        return;
    const c = content[part.id] ?? { eyebrow: 'YOUR COMPONENT', title: 'Your next<br><em>idea.</em>', sub: part.description, bottom: 'STATE OF PLAY', badge: '00' };
    const slot = root.querySelector('.sop-surface-content');
    if (!slot)
        return;
    slot.classList.add('surface-sample');
    slot.innerHTML = `<div class="sample-eyebrow">${escapeHTML(c.eyebrow)}<span class="sample-index">${c.badge}</span></div><div class="sample-orbit" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h3>${c.title}</h3><p>${escapeHTML(c.sub)}</p><div class="sample-bottom"><span>${escapeHTML(c.bottom)}</span><span class="sample-arrow" aria-hidden="true">↗</span></div>`;
}
