# Ceramic Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

白い磁器に焼き込まれた選択欄。釉薬の丸みと、押し込まれた印をもつ色付きの石。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-ceramic-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* ceramic-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-ceramic-select{--sel-bg:linear-gradient(130deg,#f4eee0,#d6dbd2 53%,#e9e9dc);--sel-panel:linear-gradient(140deg,#f4f1e4,#dce1d7 65%,#eeeddf);--sel-ink:#394e4b;--sel-muted:#75847a;--sel-accent:#6c8f86;--sel-line:#9cafa074;--sel-dark:#fff8e7;--sel-radius:23px;}
.sop-select.sop-ceramic-select > .sop-select-trigger{border:1px solid #ebefe1;border-radius:27px;box-shadow:inset 2px 2px 4px #fffdef,inset -2px -3px 5px #788c8267,0 5px 0 -1px #9ea69c,0 14px 25px #0007;}
.sop-select.sop-ceramic-select > .sop-select-trigger::before{inset:8px;border:1px solid #b1bca778;border-radius:20px;box-shadow:inset 1px 1px 4px #607e7142,1px 1px #fffff49c;}
.sop-select.sop-ceramic-select .sop-select-value .sop-select-option-copy b{font:23px/1.15 Georgia,serif;}
.sop-select.sop-ceramic-select .sop-select-icon{background:radial-gradient(circle at 32% 20%,#eff4dd,#afc9ba 26%,#6f978e 64%,#547a7396);border:1px solid #78938957;border-radius:50%;color:#eaf3df;box-shadow:inset 1px 1px 3px #fffce4d6,inset -1px -2px 3px #38685d8c,0 3px 4px #526e6659;}
.sop-select.sop-ceramic-select .sop-select-icon::before{inset:8px;border:1px solid #406a6045;border-radius:50%;box-shadow:inset 1px 2px 3px #325b5052,0 1px 1px #eefad769;}
.sop-select.sop-ceramic-select .sop-select-icon::after{inset:5px 12px 30px 7px;border-top:2px solid #ffffffa8;border-radius:50%;transform:rotate(-22deg);}
.sop-select.sop-ceramic-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(110deg);}
.sop-select.sop-ceramic-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(225deg);}
.sop-select.sop-ceramic-select [data-glyph="3"] .sop-select-icon{filter:hue-rotate(35deg);}
.sop-select.sop-ceramic-select .sop-select-chevron{background:linear-gradient(#dde5d6,#edf0e0);box-shadow:inset 1px 2px 4px #6e8b725c,0 1px #fffcefa6;border-color:#c2cdbd;}
.sop-select.sop-ceramic-select .sop-select-popup{border-radius:24px;border:1px solid #f2f4e3;box-shadow:inset 2px 1px 2px #fffdef,inset -2px -2px 4px #80978a57,0 23px 43px #0007;}
.sop-select.sop-ceramic-select .sop-select-menu-heading>span{font:16px/1.35 Georgia,serif;}
.sop-select.sop-ceramic-select .sop-select-option{border-radius:15px;background:linear-gradient(#f2f3e614,#abbfb129);border:1px solid #a5b8a947;}
.sop-select.sop-ceramic-select .sop-select-option[aria-selected=true]{background:linear-gradient(120deg,#e9efdf,#d5e3d5);box-shadow:inset 0 1px #ffffedb3,0 3px 4px #819a8847;border-color:#719d8f91;}
.sop-select.sop-ceramic-select .sop-select-option[data-active=true] .sop-select-icon{transform:translateY(-2px);}

@media(prefers-reduced-motion:reduce){.sop-select.sop-ceramic-select *::before,.sop-select.sop-ceramic-select *::after{transition:none!important;animation:none!important;}}
```
