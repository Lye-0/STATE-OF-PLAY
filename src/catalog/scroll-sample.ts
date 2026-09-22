/** Gallery/standalone demonstration only. Never a dependency of the exported component. */
export function scrollSampleHTML(part: {name: string; designType: 'A' | 'B'}): string {
  const label = part.name.replace(/[<>&"']/g, '');
  const chapters = ['Small details.', 'A sense of place.', 'Quiet movement.', 'Room to explore.', 'Made to last.', 'Keep going.'];
  const notes = ['小さな動きにも、心地よい手触りを。光と陰影、その間にある余白をたどる。', 'ホイールでも、指先でも。いつもの操作のまま、少し先まで読み進める。', 'スクロールはそのまま。つまみの位置と長さが、いま見えている範囲を知らせる。', '文章も、画像も、リストも。あなたのコンテンツを、この場所へ。', '見た目の個性と、使いやすさ。そのどちらも、置き去りにしない。', '最後までたどり着きました。つまみを引いて、もう一度はじめから。'];
  return `<div class="scroll-sample ${part.designType === 'B' ? 'scroll-sample-essential' : ''}">${chapters.map((title, index) => `<section class="scroll-chapter"><span class="scroll-eyebrow">${String(index+1).padStart(2,'0')} / ${index === 0 ? 'A STUDY IN SCROLL' : 'THE READING ROOM'}</span><h3>${index === 0 ? (part.designType === 'A' ? 'Follow the<br><em>feeling.</em>' : 'Read.<br><em>Without friction.</em>') : title}</h3><p>${notes[index]}</p>${index === 0 ? '<div class="scroll-sample-rule"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' : ''}<span class="scroll-chapter-end">${index===0 ? label.toUpperCase() : 'STATE OF PLAY'} <span>↓ ${String(index+1).padStart(2,'0')}</span></span></section>`).join('')}</div>`;
}
