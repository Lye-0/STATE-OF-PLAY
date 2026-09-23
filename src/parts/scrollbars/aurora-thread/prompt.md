# Aurora Thread — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

二本の光ファイバーが重なる偏光レール。乳白色のオパールを包むフロストのカフ。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-aurora-thread`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* aurora-thread — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-aurora-thread{--sop-scroll-width:29px;--sop-scroll-radius:20px;--sop-scroll-accent:#d6c1f5}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#889fea47,#a9f4e762 13%,#123d5157 25%,#091624 45%,#d8b5f373 78%,#b3e5dc50);border:1px solid #cbd8ea48;box-shadow:inset 0 0 0 3px #bccdd726,0 0 18px #9274da29,0 4px 10px #0008}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track::before{inset:4px 5px;border-inline:2px solid #c7f1ee5e;border-radius:20px;transform:skewY(15deg)}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track::after{inset:8px 8px;border-inline:1px solid #dac8f57a;border-radius:20px;transform:skewY(-16deg)}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(var(--sc-along),#bda3e066,#8ce3d29e,#f5e8c7);opacity:.65;filter:blur(3px)}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:41px;border-radius:22px;background:linear-gradient(126deg,#e1e9e79c,#ace4d33b 25%,#676ba452 49%,#e9bfdb8f 70%,#d5eac2b6);border:1px solid #f1e4f199;backdrop-filter:blur(2px);box-shadow:inset 2px 1px 3px #eaf7f599,inset -1px -1px 3px #d9c8f282,0 3px 9px #000a}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border:1px solid #fff8;border-radius:inherit;box-shadow:inset 0 2px 11px #e6bcf729}
.sop-scroll-area.sop-aurora-thread > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border-radius:50%;background:conic-gradient(from 60deg,#dbebf2,#afd7c8,#e9d5bf,#b8b2e1,#96cbd8,#dbe6f3);border:1px solid #e2fff287;box-shadow:inset 1px 1px 4px #fff9,inset -2px -2px 5px #49767b47,0 3px 4px #0008}

.sop-scroll-area.sop-aurora-thread[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
