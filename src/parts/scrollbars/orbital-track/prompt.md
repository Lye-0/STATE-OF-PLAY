# Orbital Track — 再現仕様

環に支えられた小さな天体が、軌道を移動する。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は ORBITAL / FIELD。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Orbital Track — ORBITAL / FIELD / A */

.sop-scroll-area.sop-orbital-track{--sop-scroll-width:4px;--sop-scroll-accent:#c5d0ff;--sop-scroll-thumb:#839bc9;--sop-scroll-track:#505c854f}
.sop-scroll-area.sop-orbital-track > .sop-scroll-rail > .sop-scroll-track{overflow:visible;box-shadow:-9px 0 0 -1px #687da243,9px 0 0 -1px #687da243}
.sop-scroll-area.sop-orbital-track > .sop-scroll-rail > .sop-scroll-ticks{border:1px solid #8d9bc035;border-radius:50%;inset-inline:5px;box-shadow:inset 0 0 9px #8ba7e50c}
.sop-scroll-area.sop-orbital-track > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.6;background:#a5bde2}
.sop-scroll-area.sop-orbital-track > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:30px;background:linear-gradient(#24304a,#6984ad 15%,#bfcce1 30%,#48628f 55%,#0b1931);border:1px solid #a6c3e2a3;border-radius:50%;box-shadow:inset 2px 0 3px #dfeeff99,2px 4px 8px #0009}
.sop-scroll-area.sop-orbital-track > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:50% -7px auto;height:10px;transform:translateY(-50%) rotate(-20deg);border:1px solid #c6cbde;border-radius:50%;box-shadow:0 1px 3px #111827}
```
