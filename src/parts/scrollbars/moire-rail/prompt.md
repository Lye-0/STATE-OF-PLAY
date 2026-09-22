# Moiré Rail — 再現仕様

繊細な線の干渉が、動きに合わせて表情を変える。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は OPTICAL / INTERFERENCE。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Moiré Rail — OPTICAL / INTERFERENCE / A */

.sop-scroll-area.sop-moire-rail{--sop-scroll-width:22px;--sop-scroll-radius:2px;--sop-scroll-accent:#d6d6ea;--sop-scroll-thumb:#d1d5e0}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(35deg,#151922 0 3px,#b7b9c83d 3px 4px);border:1px solid #b5bac348}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.3;background:#7b80aa}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:28px;background:repeating-linear-gradient(-35deg,#f1edf18c 0 1px,#12151b 1px 4px);border:1px solid #d4d6e4;border-radius:2px;box-shadow:0 3px 9px #0008}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:0;mix-blend-mode:screen;background:repeating-linear-gradient(35deg,transparent 0 4px,#fcf2ff7a 4px 5px);background-position:0 calc(var(--sop-scroll-progress)*60px)}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle:after{content:'';position:absolute;inset:50% 5px auto;height:2px;background:#f9eafb;box-shadow:0 0 4px #ddd9ff}
```
