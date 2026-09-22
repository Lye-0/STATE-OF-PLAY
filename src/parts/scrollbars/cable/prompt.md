# Cable — 再現仕様

編まれたケーブルを、真鍮のクランプが移動する。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は BRAID / BRASS。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Cable — BRAID / BRASS / A */

.sop-scroll-area.sop-cable{--sop-scroll-width:10px;--sop-scroll-radius:4px;--sop-scroll-accent:#e4c88f;--sop-scroll-thumb:#aa895a}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(35deg,#33291e 0 2px,#d0ad7566 2px 3px,#645539 3px 5px);border-inline:1px solid #b6a17a;box-shadow:2px 0 3px #000a}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#d2ae63;opacity:.2}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:30px;border-radius:6px;background:linear-gradient(90deg,#4f402c,#c8aa74 17%,#e1c998 37%,#977944 58%,#ccb082 84%,#4f402c);border:1px solid #d7ba895c;box-shadow:inset 0 2px 1px #f9dba9b3,0 5px 8px #000b}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:9px 7px;border:1px solid #554325;border-radius:3px;background:repeating-linear-gradient(0deg,#5e482277 0 2px,transparent 2px 5px)}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle:after{content:'';position:absolute;width:5px;height:5px;left:11px;bottom:3px;border-radius:50%;background:linear-gradient(135deg,#fbdfb1,#352c1e 49%,#b29772 51%)}
```
