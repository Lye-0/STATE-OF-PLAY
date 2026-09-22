# Vernier — 再現仕様

刻まれた目盛りと、削り出しの金属キャリッジ。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は MACHINED / SCALE。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Vernier — MACHINED / SCALE / A */

.sop-scroll-area.sop-vernier{--sop-scroll-gutter:50px;--sop-scroll-width:16px;--sop-scroll-radius:3px;--sop-scroll-accent:#d5e9c6}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(90deg,#707975,#222a28 12%,#0b1010 45%,#a4aea3 92%,#29302e);border:1px solid #77857d66;box-shadow:0 4px 9px #0009}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-ticks{inset-inline-start:1px;inset-inline-end:0;background:repeating-linear-gradient(0deg,transparent 0 9px,#8f998575 9px 10px);mask-image:linear-gradient(90deg,#000 0 7px,transparent 7px 40px,#000 40px)}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:32px;border-radius:4px;border:1px solid #b0bdb3;background:linear-gradient(100deg,#252e2c,#cdd5cd 20%,#73827a 44%,#d2ddd1 70%,#45554c);box-shadow:inset 0 1px 1px #fff9,2px 5px 6px #000b}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:8px 6px;background:repeating-linear-gradient(0deg,#0d1d1855 0 1px,#e8efda44 1px 2px,transparent 2px 5px);border-radius:2px}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle:after{content:'';position:absolute;left:-6px;top:50%;width:7px;height:2px;background:#d8f6a9;box-shadow:0 0 8px #c7fa89}
```
