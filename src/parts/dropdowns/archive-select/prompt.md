# Archive Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

背表紙、整理番号、余白の多い活版。紙を束ねた索引カードとして、閉じた面も一覧も再構成。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-archive-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* archive-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-archive-select{--sel-bg:#e5dec9;--sel-panel:#f0ead9;--sel-ink:#383d36;--sel-muted:#7d806d;--sel-accent:#6b7658;--sel-dark:#f7efd5;--sel-line:#9ca28473;--sel-radius:3px;}
.sop-select.sop-archive-select > .sop-select-trigger{border-radius:3px;box-shadow:inset 0 1px #fff9e2,0 3px 0 #b9b197,0 6px 0 #797863,0 16px 22px #0007;padding-left:20px;border:1px solid #cdc4a3;}
.sop-select.sop-archive-select > .sop-select-trigger::before{inset:0 auto 0 0;width:7px;background:linear-gradient(90deg,#526b59,#849276 40%,#506557 76%);box-shadow:1px 0 #fff8d780;}
.sop-select.sop-archive-select > .sop-select-trigger::after{inset:7px 8px 7px 14px;border:1px solid #adac8a62;background:repeating-linear-gradient(0deg,transparent 0 21px,#9b9e7a13 21px 22px);}
.sop-select.sop-archive-select .sop-select-value .sop-select-option-copy b{font:23px/1.2 Georgia,serif;letter-spacing:-.8px;}
.sop-select.sop-archive-select .sop-select-icon{border-radius:1px;background:#e1dcc0;border:1px solid #8d947382;box-shadow:inset 0 0 0 3px #f6efd3,0 3px 2px #6a73532e;color:#68704e;font:bold 12px Consolas,monospace;}
.sop-select.sop-archive-select .sop-select-icon::before{inset:5px;border:1px solid #8d946e58;}
.sop-select.sop-archive-select .sop-select-icon::after{inset:8px 7px auto;height:2px;background:repeating-linear-gradient(90deg,#79825e7a 0 1px,transparent 1px 3px);}
.sop-select.sop-archive-select .sop-select-popup{padding:12px;border-radius:3px;box-shadow:3px 4px 0 #c5baa0,5px 6px 0 #9a9b7e,0 25px 45px #0009;}
.sop-select.sop-archive-select .sop-select-menu-heading{font-family:Georgia,serif;font-size:16px;color:#56644b;border-bottom:3px double #a3a7879e;}
.sop-select.sop-archive-select .sop-select-menu-heading small{border:1px solid #93997684;padding:4px;transform:rotate(-3deg);}
.sop-select.sop-archive-select .sop-select-option{border-radius:1px;border-bottom:1px solid #a4ac863b;}
.sop-select.sop-archive-select .sop-select-option[aria-selected=true]{background:#ccdbb35e;border:1px solid #839569;box-shadow:inset 3px 0 #6a8054;}
.sop-select.sop-archive-select .sop-select-check{border-radius:1px;}
.sop-select.sop-archive-select .sop-select-badge{border-bottom:1px solid #929878;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-archive-select *::before,.sop-select.sop-archive-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-archive-select .sop-select-option{padding-block:15px;margin-block:7px;background:linear-gradient(90deg,#d3d9b333,#faf3da5c);box-shadow:0 1px 0 #e6ead97d;}
.sop-select.sop-archive-select .sop-select-option-copy b{font:17px/1.25 Georgia,serif;}
.sop-select.sop-archive-select .sop-select-option .sop-select-icon{height:53px;width:39px;}
.sop-select.sop-archive-select .sop-select-option[aria-selected=true]{box-shadow:inset 4px 0 #667e4b,0 2px 0 #bbc79961;}
```
