# Silk Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

絹の折り返し、布見本の重なり、繊細なステッチ。色ではなく、触感を選ぶようなメニュー。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-silk-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* silk-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-silk-select{--sel-bg:linear-gradient(125deg,#c4aea9,#e9d9cb 32%,#b99f9f 75%,#e7cfbb);--sel-panel:linear-gradient(130deg,#ecdfd5,#d7c1bd 65%,#eadbd0);--sel-ink:#51414a;--sel-muted:#7b6870;--sel-accent:#94666d;--sel-line:#a177706e;--sel-dark:#fff7e4;--sel-radius:3px;}
.sop-select.sop-silk-select > .sop-select-trigger{border:1px solid #dac5b5;border-radius:5px 18px 5px 5px;box-shadow:inset 0 2px #ffefde73,0 6px 0 -2px #917677,0 16px 24px #0007;}
.sop-select.sop-silk-select > .sop-select-trigger::before{inset:0;background:repeating-linear-gradient(45deg,#61414b08 0 1px,transparent 1px 3px),linear-gradient(118deg,#fff3d864,transparent 36%,#96738038 70%,#ffdfc559);}
.sop-select.sop-silk-select > .sop-select-trigger::after{inset:6px;border:1px dashed #8e6b665e;border-radius:2px 12px 2px 2px;}
.sop-select.sop-silk-select .sop-select-value .sop-select-option-copy b{font:italic 23px/1.2 Georgia,serif;letter-spacing:-.55px;}
.sop-select.sop-silk-select .sop-select-icon{color:#e6dcd4;border-radius:1px;border:0;transform:rotate(-7deg);background:linear-gradient(130deg,#cdadb5,#664e67 43%,#b48c9f 64%,#785b70);box-shadow:3px 3px #aa8a8e,5px 5px #ede0cd,6px 7px 5px #51344745;font-size:8px;align-items:flex-end;padding-bottom:7px;}
.sop-select.sop-silk-select .sop-select-icon::before{inset:4px;border:1px dashed #ead4da73;background:repeating-linear-gradient(0deg,#efdbd12b 0 1px,transparent 1px 3px),repeating-linear-gradient(90deg,#32244321 0 1px,transparent 1px 4px);}
.sop-select.sop-silk-select .sop-select-icon::after{inset:0;background:linear-gradient(115deg,transparent 28%,#fee8d536 45%,transparent 55%);}
.sop-select.sop-silk-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(68deg)}
.sop-select.sop-silk-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(165deg)}
.sop-select.sop-silk-select [data-glyph="3"] .sop-select-icon{filter:hue-rotate(220deg)}
.sop-select.sop-silk-select .sop-select-popup{border:1px solid #d6c4b3;border-radius:7px 18px 7px 7px;padding:13px;box-shadow:inset 0 1px #fff6dc,3px 5px 0 #927672,0 22px 45px #0009;}
.sop-select.sop-silk-select .sop-select-menu-heading{border:1px dashed #94716b62;font-family:Georgia,serif;font-size:14px;color:#755157;}
.sop-select.sop-silk-select .sop-select-menu-heading small{font-size:7px;letter-spacing:1px;}
.sop-select.sop-silk-select .sop-select-option{border-radius:3px;border-bottom:1px solid #957a6c36;}
.sop-select.sop-silk-select .sop-select-option[aria-selected=true]{background:#fff9e641;border:1px solid #a077797e;box-shadow:2px 3px #bfa4a12b;}
.sop-select.sop-silk-select .sop-select-option[data-active=true] .sop-select-icon{transform:rotate(1deg) translateY(-1px);}
.sop-select.sop-silk-select .sop-select-badge{font-style:italic;color:#71575f;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-silk-select *::before,.sop-select.sop-silk-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-silk-select .sop-select-option{margin-block:8px;padding-block:14px;background:linear-gradient(130deg,#f6e8d959,#e8cfbd21 62%,#e6d6c530);border:1px solid #b0939761;box-shadow:0 2px 0 #c9aeb352;}
.sop-select.sop-silk-select .sop-select-option-copy b{font:italic 17px/1.3 Georgia,serif;}
.sop-select.sop-silk-select [data-glyph="1"] .sop-select-icon{filter:none;background:linear-gradient(135deg,#eee3cf,#c4b095 39%,#e0cdb2 57%,#a28d70);color:#675a4d;}
.sop-select.sop-silk-select [data-glyph="2"] .sop-select-icon{filter:none;background:linear-gradient(135deg,#a2b8a5,#526a65 39%,#8da99a 57%,#3d5f5b);}
.sop-select.sop-silk-select [data-glyph="3"] .sop-select-icon{filter:none;background:linear-gradient(135deg,#c4bdc7,#778491 39%,#a9b1b6 57%,#637582);}
```
