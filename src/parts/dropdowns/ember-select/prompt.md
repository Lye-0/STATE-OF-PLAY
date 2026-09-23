# Ember Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

耐熱素材のハウジング、熱を通す格子、琥珀色の六角レンズ。選択に応じて炉の表情が変わる。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-ember-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* ember-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-ember-select{--sel-bg:linear-gradient(120deg,#414440,#142126 52%,#2e3638);--sel-panel:linear-gradient(125deg,#42443a5e,#111f25 55%),#172126;--sel-accent:#f3b480;--sel-muted:#b4bab1;--sel-line:#a7a28a59;--sel-radius:7px;}
.sop-select.sop-ember-select > .sop-select-trigger{border:1px solid #727e7d;box-shadow:inset 0 1px #c9c4a469,inset 0 -3px #051019,0 13px 20px #000a;}
.sop-select.sop-ember-select > .sop-select-trigger::before{inset:6px;border:1px solid #050d14;background:repeating-linear-gradient(90deg,transparent 0 4px,#bbc0a408 4px 5px);border-radius:3px;box-shadow:inset 0 0 6px #0008;}
.sop-select.sop-ember-select > .sop-select-trigger::after{left:15px;right:15px;bottom:9px;height:3px;background:repeating-linear-gradient(90deg,#eea26681 0 3px,#151b1e 3px 7px);opacity:.55;}
.sop-select.sop-ember-select .sop-select-icon{border:0;clip-path:polygon(22% 0,78% 0,100% 22%,100% 78%,78% 100%,22% 100%,0 78%,0 22%);background:conic-gradient(#afb2a2,#324449,#a5a897,#273c43,#aead9e,#57686a,#afb2a2);color:#fada9c;text-shadow:0 0 5px #fd964c;font-weight:bold;}
.sop-select.sop-ember-select .sop-select-icon::before{inset:4px;clip-path:inherit;background:radial-gradient(circle at 34% 23%,#eda978,#a4673e 25%,#4c3e34 52%,#1f3237 75%);box-shadow:inset 0 0 8px #000a;}
.sop-select.sop-ember-select .sop-select-icon::after{inset:8px;border:1px solid #e1ad7473;background:repeating-linear-gradient(0deg,#ffca8919 0 1px,transparent 1px 3px);}
.sop-select.sop-ember-select [data-glyph="1"] .sop-select-icon::before{filter:saturate(1.6);}
.sop-select.sop-ember-select [data-glyph="2"] .sop-select-icon::before{filter:hue-rotate(-15deg) saturate(2);}
.sop-select.sop-ember-select .sop-select-popup{border:1px solid #7d8982;border-radius:5px;box-shadow:inset 0 0 0 3px #17292c,0 25px 50px #000a;}
.sop-select.sop-ember-select .sop-select-menu-heading{background:#0c1a206e;border:1px solid #42575382;border-radius:3px;}
.sop-select.sop-ember-select .sop-select-menu-heading::after{inset:auto 12px 8px;height:3px;background:linear-gradient(90deg,#ecd4a991,#f28e49a3 25%,#e3613038 65%,transparent);}
.sop-select.sop-ember-select .sop-select-option{border-radius:3px;background:#101b214a;border:1px solid #3f565847;box-shadow:inset 0 1px #a8ad8d13;}
.sop-select.sop-ember-select .sop-select-option[aria-selected=true]{background:linear-gradient(100deg,#aa602d36,#b6742912 50%,#19323821);border-color:#d6a1637b;box-shadow:inset 3px 0 #f1b071;}
.sop-select.sop-ember-select .sop-select-check{background:#f1b071;border-radius:3px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-ember-select *::before,.sop-select.sop-ember-select *::after{transition:none!important;animation:none!important;}}
```
