# LED Rail — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

アルミの縁に収めた琥珀色のライトバンク。スモークガラスの窓で進行位置を読む。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-led-rail`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* led-rail — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-led-rail{--sop-scroll-width:32px;--sop-scroll-radius:5px;--sop-scroll-accent:#ffe0a3}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#717977,#283539 12%,#0c171b 19% 80%,#738177 88%,#adb3a19e);border:1px solid #66756773;box-shadow:inset 0 1px #d0d4b875,0 4px 9px #000c}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track::before{inset:6px 8px;background:repeating-linear-gradient(var(--sc-along),#442f20 0 4px,#090f10 4px 7px);border-inline:1px solid #574d36}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track::after{inset:0;background:linear-gradient(var(--sc-cross),#e0ddb41a,transparent 45% 70%,#cdd7b91e)}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{inset:6px 8px;background:repeating-linear-gradient(var(--sc-along),#ffca77 0 4px,#201e16 4px 7px);opacity:1;box-shadow:0 0 14px #f5b94c28}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:43px;border-radius:6px;border:1px solid #d5d5b379;background:linear-gradient(var(--sc-cross),#a6b5ab88,#1425285e 15% 82%,#d6dcc175);box-shadow:inset 0 1px #ecffe38f,inset 0 -1px #0009,0 4px 9px #000b}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:4px 5px;border:1px solid #eeefd564;border-radius:3px;background:#14262630;backdrop-filter:blur(.3px)}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:3px;inset-inline:3px;border-block:2px solid #677369;box-shadow:0 1px 0 #cbcea457}
.sop-scroll-area.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border:1px solid #dec48b93;width:14px;height:8px;margin:-4px 0 0 -7px;background:#ffcd84;box-shadow:inset 0 0 0 2px #c58b47,0 0 8px #f4c06c91}

.sop-scroll-area.sop-led-rail[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
