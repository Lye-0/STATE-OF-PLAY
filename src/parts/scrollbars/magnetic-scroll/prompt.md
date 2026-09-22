# Magnetic — 再現仕様

二本の細いレールと、重みのある金属のスライダー。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は MAGNETIC / DUAL RAIL。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Magnetic — MAGNETIC / DUAL RAIL / A */

.sop-scroll-area.sop-magnetic-scroll{--sop-scroll-width:20px;--sop-scroll-radius:5px;--sop-scroll-accent:#c6e6d1;--sop-scroll-thumb:#a6b8b0}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track{background:transparent;border-inline:2px solid #8b9b9466;box-shadow:inset 1px 0 #fff2,1px 0 #000}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(90deg,#aacfb22c,#aadac900,#aacfb22c);opacity:.5}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:32px;background:linear-gradient(105deg,#59665e,#d5e1d4 16%,#8f9d92 36%,#dce6dc 60%,#788b81 83%,#33443d);border:1px solid #bccbc0bb;box-shadow:2px 6px 6px #0009,inset 0 1px 2px #fff8;border-radius:6px}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:10px 7px;background:linear-gradient(90deg,#34473d,#8da398,#203e2e);border-radius:3px;box-shadow:inset 0 0 2px #000}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip:after{content:'';position:absolute;left:4px;right:4px;top:50%;height:2px;background:#ddf7c2;box-shadow:0 0 6px #c9fa93}
```
