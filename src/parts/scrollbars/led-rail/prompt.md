# LED Rail — 再現仕様

琥珀色の節と、スモークガラスの移動する窓。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は AMBER / LIGHTBANK。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* LED Rail — AMBER / LIGHTBANK / A */

.sop-scroll-area.sop-led-rail{--sop-scroll-width:24px;--sop-scroll-radius:5px;--sop-scroll-accent:#f5d08f;--sop-scroll-thumb:#ab8657;--sop-scroll-track:#252017}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track{border:1px solid #8b724357;background:repeating-linear-gradient(0deg,#d2a3563b 0 4px,#151815 4px 8px);box-shadow:inset 0 1px 4px #000}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:repeating-linear-gradient(0deg,#ffca7d 0 4px,transparent 4px 8px);opacity:.8;filter:drop-shadow(0 0 4px #f7b667)}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:34px;border:2px solid #a08a66;background:linear-gradient(105deg,#f9eac844,#19232999 45%,#c6d9cf25);box-shadow:inset 0 1px 2px #fff8,0 5px 8px #000c;border-radius:5px;backdrop-filter:brightness(1.7)}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:6px 5px;border-top:2px solid #e4be79;border-bottom:2px solid #e4be79;opacity:.9}
```
