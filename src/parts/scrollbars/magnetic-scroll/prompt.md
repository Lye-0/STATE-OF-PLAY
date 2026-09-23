# Magnetic — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

精密な二本のレールと浮遊するベアリング。青い磁場を、金属のカフが包む。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 形と動きの設計
装飾レール、比例するつまみ、その内側のハンドル、グリップ、端の口金を分離する。レール・つまみの素材を一組として再現し、色だけの細い丸棒へ置き換えない。光沢と影は静止時にも形が分かる強さに保つ。見た目のハンドルとドラッグ領域を分離し、装飾にはpointer-events:noneを適用する。

レールの占有幅は最低56px。つまみの占有長は表示領域と内容全体の比率から求める。小さなグリップや結晶の寸法と、スクロール位置を示す比例つまみの長さを混同しない。縦・横では光の向きと装飾の軸をCSS変数で切り替える。

## 操作と構造
ネイティブoverflowとscrollTop/scrollLeftを正本とし、ホイールやタッチのスクロールを横取りしない。ドラッグ、レールのページ移動、矢印、PageUp/PageDown、Space/Shift+Space、Home/Endを維持する。方向はvertical/horizontal、RTLも扱う。スクロール位置を--sop-scroll-progressへ同期するが、装飾用に偽の位置を作らない。

## 導入と後片付け
ページ全体のバーを変更せず、内容領域をラッパーで包む。children/スロットには利用先の内容を入れ、サンプル文章を固定しない。領域の高さと長い内容を用意し、短い内容ではレールを隠す。サイズと内容の変化へ追従し、aria-controls・aria-valuenowと識別子を個体ごとに維持する。destroy時にイベント、Observer、予約済みRAFを解除する。毎フレームの常時描画処理を追加しない。強制カラー時は標準スクロールバーへ戻す。

## 必要なソースと配置
`styles.css`、`scrollbar-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-scroll-sculpted`と`.sop-magnetic-scroll`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`scrollbar-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* magnetic-scroll — sculpted, component-local rail. v4.2.0 */

.sop-scroll-area.sop-magnetic-scroll{--sop-scroll-width:32px;--sop-scroll-radius:13px;--sop-scroll-accent:#9acddf}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--sc-cross),#d0e5e866,#293d469e 9%,#07151d 16% 38%,#35536480 45% 55%,#07151d 62% 84%,#81aabf95 91%,#ccdde273);border:1px solid #687f8872;box-shadow:inset 0 0 8px #0009,0 4px 10px #0009}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track::after{inset:4px 14px;background:repeating-linear-gradient(var(--sc-along),#b4d3da72 0 1px,transparent 1px 14px)}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{opacity:.65;background:linear-gradient(var(--sc-along),#1e485733,#99ebed7d);}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{--sop-handle-width:40px;border-radius:20px;background:linear-gradient(var(--sc-cross),#bcdce959,#1a334354 30% 70%,#c4dfeb6e);border:1px solid #acd4d19c;box-shadow:inset 1px 1px 2px #daedee7d,inset -2px -1px 3px #496b7b96,0 3px 10px #0009}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:5px;border-inline:2px solid #b5dde573;border-radius:15px;}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:50% auto;inset-inline:2px;height:26px;margin-top:-13px;border-block:1px solid #abdbee77;border-radius:50%;transform:rotate(-19deg)}
.sop-scroll-area.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle > .sop-scroll-grip{border-radius:50%;background:radial-gradient(circle at 30% 20%,#e6f6f4,#819fa6 15%,#213d4c 36%,#081c29 68%,#8abed24f 82%);box-shadow:inset -2px -2px 2px #b5efec97,0 4px 5px #000b,0 0 8px #52daed4d;transform:scale(1.14)}

.sop-scroll-area.sop-magnetic-scroll[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-ticks{display:none}
```
