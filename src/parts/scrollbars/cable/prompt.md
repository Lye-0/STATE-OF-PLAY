# Cable — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

二本撚りの編組ケーブルと、上下の真鍮フェルール。握るほど確かな機械的なクランプ。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-cable`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* cable — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-cable{--sop-scroll-width:17px;--sop-scroll-radius:9px;--sop-scroll-accent:#e5c388}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(35deg,#9e8d66 0 2px,#454332 2px 4px,#ded0a34d 4px 5px),repeating-linear-gradient(-35deg,#70634a 0 2px,#262d26 2px 4px);border-inline:2px solid #ac986157;box-shadow:inset 2px 0 4px #f5e0a76e,inset -2px 0 4px #0b0e10,2px 3px 5px #000e}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-track::after{inset:0;background:linear-gradient(var(--sc-cross),transparent,#141c1680 45% 55%,transparent)}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#ffe7a9;opacity:.18}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:39px;border:1px solid #e0c5928c;border-radius:7px;background:linear-gradient(var(--sc-cross),#6c4b27,#dbc48a 12%,#9f7a49 32%,#cba86b 45%,#ebd4a3 69%,#8c6436 90%,#523e28);box-shadow:inset 0 2px #f8e2b495,inset 0 -2px #4e321e,1px 7px 8px #000b}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset-block:5px;inset-inline:4px;border-block:4px double #382a239e;border-radius:4px;background:repeating-linear-gradient(var(--sc-along),#352a213d 0 1px,#e9c98a69 1px 2px,transparent 2px 5px)}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:10px 7px;border:1px solid #493c277d;border-radius:5px;background:#241e243b}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{z-index:1;border-radius:50%;background:conic-gradient(#7e674a,#e9dba8,#6d512e,#d9b774,#867652,#f2dca4,#7e674a);border:2px solid #907045;box-shadow:inset 0 0 0 3px #ccb277,0 2px 3px #0009}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip::after{content:'';position:absolute;inset:9px 3px 8px;background:#4c351e;rotate:-35deg}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-ticks::before,.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-ticks::after{inset-inline:calc(50% - 12px);inline-size:24px;block-size:18px;background:repeating-linear-gradient(var(--sc-along),#d4b780 0 2px,#664d2c 2px 3px);border:1px solid #e0bd6966;border-radius:4px}
.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-ticks::before{inset-block-start:2px}.sop-scroll-area.sop-cable > .sop-scroll-rail > .sop-scroll-ticks::after{inset-block-end:2px}

.sop-scroll-area.sop-cable[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
