# Moiré Rail — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

細密なリブを重ねた光学定規。透過する格子と回転するレンズで、スクロールを可視化。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-moire-rail`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* moire-rail — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-moire-rail{--sop-scroll-width:32px;--sop-scroll-radius:3px;--sop-scroll-accent:#bddce8}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(var(--sc-along),#d1d9dc99 0 1px,#121c25 1px 3px);border:1px solid #758690;box-shadow:inset 0 0 0 3px #17242b,0 5px 11px #0009}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-track::before{inset:5px;background:repeating-linear-gradient(23deg,#bfd1e17d 0 1px,transparent 1px 5px);opacity:.75;transform:translateY(calc(var(--sop-scroll-progress) * 6px))}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(#74ddd21a,#aec4ff66);opacity:.65}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:45px;border-radius:9px;background:linear-gradient(var(--sc-cross),#dceff256,#23343c6e 20%,#b8d9d45c 50%,#40505a96 80%,#e9ffef63);border:1px solid #d2e9ff82;backdrop-filter:blur(.4px);box-shadow:inset 0 0 0 3px #a4bed324,0 4px 12px #000b}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border:1px solid #a8bec395;border-radius:6px;background:repeating-linear-gradient(150deg,#d5e0d247 0 1px,transparent 1px 4px);}
.sop-scroll-area.sop-moire-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{background:repeating-conic-gradient(#dbeed3ba 0 10deg,#0d263866 10deg 20deg);border:2px solid #bad4d3;border-radius:50%;transform:rotate(calc(var(--sop-scroll-progress)*180deg));box-shadow:0 0 0 2px #1d3038,0 2px 4px #0009}

.sop-scroll-area.sop-moire-rail[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
