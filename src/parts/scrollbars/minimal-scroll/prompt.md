# Minimal Scroll — 再現仕様

細く、見つけやすく。日常の画面になじむニュートラルな一本。

タイプB: 控えめな装飾と実用性を優先する。粒子や常時光るループを追加しない。

## 固有の外観
レールの素材は ESSENTIAL / NEUTRAL。形状と色、陰影はstyles.cssの値を正本にする。つまみはスクロール量に比例して長さが変わる設計なので固定長へ変更しない。
## 操作と構造を維持
ネイティブのoverflowとscrollTop/scrollLeftを状態の正本にする。ホイールやタッチを横取りせず、偽の慣性スクロールを実装しない。内容に対するviewport比率からつまみの長さを決め、scrollと連動する。ドラッグ、トラッククリック、矢印・PageUp/PageDown・Space/Shift+Space・Home/Endを維持する。横方向とRTLにも対応する。

## 導入時の条件
ページ全体やbodyのスクロールバーを置換しない。選んだ領域をこのコンポーネントで包む。高さに制約が必要。装飾レールは役割scrollbar、aria-controls、aria-valuenowを持ち、viewportにも名前とキーボードフォーカスを提供する。中身はchildren/スロットとして受け取る。デモ文章を本体に固定しない。

## 後片付けとフォールバック
イベントとObserver、予約済みRAF、idleタイマーをdestroyで解除する。毎フレームの常時描画はしない。動きを減らす設定を尊重し、強制カラー時は標準スクロールバーへ戻す。JavaScript初期化前も内容は標準のoverflowで読める。内容が短いときは不要なレールを表示しない。リサイズ・動的コンテンツ・画像の読み込みにも長さを追従させる。

## 固有スタイル（設計値）
```css
/* Minimal Scroll — ESSENTIAL / NEUTRAL / B */

.sop-scroll-area.sop-minimal-scroll{--sop-scroll-gutter:32px;--sop-scroll-width:6px;--sop-scroll-track:#84939e26;--sop-scroll-thumb:#abb9c1;--sop-scroll-accent:#c4dae5;--sop-scroll-radius:8px}
.sop-scroll-area.sop-minimal-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{display:none}
.sop-scroll-area.sop-minimal-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{border:1px solid #d4e0e12b}
```
