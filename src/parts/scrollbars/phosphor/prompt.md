# Phosphor — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

CRTのドットマトリクスとスキャンライン。発光するフレームが現在位置を切り取る。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-phosphor`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* phosphor — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-phosphor{--sop-scroll-accent:#b7f6b3;--sop-scroll-width:30px;--sop-scroll-radius:6px}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track{background:#09150e;border:1px solid #446f526e;box-shadow:inset 0 0 12px #000,0 0 0 2px #111b15,0 7px 14px #000a}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track::before{inset:5px;background:radial-gradient(circle,#9ecc7140 0 1px,transparent 1.6px);background-size:5px 5px}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track::after{inset:0;border-radius:inherit;background:linear-gradient(var(--sc-cross),#d5fed31a,transparent 45%,#528d7226),repeating-linear-gradient(var(--sc-along),transparent 0 3px,#040b076e 3px 4px)}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{inset:5px;opacity:1;background:radial-gradient(circle,#c6ff92 0 1px,transparent 1.8px);background-size:5px 5px;box-shadow:0 0 12px #90ee4917}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:37px;border-radius:5px;border:1px solid #adf5ab;background:linear-gradient(var(--sc-cross),#a2fda626,#070f0999 45%,#9dffcd2e);box-shadow:inset 0 0 0 3px #031b09,inset 0 0 17px #98ff714a,0 0 13px #9df39650,0 3px 6px #000}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:3px;border:1px solid #c3fbaa64;border-radius:3px}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:50% auto;inset-inline:3px;block-size:1px;background:#c7ffd2;box-shadow:0 0 10px #bcffaf}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border:1px solid #b4ffc790;border-radius:50%;box-shadow:0 0 8px #c3ffc26b,inset 0 0 6px #83f79750;transform:scale(.7)}
.sop-scroll-area.sop-phosphor > .sop-scroll-rail > .sop-scroll-ticks{background:repeating-linear-gradient(var(--sc-along),#7196754d 0 1px,transparent 1px 16px);mask-image:linear-gradient(90deg,#000 0 7%,transparent 7% 93%,#000 93%)}

.sop-scroll-area.sop-phosphor[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
