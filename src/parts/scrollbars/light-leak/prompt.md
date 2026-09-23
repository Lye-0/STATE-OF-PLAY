# Light Leak — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

フィルムのエッジから漏れる夕焼け色。曇りガラスのビューファインダーが切り取る光。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-light-leak`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* light-leak — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-light-leak{--sop-scroll-width:30px;--sop-scroll-radius:4px;--sop-scroll-accent:#efb486}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-along),#321427,#d45e454f 25%,#fbc47c85 43%,#d687c658 61%,#223742 83%,#d66a5537);border:1px solid #b6877063;box-shadow:inset 0 0 9px #0009,0 0 18px #dd866523}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track::before{inset:0;background:linear-gradient(var(--sc-cross),#ffe5b670,transparent 18% 72%,#f3724859);border-inline:2px solid #2d2428}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track::after{inset-block:3px;inset-inline:2px;background:repeating-linear-gradient(var(--sc-along),#090d16b3 0 5px,transparent 5px 14px);mask-image:linear-gradient(var(--sc-cross),#000 0 14%,transparent 14% 86%,#000 86%)}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(var(--sc-along),transparent,#ef985624,#ffe7cdcc);opacity:.9}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:43px;border:1px solid #ddb9a17b;border-radius:7px;background:linear-gradient(var(--sc-cross),#e2ccc168,#eee0d61c 40%,#64607247 78%,#f3d3ca80);backdrop-filter:blur(1px) saturate(1.6);box-shadow:inset 1px 1px #ffe9dc88,inset -1px -1px #474251,0 7px 13px #0009}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:6px;border:1px solid #f9e5d161;border-radius:2px;box-shadow:0 0 0 2px #211b224a}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:50% auto;inset-inline:3px;block-size:1px;background:linear-gradient(90deg,#f7cd8d,transparent 30% 70%,#f7cd8d)}
.sop-scroll-area.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border-radius:50%;border:1px solid #fae9d89e;background:radial-gradient(circle,#fdf1d229,transparent 65%);transform:scale(.7)}

.sop-scroll-area.sop-light-leak[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
