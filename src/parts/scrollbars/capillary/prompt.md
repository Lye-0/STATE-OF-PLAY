# Capillary — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

二重のガラス管、液柱、銀の口金。透明なレンズの中を光が泳ぐ。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-capillary`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* capillary — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-capillary{--sop-scroll-accent:#9ff5e2;--sop-scroll-width:28px;--sop-scroll-radius:22px}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#dcfff75c,#122733 18%,#173f4e 45%,#0b1319 67%,#8de2ed62);border:1px solid #a0dfe778}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track::before{inset:3px;border:1px solid #ceffff30;border-radius:20px;background:linear-gradient(var(--sc-cross),#adfff54d,transparent 25% 75%,#bef6ff45)}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track::after{inset-block:12px;inset-inline:5px;border-inline-start:1px solid #ecfffa75;border-inline-end:1px solid #ebfff220;border-radius:20px}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.92;inset:4px;background:linear-gradient(var(--sc-along),#e1fff7,#38b9c8 60%,#084b7080);border-radius:20px;box-shadow:0 0 13px #83efe295}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:35px;border-radius:25px;border:1px solid #dafffecd;background:radial-gradient(ellipse at 20% 12%,#f3ffffdf,transparent 30%),linear-gradient(var(--sc-cross),#c5f9fc99,#0e8ca785 38%,#21647e99 61%,#d2fffce8);box-shadow:inset 2px 0 3px #f0ffff,inset -3px -2px 6px #79dbeacc,0 4px 8px #0009,0 0 18px #4de8f737}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border:1px solid #d4fffca0;border-radius:inherit;box-shadow:inset 0 2px 8px #e3fff779}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:12%;inset-inline:4px auto;inline-size:5px;border-radius:50%;background:linear-gradient(transparent,#effffa9e,transparent)}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border-radius:50%;background:radial-gradient(circle at 30% 22%,#e9ffff90,#7dcdcf12 35%,#144e6960 60%,#9aecff91);border:1px solid #d0fcff61;box-shadow:inset 0 1px 3px #eefff59c}
.sop-scroll-area.sop-capillary > .sop-scroll-rail > .sop-scroll-ticks{background:radial-gradient(circle at 15% 23%,#c3fbed8a 0 1px,transparent 2px),radial-gradient(circle at 83% 75%,#c3fbed73 0 1px,transparent 2px)}

.sop-scroll-area.sop-capillary[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
