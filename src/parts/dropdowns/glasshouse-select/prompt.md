# Glasshouse Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

種子の標本票と温室の窓。葉の葉脈、半透明の緑のガラス、柔らかな植物誌の文字組み。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-glasshouse-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* glasshouse-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-glasshouse-select{--sel-bg:linear-gradient(130deg,#53644a61,#1c342d 45%,#334d3770),#172c29;--sel-panel:linear-gradient(120deg,#253e32,#172e2a 60%,#394837);--sel-accent:#d5e5b3;--sel-muted:#b3c6b0;--sel-line:#bdce9c61;--sel-radius:18px;}
.sop-select.sop-glasshouse-select > .sop-select-trigger{border-radius:40px 10px 40px 10px;padding-left:17px;}
.sop-select.sop-glasshouse-select > .sop-select-trigger::before{inset:5px;border:1px solid #b6d99537;border-radius:34px 6px 34px 6px;background:repeating-linear-gradient(90deg,#c6d9b712 0 1px,transparent 1px 24px);}
.sop-select.sop-glasshouse-select > .sop-select-trigger::after{width:100px;height:145px;right:25px;top:-34px;border:1px solid #d4e6aa2b;border-radius:0 80%;transform:rotate(30deg);box-shadow:0 0 0 14px #a7c98107,0 0 0 15px #a7c98121;}
.sop-select.sop-glasshouse-select .sop-select-value .sop-select-option-copy b{font:italic 23px/1.2 Georgia,serif;}
.sop-select.sop-glasshouse-select .sop-select-icon{border-radius:50% 0 50% 0;background:linear-gradient(140deg,#c3d393,#74986b 45%,#36584b 70%,#a7bb7c);border:1px solid #c8e2ac70;color:#dff2c7;box-shadow:inset 1px 1px 3px #d5edb278,1px 4px 6px #0007;font-size:8px;align-items:flex-end;padding-bottom:7px;transform:rotate(-8deg);}
.sop-select.sop-glasshouse-select .sop-select-icon::before{inset:0;background:linear-gradient(135deg,transparent 49%,#e1f4bd96 49.5% 50.5%,transparent 51%),repeating-linear-gradient(36deg,transparent 0 10px,#d9edab53 10px 11px);}
.sop-select.sop-glasshouse-select .sop-select-icon::after{inset:5px;border:1px solid #e1f4b552;border-radius:50% 0 50% 0;}
.sop-select.sop-glasshouse-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(22deg)}
.sop-select.sop-glasshouse-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(-30deg)}
.sop-select.sop-glasshouse-select .sop-select-popup{border-radius:12px 12px 30px 12px;box-shadow:inset 0 1px #d2e9bc36,0 24px 55px #0008;}
.sop-select.sop-glasshouse-select .sop-select-menu-heading{font-family:Georgia,serif;font-size:14px;border-bottom:1px solid #b9d09a65;}
.sop-select.sop-glasshouse-select .sop-select-menu-heading::after{right:12px;top:3px;width:64px;height:53px;border:1px solid #bed69d37;border-radius:80% 0 80% 0;rotate:-22deg;z-index:-1;}
.sop-select.sop-glasshouse-select .sop-select-option{border-radius:24px 6px 24px 6px;}
.sop-select.sop-glasshouse-select .sop-select-option[aria-selected=true]{background:linear-gradient(100deg,#cedfa228,#89b68620);border-color:#bfd4a267;}
.sop-select.sop-glasshouse-select .sop-select-option[data-active=true] .sop-select-icon{transform:rotate(4deg);}
.sop-select.sop-glasshouse-select .sop-select-check{background:#c6d99c;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-glasshouse-select *::before,.sop-select.sop-glasshouse-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-glasshouse-select .sop-select-option-copy b{font:italic 17px/1.3 Georgia,serif;}
.sop-select.sop-glasshouse-select .sop-select-option{min-height:81px;}
```
