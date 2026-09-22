# Tideglass — 再現仕様

深い青の管と、水面を思わせる淡いガラスのレンズ。

タイプA: 素材・輪郭・光・つまみの固有形状を保つ。単なる単色の丸棒へ置換しない。

## 固有の外観
レールの素材は WATER / LEVEL。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Tideglass — WATER / LEVEL / A */

.sop-scroll-area.sop-tideglass{--sop-scroll-width:24px;--sop-scroll-radius:24px;--sop-scroll-accent:#9adcea;--sop-scroll-thumb:#9edbe3;--sop-scroll-track:#182631}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(90deg,#18252f,#2b506482 35%,#091923 65%,#7cb3c751);border:1px solid #abd9e254;box-shadow:inset 0 0 8px #619ebc44}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.68;background:linear-gradient(#58a6c85e,#7bd4dd);border-radius:30%;filter:blur(2px)}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:32px;background:radial-gradient(ellipse at 35% 18%,#f0ffffbd,transparent 35%),linear-gradient(130deg,#66a7c0a3,#b2eced96 52%,#24637b80);border:1px solid #b6ecedd4;box-shadow:inset 2px 2px 5px #dfffff99,inset -2px -2px 5px #9fd8ed78,1px 4px 9px #0007;border-radius:48% 48% 45% 45%}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{inset:7px 6px;border:1px solid #defdff6b;border-radius:50%}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-ticks{background:repeating-linear-gradient(0deg,transparent 0 23px,#afd7e154 23px 24px);clip-path:inset(0 1px 0 80%)}
```
