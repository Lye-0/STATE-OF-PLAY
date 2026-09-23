# Fjord Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

氷河の切断面、深い水面、地形の等高線。明るい氷と暗い水で構成した景観のセレクト。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-fjord-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* fjord-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-fjord-select{--sel-bg:linear-gradient(135deg,#55798465,#1c3447 40%,#102331 80%,#52757a57);--sel-panel:linear-gradient(155deg,#557a8161,#183344 40%,#112839);--sel-ink:#ddebee;--sel-muted:#afc8cd;--sel-accent:#bee6e2;--sel-line:#b9d7d75c;--sel-radius:4px;}
.sop-select.sop-fjord-select > .sop-select-trigger{border-radius:4px 18px 4px 18px;box-shadow:inset 0 1px #d0e7e166,0 14px 26px #0008;}
.sop-select.sop-fjord-select > .sop-select-trigger::before{right:-7px;top:-9px;width:175px;height:138px;border-radius:44%;border:1px solid #cbebe637;transform:rotate(-24deg) scaleY(.7);box-shadow:0 0 0 10px #c6e8e405,0 0 0 11px #b2d7d627,0 0 0 22px #bdd7d705,0 0 0 23px #c2e7e322,0 0 0 34px #c2e7e306,0 0 0 35px #c2e7e31a;}
.sop-select.sop-fjord-select > .sop-select-trigger::after{inset:auto 0 4px;height:1px;background:linear-gradient(90deg,transparent,#c9eee280,transparent);}
.sop-select.sop-fjord-select .sop-select-value .sop-select-option-copy b{font:23px/1.2 Georgia,serif;}
.sop-select.sop-fjord-select .sop-select-icon{border-radius:3px;background:linear-gradient(#8aa9b3 0 45%,#2c5a70 45% 63%,#16384b 65%);border:1px solid #bfe4e287;box-shadow:inset 0 0 0 3px #a5ccce2b,0 4px 7px #0008;color:#cce9e5;align-items:flex-end;padding-bottom:5px;font-size:8px;}
.sop-select.sop-fjord-select .sop-select-icon::before{inset:4px 4px 17px;background:linear-gradient(125deg,#e3ebe8 0 48%,#7aafbe 49% 68%,#c5dedb 69%);clip-path:polygon(0 87%,23% 40%,40% 58%,63% 3%,100% 80%,100% 100%,0 100%);}
.sop-select.sop-fjord-select .sop-select-icon::after{left:4px;right:4px;bottom:10px;height:12px;opacity:.3;background:linear-gradient(120deg,#a6d5df,#e1e9d7);clip-path:polygon(0 0,100% 0,65% 100%,36% 30%,22% 80%);}
.sop-select.sop-fjord-select [data-glyph="1"] .sop-select-icon::before{transform:scaleX(-1);}
.sop-select.sop-fjord-select [data-glyph="2"] .sop-select-icon::before{clip-path:polygon(0 95%,39% 5%,60% 41%,77% 17%,100% 83%,100% 100%,0 100%);}
.sop-select.sop-fjord-select .sop-select-popup{border-radius:5px 19px 5px 19px;}
.sop-select.sop-fjord-select .sop-select-menu-heading{border:1px solid #b6d1d53a;border-radius:3px 12px 3px 3px;background:linear-gradient(140deg,#93c5c334,transparent 65%);}
.sop-select.sop-fjord-select .sop-select-menu-heading::after{z-index:-1;inset:auto 0 6px;height:6px;border-block:1px solid #b7d6d63a;}
.sop-select.sop-fjord-select .sop-select-option{border-radius:3px 10px 3px 10px;border-bottom:1px solid #9fbcc229;}
.sop-select.sop-fjord-select .sop-select-option[aria-selected=true]{background:linear-gradient(110deg,#91d9d629,#a5bce019);border-color:#c1e5e178;box-shadow:inset 3px 0 #badbd4;}
.sop-select.sop-fjord-select .sop-select-option[data-active=true] .sop-select-icon{transform:translateY(-2px);}

@media(prefers-reduced-motion:reduce){.sop-select.sop-fjord-select *::before,.sop-select.sop-fjord-select *::after{transition:none!important;animation:none!important;}}
```
