# Phosphor — 再現仕様

緑のドットが道を刻む、小さな端末のスクロールバー。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は PHOSPHOR / MATRIX。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Phosphor — PHOSPHOR / MATRIX / A */

.sop-scroll-area.sop-phosphor{--sop-scroll-width:22px;--sop-scroll-radius:3px;--sop-scroll-accent:#c1f794;--sop-scroll-thumb:#a3d580;--sop-scroll-track:#0d160d}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track{border:1px solid #456635;box-shadow:inset 0 0 8px #000;background:radial-gradient(#8fbe6133 1.2px,transparent 1.5px) 0 0/5px 5px,#0b1209}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:repeating-linear-gradient(0deg,#beff91 0 2px,transparent 2px 5px);opacity:.6;box-shadow:0 0 13px #80d854}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:18px;border:1px solid #d8ffb2;border-radius:2px;background:linear-gradient(90deg,#728944,#d4fda1,#88c461);box-shadow:0 0 13px #9ff35c65,inset 0 1px 2px #fff8}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:7px 4px;background:repeating-linear-gradient(0deg,#173510 0 2px,transparent 2px 5px)}
.sop-scroll-area.sop-phosphor[data-scrolling=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{box-shadow:0 0 22px #a3ff7188}
```
