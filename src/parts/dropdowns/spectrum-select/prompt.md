# Spectrum Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

オシロスコープの方眼と発光波形。候補それぞれが、小さな信号カートリッジになる。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-spectrum-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* spectrum-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-spectrum-select{--sel-bg:#17292b;--sel-panel:#142528;--sel-accent:#b0e1b1;--sel-ink:#d9e9cf;--sel-muted:#a0c2b2;--sel-line:#789f8187;--sel-radius:5px;}
.sop-select.sop-spectrum-select > .sop-select-trigger{border:1px solid #799d89;box-shadow:inset 0 0 0 3px #304e43,inset 0 0 0 4px #070f13,0 13px 20px #0009;padding-block:20px;}
.sop-select.sop-spectrum-select > .sop-select-trigger::before{inset:8px;background:linear-gradient(#5899781a 1px,transparent 1px),linear-gradient(90deg,#5899781a 1px,transparent 1px);background-size:10px 10px;box-shadow:inset 0 0 12px #02080cb3;}
.sop-select.sop-spectrum-select > .sop-select-trigger::after{inset:0;background:linear-gradient(133deg,#e4f8b310,transparent 36%);}
.sop-select.sop-spectrum-select .sop-select-value .sop-select-option-copy b{font:17px/1.2 Consolas,monospace;text-shadow:0 0 8px #a1ec9a38;}
.sop-select.sop-spectrum-select .sop-select-icon{border:1px solid #759d7c75;background:radial-gradient(ellipse,#385942,#071715);box-shadow:inset 0 1px 4px #0009,0 1px #8aab6b7a;border-radius:4px;color:#bfec99;align-items:flex-end;padding-bottom:6px;font-size:8px;}
.sop-select.sop-spectrum-select .sop-select-icon::before{inset:0;background:linear-gradient(#90b8631e 1px,transparent 1px),linear-gradient(90deg,#90b8631e 1px,transparent 1px);background-size:8px 8px;}
.sop-select.sop-spectrum-select .sop-select-icon::after{inset:9px 5px 18px;background:#c3ed9a;clip-path:polygon(0 45%,15% 45%,26% 0,39% 89%,50% 45%,64% 45%,74% 8%,85% 84%,93% 45%,100% 45%,100% 52%,90% 52%,84% 98%,74% 27%,66% 52%,52% 52%,39% 100%,26% 19%,17% 52%,0 52%);filter:drop-shadow(0 0 2px #c2f694);}
.sop-select.sop-spectrum-select [data-glyph="1"] .sop-select-icon::after{clip-path:polygon(0 67%,22% 67%,22% 16%,51% 16%,51% 67%,75% 67%,75% 16%,100% 16%,100% 23%,81% 23%,81% 74%,45% 74%,45% 23%,28% 23%,28% 74%,0 74%);}
.sop-select.sop-spectrum-select [data-glyph="2"] .sop-select-icon::after{clip-path:polygon(0 65%,25% 14%,50% 66%,75% 14%,100% 65%,100% 75%,75% 24%,50% 76%,25% 24%,0 75%);}
.sop-select.sop-spectrum-select .sop-select-chevron{border-radius:3px;background:linear-gradient(#acb799,#4c6a5e);border-color:#b1c7a074;box-shadow:inset 0 0 0 4px #b6c49a47;}
.sop-select.sop-spectrum-select .sop-select-chevron::after{color:#193327;}
.sop-select.sop-spectrum-select .sop-select-popup{border:1px solid #7f9f83;box-shadow:inset 0 0 0 3px #355042,0 25px 45px #000a;}
.sop-select.sop-spectrum-select .sop-select-menu-heading{border:1px solid #6b8b586d;border-radius:3px;background:#0b1a1a;box-shadow:inset 0 0 10px #0008;color:#c8d7a3;}
.sop-select.sop-spectrum-select .sop-select-menu-heading::after{bottom:7px;left:12px;right:12px;height:4px;background:repeating-linear-gradient(90deg,#b2db7273 0 2px,transparent 2px 5px);mask-image:linear-gradient(90deg,#000,transparent 80%);}
.sop-select.sop-spectrum-select .sop-select-option{border:1px solid #63887742;background:#6383680c;border-radius:4px;}
.sop-select.sop-spectrum-select .sop-select-option[aria-selected=true]{background:linear-gradient(90deg,#83ac6e23,#1c423625);border-color:#a5bf7880;box-shadow:inset 0 0 0 2px #081b1752;}
.sop-select.sop-spectrum-select .sop-select-check{border-radius:2px;box-shadow:0 0 9px #b9f79552;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-spectrum-select *::before,.sop-select.sop-spectrum-select *::after{transition:none!important;animation:none!important;}}
```
