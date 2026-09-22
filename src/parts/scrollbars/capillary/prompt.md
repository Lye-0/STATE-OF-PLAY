# Capillary — 再現仕様

透明な管に光が満ち、液滴のようなつまみが滑る。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は GLASS / CAPILLARY。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Capillary — GLASS / CAPILLARY / A */

.sop-scroll-area.sop-capillary {--sop-scroll-width:20px;--sop-scroll-accent:#a2f2df;--sop-scroll-thumb:#87d6d8;--sop-scroll-track:#112329}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(90deg,#d7ffff40,#17465270 22%,#08171c 45%,#85dfe732 80%,#d0ffff66);border:1px solid #9de9ed66;box-shadow:inset 2px 0 3px #cff9ff33,0 4px 12px #0008}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.75;background:linear-gradient(0deg,#d8fff5,#70e1dc 50%,#46aab444);box-shadow:0 0 15px #90ffe8;filter:blur(1px)}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:26px;border-radius:30px;background:radial-gradient(ellipse at 20% 20%,#fffefea8,transparent 25%),linear-gradient(90deg,#c4ffff99,#579dae55 32%,#9cf7e582 80%,#e2fffaca);border:1px solid #c7ffefd6;box-shadow:inset 2px 0 2px #f0fffc,1px 4px 9px #0009,0 0 16px #97ffe832}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:8px 5px;border-top:1px solid #e0fffc;border-bottom:1px solid #aaf8e9;border-radius:20px}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-ticks{background:radial-gradient(circle at 50% 28%,#cfffff80 0 1px,transparent 2px),radial-gradient(circle at 50% 76%,#cfffff50 0 2px,transparent 3px)}
```
