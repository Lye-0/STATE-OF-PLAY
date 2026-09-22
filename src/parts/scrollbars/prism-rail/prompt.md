# Prism Rail — 再現仕様

スペクトルの細い道を、宝石のようなつまみが進む。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は CRYSTAL / SPECTRUM。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Prism Rail — CRYSTAL / SPECTRUM / A */

.sop-scroll-area.sop-prism-rail{--sop-scroll-width:8px;--sop-scroll-radius:1px;--sop-scroll-accent:#c4c2ff;--sop-scroll-thumb:#b5b1de}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(90deg,#172129,#c7dbdb77 35%,#aa8ea847 70%,#292732);border:1px solid #cbb9e645;box-shadow:0 0 10px #ca9dc82a;overflow:visible}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(#e8bddc,#dfd4a4,#8fd9d1,#b4afff);opacity:.9}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:32px;border-radius:0;clip-path:polygon(50% 0,100% 15%,100% 85%,50% 100%,0 85%,0 15%);background:conic-gradient(from 30deg,#d2cfed,#efc5cb,#97c8bd,#618da1,#cbc0e9,#d2cfed);border:0;box-shadow:inset 0 0 6px #fff}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:8px 9px;clip-path:polygon(50% 0,100% 18%,100% 82%,50% 100%,0 82%,0 18%);background:linear-gradient(135deg,#f9eeff,#91bdd1 50%,#d5efd8)}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb{filter:drop-shadow(0 0 7px #bcb5e552)}
```
