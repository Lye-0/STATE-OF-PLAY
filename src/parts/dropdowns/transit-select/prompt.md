# Transit Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

切符の切り欠き、ミシン目、運賃スタブ。候補一覧も一枚ずつのチケットとして設計。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-transit-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* transit-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-transit-select{--sel-bg:#dfc884;--sel-panel:#e7d9b1;--sel-ink:#313b37;--sel-muted:#707465;--sel-accent:#465e55;--sel-dark:#f9efcb;--sel-line:#786f506a;--sel-radius:5px;}
.sop-select.sop-transit-select > .sop-select-trigger{border:1px solid #dfd4a0;border-radius:3px;box-shadow:inset 0 1px #fff7cc,0 6px 0 -2px #927a51,0 16px 22px #0007;padding-right:20px;}
.sop-select.sop-transit-select > .sop-select-trigger::before{inset:5px;border:1px solid #766b4852;background:repeating-linear-gradient(0deg,transparent 0 2px,#5f67480a 2px 3px);}
.sop-select.sop-transit-select > .sop-select-trigger::after{right:57px;top:0;bottom:0;width:1px;border-right:1px dashed #8f79579e;}
.sop-select.sop-transit-select .sop-select-value .sop-select-option-copy b{font:600 20px/1.2 Consolas,monospace;letter-spacing:-1px;text-transform:uppercase;}
.sop-select.sop-transit-select .sop-select-icon{border:1px solid #5367569e;border-radius:1px;background:#c9b775;box-shadow:inset 0 0 0 3px #e4d291,inset 0 0 0 4px #68765a75;letter-spacing:1px;color:#314b40;font-weight:bold;transform:rotate(-4deg);}
.sop-select.sop-transit-select .sop-select-icon::after{inset:5px;border-top:3px double #526d5182;border-bottom:1px solid #526d5182;}
.sop-select.sop-transit-select .sop-select-chevron{background:#324c43;border-color:#3f5b4b;}
.sop-select.sop-transit-select .sop-select-chevron::after{color:#e7d69a;}
.sop-select.sop-transit-select .sop-select-popup{border-radius:3px;background:linear-gradient(90deg,#e9dfbd 0 78%,#dcd0a6 78%);box-shadow:inset 0 0 0 4px #eddfb8,0 25px 48px #0009;}
.sop-select.sop-transit-select .sop-select-menu-heading{border-bottom:2px dashed #9a8a646e;padding-top:7px;}
.sop-select.sop-transit-select .sop-select-menu-heading>span{font-size:13px;line-height:1.3;letter-spacing:-.2px;color:#3c5348;}
.sop-select.sop-transit-select .sop-select-option{border-radius:2px;border:1px solid #ab9d7247;border-inline:3px solid #bbaa77;background:#f7efcc41;box-shadow:0 2px 0 #a2936c31;margin-block:7px;}
.sop-select.sop-transit-select .sop-select-option::before{content:'';position:absolute;right:71px;top:0;bottom:0;border-right:1px dashed #ab977164;pointer-events:none;}
.sop-select.sop-transit-select .sop-select-option[aria-selected=true]{background:#d2cfa544;border-color:#4e6b4f;box-shadow:inset 0 0 0 2px #fffce34d,0 2px 0 #6b7e4e55;}
.sop-select.sop-transit-select .sop-select-badge{font-weight:bold;color:#4d5c4c;}
.sop-select.sop-transit-select .sop-select-check{border-radius:1px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-transit-select *::before,.sop-select.sop-transit-select *::after{transition:none!important;animation:none!important;}}
```
