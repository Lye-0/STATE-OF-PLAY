# Perforation — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

35mmフィルムのパーフォレーション。露光した一コマを、精密なゲートで捉える。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-perforation`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* perforation — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-perforation{--sop-scroll-width:36px;--sop-scroll-radius:2px;--sop-scroll-accent:#edc581}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(var(--sc-along),#201e19 0 39px,#a189584a 39px 40px,#1a211d 40px 79px,#c6a47655 79px 80px);border-inline:1px solid #8076616b;box-shadow:0 3px 7px #000b}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-track::before{inset:3px;background:repeating-linear-gradient(var(--sc-along),#090d106e 0 3px,#bdaa8163 3px 8px,transparent 8px 13px);mask-image:linear-gradient(var(--sc-cross),#000 0 15%,transparent 15% 85%,#000 85%)}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-track::after{inset:10px 10px;border-inline:1px solid #b2a18542;background:repeating-linear-gradient(var(--sc-along),#b7975154 0 37px,#070e11a3 37px 40px)}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.4;background:linear-gradient(var(--sc-along),#f4bd80b0,#e5764199,#829a9f80)}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:48px;border-radius:3px;border:1px solid #9fa49273;background:linear-gradient(var(--sc-cross),#62685d,#313e3e 17%,#1725266b 30% 70%,#697067 88%,#98a189);box-shadow:inset 0 1px #e7ebcb71,0 3px 8px #000b}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:4px 9px;border:2px solid #111c1c;border-radius:1px;box-shadow:inset 0 0 0 1px #ece4bb62;background:#e6c77a20}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:5px 3px;border-block:2px solid #c7c7a477}
.sop-scroll-area.sop-perforation > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{width:12px;height:12px;margin:-6px; border:1px solid #f4e9bf8c;background:#d8a65219;transform:rotate(45deg);}

.sop-scroll-area.sop-perforation[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
