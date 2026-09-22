# Ember Rail — 再現仕様

炭のような黒い軌道に、橙色の熱がともる。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は CARBON / HEAT。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Ember Rail — CARBON / HEAT / A */

.sop-scroll-area.sop-ember-rail{--sop-scroll-width:18px;--sop-scroll-radius:6px;--sop-scroll-accent:#ffc682;--sop-scroll-thumb:#9c4d2f;--sop-scroll-track:#1e1b1a}
.sop-scroll-area.sop-ember-rail > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(-30deg,#15191b 0 3px,#333035 3px 4px);border:1px solid #4a3930;box-shadow:inset 1px 0 4px #000}
.sop-scroll-area.sop-ember-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.7;background:linear-gradient(#e6552533,#dc6735 78%,#ffddaa);box-shadow:0 0 10px #ff713b}
.sop-scroll-area.sop-ember-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:27px;background:linear-gradient(100deg,#65433b,#24282a 40%,#4f4140 75%,#7d4939);border:1px solid #a3765544;box-shadow:0 5px 9px #000b;border-radius:4px}
.sop-scroll-area.sop-ember-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:7px 5px;background:repeating-linear-gradient(0deg,transparent 0 6px,#fd904c 6px 8px);filter:drop-shadow(0 0 3px #fd6525)}
.sop-scroll-area.sop-ember-rail[data-scrolling=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{box-shadow:0 0 18px #ff723e55,0 4px 6px #0009}
```
