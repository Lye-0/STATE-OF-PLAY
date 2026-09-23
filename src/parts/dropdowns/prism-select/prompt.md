# Prism Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

透明な切断面と多面体の色票。結晶の辺と選択した光が連続する、光学標本のメニュー。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-prism-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* prism-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-prism-select{--sel-bg:linear-gradient(118deg,#c3e5e529,#7f789d31 36%,#202631 62%,#c4b5d447);--sel-panel:linear-gradient(140deg,#768aa539,#202632 40%,#735a8752),#1a252d;--sel-accent:#e2d8f4;--sel-muted:#bec6d4;--sel-line:#d6d5ed73;--sel-radius:4px;}
.sop-select.sop-prism-select > .sop-select-trigger{border-radius:4px 19px 4px 19px;box-shadow:inset 1px 1px 0 #e9f8ec91,inset -1px -1px #bab9d147,0 12px 25px #0008;}
.sop-select.sop-prism-select > .sop-select-trigger::before{inset:5px;border:1px solid #dbebed28;border-radius:1px 14px 1px 14px;background:conic-gradient(from 20deg at 8% 60%,transparent 0deg,#ddecaa35 35deg,#8beaca21 69deg,#cea5eb49 103deg,transparent 128deg);}
.sop-select.sop-prism-select > .sop-select-trigger::after{inset:1px;background:linear-gradient(16deg,transparent 38%,#e3eddf47 38.3%,transparent 39%),linear-gradient(-18deg,transparent 67%,#d2c1dc47 67.3%,transparent 68%);}
.sop-select.sop-prism-select .sop-select-icon{border:0;border-radius:0;clip-path:polygon(50% 0,94% 25%,94% 75%,50% 100%,6% 75%,6% 25%);background:conic-gradient(from 30deg,#f7f2e1,#c2e3d7,#7cabc0,#c1b7d8,#d5bfcb,#a2cab7,#f7f2e1);color:#364659;font-size:9px;box-shadow:inset 0 0 8px #fff9;}
.sop-select.sop-prism-select .sop-select-icon::before{inset:3px;clip-path:inherit;background:conic-gradient(from 30deg,#b7cadc 0 60deg,#63979e 60deg 120deg,#d6c4e2 120deg 180deg,#a4bfdc 180deg 240deg,#f2dfe3 240deg 300deg,#90b6b7 300deg);}
.sop-select.sop-prism-select .sop-select-icon::after{inset:13px;clip-path:inherit;background:conic-gradient(#fbf4df,#a5d1d9,#f0e1f5,#b1d5c1,#d9e3ef);}
.sop-select.sop-prism-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(55deg);}
.sop-select.sop-prism-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(110deg);}
.sop-select.sop-prism-select [data-glyph="3"] .sop-select-icon{filter:hue-rotate(235deg);}
.sop-select.sop-prism-select .sop-select-popup{border-radius:4px 18px 4px 18px;backdrop-filter:blur(22px);}
.sop-select.sop-prism-select .sop-select-menu-heading{border-bottom:1px solid #dfd9ef4d;background:conic-gradient(from -80deg at 100% 100%,#d5a4de35,#a2dbd340 70deg,#9fc9e821 110deg,transparent 120deg);}
.sop-select.sop-prism-select .sop-select-option{border-radius:2px 13px 2px 13px;}
.sop-select.sop-prism-select .sop-select-option[aria-selected=true]{background:linear-gradient(110deg,#b3efdd28,#e6cadd1b);border-color:#e1d4e866;box-shadow:inset 1px 1px #ecf9ed45;}
.sop-select.sop-prism-select .sop-select-option[data-active=true] .sop-select-icon{transform:rotate(30deg);}
.sop-select.sop-prism-select .sop-select-check{clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);border-radius:0;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-prism-select *::before,.sop-select.sop-prism-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-prism-select .sop-select-option{padding-block:15px;margin-block:6px;box-shadow:inset 0 -1px #cce2e218;}
.sop-select.sop-prism-select .sop-select-option .sop-select-icon{width:51px;height:55px;}
.sop-select.sop-prism-select .sop-select-option-copy b{font-size:15px;}
.sop-select.sop-prism-select .sop-select-option[aria-selected=true]{box-shadow:inset 1px 1px #eeecf040,inset -1px -1px #addfde3b,0 4px 7px #1019283f;}
```
