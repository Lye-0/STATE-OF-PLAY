# Vernier — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

段差のある切削アルミ、細かな目盛り、ローレット加工のキャリッジ。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-vernier`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* vernier — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-vernier{--sop-scroll-accent:#c5e9d7;--sop-scroll-width:35px;--sop-scroll-radius:3px}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#6c7679,#1c292d 12%,#4a5557 18%,#131c20 23% 76%,#879492 81%,#39464b 89%,#131b1e);border:1px solid #8b95984d;box-shadow:inset 1px 0 #dbe8e069,0 5px 10px #000b}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-track::before{inset:4px 8px;background:repeating-linear-gradient(var(--sc-along),#d7e6d46b 0 1px,transparent 1px 10px);border-inline-start:1px solid #77898357}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-track::after{inset:4px 14px;background:repeating-linear-gradient(var(--sc-along),#101c20 0 9px,#bdccc280 9px 10px)}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#b5dcc23b;opacity:.55}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:46px;border-radius:4px;background:linear-gradient(var(--sc-cross),#4b5659,#cfdbd4 9%,#929d97 18%,#4b5858 50%,#a7b4ad 79%,#dce6db 91%,#3a4c53);border:1px solid #9caeaaaa;box-shadow:inset 0 1px #e8f5eab5,inset 0 -2px #122529,1px 6px 9px #000a}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px 6px;border:1px solid #17282b85;box-shadow:inset 0 1px #f0f4e059;background:repeating-linear-gradient(var(--sc-along),#182a2f5e 0 1px,#dfe7d638 1px 2px,transparent 2px 4px)}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:50% auto;inset-inline:0;block-size:1px;background:#b7ffd5;box-shadow:0 0 4px #83fac5;}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{z-index:1;width:18px;height:18px;margin:-9px;border-radius:50%;background:conic-gradient(#edf3e4,#677976,#bed0bf,#31444b,#e3e7d9,#708480,#edf3e4);border:2px solid #465555;box-shadow:0 1px 2px #000a}
.sop-scroll-area.sop-vernier > .sop-scroll-rail > .sop-scroll-ticks::before{inset:4px 2px;background:repeating-linear-gradient(var(--sc-along),#8faaa35e 0 1px,transparent 1px 20px)}

.sop-scroll-area.sop-vernier[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
