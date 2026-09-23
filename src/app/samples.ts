import { scrollSampleHTML } from '../catalog/scroll-sample';
import { escapeHTML } from './utils';
import type { PartPreview } from '../catalog/types';
const content: Record<string, {eyebrow: string; title: string; sub: string; bottom: string; badge: string}> = {
    'original-surface': { eyebrow: 'LESS, BUT BETTER.', title: 'Room for<br><em>possibility.</em>', sub: '余白から、次のアイデアがはじまる。', bottom: 'THE ORIGINAL', badge: '01' },
    'frosted-glass': { eyebrow: 'A DIFFERENT PERSPECTIVE', title: 'Beyond<br><em>the surface.</em>', sub: 'その向こう側まで、美しく。', bottom: 'GLASS STUDY', badge: '02' },
    'machined-panel': { eyebrow: 'PRECISION / SERIES 03', title: 'Built to<br><em>feel real.</em>', sub: '触れたくなる、精密な存在感。', bottom: 'MACHINED ALUMINIUM', badge: '03' },
    'luminous-frame': { eyebrow: 'AN IDEA, ILLUMINATED', title: 'A quiet<br><em>brilliance.</em>', sub: '光は、輪郭だけに。', bottom: 'CONTINUOUS / 8s', badge: '04' },
    'folded-paper': { eyebrow: 'A NOTE TO YOUR FUTURE', title: 'Make room<br><em>for wonder.</em>', sub: '小さなアイデアを、ここに。', bottom: 'FIELD NOTES — No. 05', badge: '05' },
    'iridescent-surface': { eyebrow: 'NEVER QUITE THE SAME', title: 'Another<br><em>dimension.</em>', sub: '角度の数だけ、違う表情。', bottom: 'OPTICAL EXPERIMENT', badge: '06' },
"aurora-veil": {"eyebrow": "LIGHT FROM ELSEWHERE", "title": "Stay close to<br><em>the unknown.</em>", "sub": "遠い光に、ひとつの余白。", "bottom": "ATMOSPHERE / 01", "badge": "07"},
"contour": {"eyebrow": "FIELD STUDIES / 07", "title": "Find your<br><em>own terrain.</em>", "sub": "まだ描かれていない地形へ。", "bottom": "CONTOUR INTERVAL / 20m", "badge": "08"},
"obsidian": {"eyebrow": "DARK MATTER / ARCHIVE", "title": "Nothing<br><em>ordinary.</em>", "sub": "光のない場所にも、かたちがある。", "bottom": "CARVED IN SILENCE", "badge": "09"},
"copper-plate": {"eyebrow": "CRAFT / MATERIAL No. 08", "title": "Made to<br><em>last.</em>", "sub": "使うたびに、好きになる。", "bottom": "BRUSHED / NOT POLISHED", "badge": "10"},
"ripple-glass": {"eyebrow": "STILL WATER / STUDY", "title": "Let it<br><em>resonate.</em>", "sub": "小さな一滴から、広がっていく。", "bottom": "RIPPLE / 05 RINGS", "badge": "11"},
"velvet": {"eyebrow": "A PRIVATE COLLECTION", "title": "Slow<br><em>moments.</em>", "sub": "急がない美しさを、ここに。", "bottom": "VELVET EDITION / 10", "badge": "12"},
"nocturne": {"eyebrow": "OBSERVATORY / NIGHT 11", "title": "Under<br><em>one sky.</em>", "sub": "まだ名前のない星を探して。", "bottom": "00h 42m / NORTH", "badge": "13"},
"blueprint": {"eyebrow": "DESIGN ENGINEERING", "title": "Draw<br><em>the future.</em>", "sub": "次の一手を、正確に。", "bottom": "SCALE 1:1 / REV. 03", "badge": "14"},
"gallery-plinth": {"eyebrow": "OBJECTS WORTH KEEPING", "title": "In good<br><em>company.</em>", "sub": "好きなものに、ふさわしい場所を。", "bottom": "GALLERY / PIECE 13", "badge": "15"},
"prismatic-edge": {"eyebrow": "THE BEAUTY OF THE EDGE", "title": "Different<br><em>by nature.</em>", "sub": "ほんの少し、視点を変える。", "bottom": "DICHROIC / SERIES 14", "badge": "16"}
};
export function fillSample(root: HTMLElement, part: PartPreview) {
    if (part.category === 'scrollbars') {
      const content = root.querySelector('.sop-scroll-content');
      if (content) content.innerHTML = scrollSampleHTML(part);
      return;
    }
    if (part.category !== 'blocks')
        return;
    const c = content[part.id] ?? { eyebrow: 'YOUR COMPONENT', title: 'Your next<br><em>idea.</em>', sub: part.description, bottom: 'STATE OF PLAY', badge: '00' };
    const slot = root.querySelector('.sop-surface-content');
    if (!slot)
        return;
    slot.classList.add('surface-sample');
    if (part.designType === 'B' && part.id !== 'original-surface') {
      slot.classList.add('essential-sample');
      const variant = essentialKinds[part.id] ?? 'note';
      slot.innerHTML = essentialContent[variant];
      slot.querySelector<HTMLButtonElement>('[data-sample-action]')?.addEventListener('click', event => {
        const button = event.currentTarget as HTMLButtonElement;
        const active = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(active));
        button.textContent = active ? '✓ 確認しました' : '内容を確認';
      });
      return;
    }
    slot.innerHTML = `<div class="sample-eyebrow">${escapeHTML(c.eyebrow)}<span class="sample-index">${c.badge}</span></div><div class="sample-orbit" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h3>${c.title}</h3><p>${escapeHTML(c.sub)}</p><div class="sample-bottom"><span>${escapeHTML(c.bottom)}</span><span class="sample-arrow" aria-hidden="true">↗</span></div>`;
}

