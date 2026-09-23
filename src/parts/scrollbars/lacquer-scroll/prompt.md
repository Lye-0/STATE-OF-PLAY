# Lacquer — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

朱漆の深い艶と、黒い溝に走る金の象嵌。触れる面に、小さな金環を埋め込む。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-lacquer-scroll`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* lacquer-scroll — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-lacquer-scroll{--sop-scroll-width:26px;--sop-scroll-radius:15px;--sop-scroll-accent:#e6bb76}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#555147,#121b1a 16%,#070b0e 50%,#1d2924 80%,#555147);border:1px solid #a48b5452;box-shadow:inset 0 2px 10px #000,0 4px 10px #0009}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track::before{inset:6px 11px;border-inline-start:1px solid #c5a3648f}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track::after{inset:5px;border-inline:1px solid #c4a66f34;border-radius:12px}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#e1a04d;opacity:.19}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:35px;border-radius:15px;background:radial-gradient(ellipse at 24% 12%,#ffcf9696,transparent 34%),linear-gradient(var(--sc-cross),#4b1d1d,#c73e24 15%,#b23d2b 43%,#581e27 75%,#e4846157);border:1px solid #d18b625b;box-shadow:inset 1px 0 2px #e4b08391,inset -2px -1px 4px #300c178c,0 5px 9px #000c}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border:1px solid #e6c9879c;border-radius:11px}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:7%;inset-inline:4px auto;inline-size:4px;block-size:43%;border-radius:50%;background:linear-gradient(#fbcf8b77,transparent)}
.sop-scroll-area.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border:2px solid #e4c588;border-radius:50%;background:#7f2e2926;box-shadow:0 1px 2px #241113,inset 1px 1px 2px #e9c89145;transform:scale(.68)}

.sop-scroll-area.sop-lacquer-scroll[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
