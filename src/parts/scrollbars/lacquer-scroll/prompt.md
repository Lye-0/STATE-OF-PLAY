# Lacquer — 再現仕様

黒い溝と朱色のつまみ。控えめな金の輪郭を添えて。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は LACQUER / VERMILION。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Lacquer — LACQUER / VERMILION / A */

.sop-scroll-area.sop-lacquer-scroll{--sop-scroll-width:16px;--sop-scroll-radius:20px;--sop-scroll-accent:#e4b68a;--sop-scroll-thumb:#c75945;--sop-scroll-track:#151210}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(90deg,#54382f,#130f0e 15%,#30201c 80%,#755742);border:1px solid #9a785442;box-shadow:inset 0 2px 9px #000}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#a47a48;opacity:.35}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:25px;border-radius:20px;background:linear-gradient(100deg,#77392e,#d1745c 15%,#e7957a 25%,#b14e3a 54%,#8c302b 80%,#bd6f5d);box-shadow:1px 4px 8px #000b,inset 1px 0 2px #f3be945e;border:1px solid #efb07588}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:45% 0 auto;height:3px;background:linear-gradient(90deg,#8b6b3a,#e3c18a,#806535);box-shadow:0 1px 1px #32190e}
```
