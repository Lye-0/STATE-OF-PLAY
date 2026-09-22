# Editorial Scroll — 再現仕様

紙のような余白に、小さな目印を添える。

タイプB: 控えめな装飾と実用性を優先する。粒子や常時光るループを追加しない。

## 固有の外観
レールの素材は ESSENTIAL / EDITORIAL。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Editorial Scroll — ESSENTIAL / EDITORIAL / B */

.sop-scroll-area.sop-editorial-scroll{--sop-scroll-gutter:34px;--sop-scroll-width:3px;--sop-scroll-track:#dad5c8;--sop-scroll-thumb:#7a725c;--sop-scroll-accent:#7e7964;--sop-scroll-radius:0;--sop-scroll-ink:#373d35;--sop-scroll-muted:#72796b}
.sop-scroll-area.sop-editorial-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:9px;background:#797563;border-radius:1px}
.sop-scroll-area.sop-editorial-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.65;background:#b4ad96}
```