// Sample content belongs to the catalogue, never to the exported container.
// Values are illustrative demo values, not external data or application state.
const essentialKinds: Record<string,string> = {"paper-card": "note", "slate-card": "metrics", "outline-card": "list", "inset-panel": "settings", "accent-card": "note", "soft-tile": "metrics", "editorial-card": "editorial", "status-card": "list"};
const essentialContent: Record<string,string> = {
  note: `<div class="ess-top"><span>PROJECT NOTE</span><small>サンプル</small></div><h3>次の一歩を、<br>ここから。</h3><p>アイデアと必要な情報を、<br>ひとつの場所にまとめる。</p><div class="ess-footer"><span>更新 · たった今</span><button type="button" data-sample-action aria-pressed="false">内容を確認</button></div>`,
  metrics: `<div class="ess-top"><span>PROJECT OVERVIEW</span><small>サンプル</small></div><h3>着実に、前へ。</h3><div class="ess-metric"><strong>72<small>%</small></strong><span>完了したタスク<br><b>18 / 25</b></span></div><div class="ess-progress"><i></i></div><div class="ess-footer"><span>今週の進み具合</span><span>↗ 順調です</span></div>`,
  list: `<div class="ess-top"><span>REVIEW CHECKLIST</span><small>サンプル</small></div><h3>小さく、整える。</h3><ul class="ess-list"><li><i>✓</i>レイアウトの確認<span>完了</span></li><li><i>✓</i>テキストの見直し<span>完了</span></li><li><i class="pending"></i>最終プレビュー<span>次へ</span></li></ul><div class="ess-footer"><span>2 / 3 COMPLETE</span><span>↗</span></div>`,
  settings: `<div class="ess-top"><span>WORKSPACE</span><small>サンプル</small></div><h3>いつもの環境。</h3><div class="ess-rows"><div><span>表示言語</span><b>日本語</b></div><div><span>テーマ</span><b>システムに合わせる</b></div><div><span>自動保存</span><b>有効</b></div></div><div class="ess-footer"><span>変更は保存されています</span><span>✓</span></div>`,
  editorial: `<div class="ess-top"><span>DESIGN JOURNAL</span><small>サンプル</small></div><h3>余白は、<br>考える場所。</h3><p>大切なものが見えるように。<br>引き算から始める、小さな設計。</p><div class="ess-footer"><span>NOTE / 001</span><span>3 MIN READ ↗</span></div>`
};
