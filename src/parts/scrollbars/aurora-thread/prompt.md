# Aurora Thread — 再現仕様

二本の繊細な光が、色を重ねて静かに流れる。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は AURORA / THREAD。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Aurora Thread — AURORA / THREAD / A */

.sop-scroll-area.sop-aurora-thread{--sop-scroll-width:6px;--sop-scroll-accent:#cdb7fa;--sop-scroll-thumb:#c3dcf4;--sop-scroll-track:#363044}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track{overflow:visible;background:linear-gradient(#a590cb33,#73c4c950,#cc83b33d);box-shadow:-7px 0 0 -2px #98d5de65,7px 0 0 -2px #d8b3e03a}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.8;background:linear-gradient(#bca6ea,#7ae6e0,#e3b7e7);filter:drop-shadow(0 0 7px #bdc4ee)}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:15px;background:linear-gradient(130deg,#a4e7ec,#dcd1ff 30%,#ad86cf 65%,#99e8cf);border:1px solid #e2d7fccc;box-shadow:inset 2px 0 2px #fffffe91,0 0 17px #b4a4e466;border-radius:40%}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:5px 6px;background:#e8fffa9e;border-radius:50%}
.sop-scroll-area.sop-aurora-thread[data-scrolling=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{filter:hue-rotate(calc(var(--sop-scroll-progress)*60deg)) brightness(1.2)}
```
