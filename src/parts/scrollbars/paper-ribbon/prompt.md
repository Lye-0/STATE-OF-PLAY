# Paper Ribbon — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

折り返された紙のしおり。山折りと谷折りの陰影、織り目と切り欠きのリボン。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-paper-ribbon`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* paper-ribbon — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-paper-ribbon{--sop-scroll-width:27px;--sop-scroll-radius:0;--sop-scroll-accent:#edb58b}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(var(--sc-along),#d59b7250 0 1px,#7d553da1 1px 3px);border-inline:1px solid #cb9d727e;box-shadow:3px 1px 7px #0008}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-track::before{inset:0;background:linear-gradient(var(--sc-cross),#f6c4905e,#8d573662 42%,#efb58b63 50%,#6745315e);border-inline:3px double #e5b08062}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:#ffc899;opacity:.22}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:44px;border-radius:0;border:0;clip-path:polygon(0 0,83% 0,100% 12%,100% 100%,50% 87%,0 100%);background:linear-gradient(114deg,#eadbc1,#f8e7cb 42%,#c7a88a 43%,#f6dec0 46%,#edd4b2 84%,#a98163 85%);box-shadow:none;filter:drop-shadow(2px 4px 3px #0008)}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:6px 6px 12px;border:1px solid #936d4542;}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:0 auto;inset-inline:auto 0;inline-size:11px;block-size:15px;clip-path:polygon(0 0,100% 100%,0 100%);background:#ba9473;box-shadow:0 3px 3px #0006}
.sop-scroll-area.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{background:repeating-linear-gradient(0deg,transparent 0 4px,#9b6a4b70 4px 5px);width:18px;height:15px;margin:-9px;transform:rotate(-8deg)}

.sop-scroll-area.sop-paper-ribbon[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
