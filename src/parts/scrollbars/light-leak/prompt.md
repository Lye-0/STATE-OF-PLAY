# Light Leak — 再現仕様

柔らかな桃色の光が、余白に静かな余韻を残す。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は LIGHT / DIFFUSION。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Light Leak — LIGHT / DIFFUSION / A */

.sop-scroll-area.sop-light-leak{--sop-scroll-width:6px;--sop-scroll-accent:#ffd4b5;--sop-scroll-thumb:#fff1d9;--sop-scroll-track:#322629}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track{overflow:visible;background:linear-gradient(#593e52,#292430);box-shadow:0 0 16px #edb5ce21}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.7;background:linear-gradient(#ef989a,#ffe4bb);filter:blur(4px)}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:8px;background:linear-gradient(#fdaac4,#ffefd2 40%,#fff8e5 60%,#f5997c);box-shadow:0 0 5px #fff6e5,0 0 22px #ee9b9b85,0 0 40px #eda8bf38}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle:before{content:'';position:absolute;inset:-10px -10px;background:radial-gradient(ellipse,#f0b4c54a,transparent 68%);border-radius:50%;filter:blur(6px)}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:3px;border-radius:100px;background:#fff5e96b}
```
