# Prism Rail — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

クリスタルの多面体を、分光色の溝へ。研磨された稜線と、屈折するスペクトル。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-prism-rail`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* prism-rail — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-prism-rail{--sop-scroll-width:24px;--sop-scroll-radius:2px;--sop-scroll-accent:#c1b8fa}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#b3e4ff66,#48365b6e 18%,#152336 47%,#baa9ef3d 80%,#f6bdd568);border:1px solid #d5c8f370;box-shadow:inset 0 0 0 4px #17162452,0 0 18px #896ddf16}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-track::after{inset:0;background:repeating-linear-gradient(32deg,transparent 0 24px,#ddd9ff2b 24px 25px,transparent 25px 38px);}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.75;background:linear-gradient(var(--sc-along),#d9f2dc,#b0e4eb,#c3b9ef,#efd5c6);box-shadow:0 0 11px #d4bdff65}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:43px;border-radius:0;border:0;clip-path:polygon(50% 0,100% 13%,100% 83%,50% 100%,0 83%,0 13%);background:conic-gradient(from 20deg,#e9e9d4,#82b7c7,#cfcff2,#876c9c,#e3c2ce,#a4dcce,#e9e9d4);box-shadow:inset 2px 0 1px #fff9}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:3px;clip-path:polygon(50% 0,100% 13%,100% 83%,50% 100%,0 83%,0 13%);background:linear-gradient(123deg,#f5eff965,transparent 45%,#f3d5e596 46%,#7ca5cf59 68%,#d1f5c66e)}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:7px 10px;clip-path:polygon(50% 0,100% 20%,100% 75%,50% 100%,0 75%,0 20%);background:linear-gradient(var(--sc-cross),#e6f3fbe0,#e7b9e291 48%,#b5f3d2c7 51%,#eaf5dfb3);}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{z-index:1;border:1px solid #e9ffef76;transform:rotate(45deg) scale(.7);background:conic-gradient(#e8e9ff,#86a5c6,#e6d0ed,#9fcbc9,#e8e9ff);box-shadow:0 0 6px #e2d9fb}
.sop-scroll-area.sop-prism-rail > .sop-scroll-rail > .sop-scroll-ticks::before{inset-block:5%;inset-inline:2px;border-inline:1px solid #bad4f636;transform:skewY(-14deg)}

.sop-scroll-area.sop-prism-rail[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
