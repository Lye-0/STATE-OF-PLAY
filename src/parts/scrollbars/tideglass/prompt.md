# Tideglass — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

海を閉じ込めたフロート。液面の光とレンズの輪が、読み進める距離に追従する。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-tideglass`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* tideglass — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-tideglass{--sop-scroll-width:29px;--sop-scroll-radius:20px;--sop-scroll-accent:#88d9eb}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#82d7dd66,#102b40 25%,#12212f 72%,#b9eaf35c);border:1px solid #a1d3e58a;box-shadow:inset 0 0 0 3px #183b504f,0 8px 14px #0009}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-track::before{inset:5px;border-radius:15px;border-inline:1px solid #d1f9f335;background:repeating-linear-gradient(160deg,transparent 0 27px,#b8dcec3c 27px 28px,transparent 28px 53px)}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:1;inset:4px;background:linear-gradient(var(--sc-along),#a4e9f24d,#1e7798 75%,#baedf1 99%);border-radius:20px;box-shadow:0 0 13px #8fc7ed36}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:43px;border-radius:23px;background:linear-gradient(var(--sc-cross),#dbf6f59e,#225a7470 18%,#4388a477 65%,#c7f8f0b8);border:1px solid #c3f4f3ab;box-shadow:inset 2px 0 1px #f6fff7,inset -2px -1px 3px #96e7e8,0 6px 10px #0009}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border-radius:20px;border-block:2px solid #ddfbf59c;background:radial-gradient(ellipse at 50% 95%,#c9faf795,transparent 42%)}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:48% auto;inset-inline:5px;block-size:7px;border-radius:50%;border-block-start:1px solid #efffffbd;background:#b1ecde24;transform:rotate(-10deg)}
.sop-scroll-area.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border-radius:50%;border:1px solid #d6ffff5e;background:radial-gradient(circle at 32% 22%,#e4ffffd1,transparent 23%),radial-gradient(circle at 40% 35%,#6ee6d166,#3983a36b 55%,#153749);box-shadow:inset 0 0 4px #cbffff9c;transform:scale(.76)}

.sop-scroll-area.sop-tideglass[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
