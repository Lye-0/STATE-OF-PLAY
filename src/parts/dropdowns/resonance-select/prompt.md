# Resonance Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

ウォルナットの筐体、レコード盤の溝、押し込まれる選曲キー。開いた先まで音響機器の造形。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-resonance-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* resonance-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-resonance-select{--sel-bg:linear-gradient(90deg,#403023,#735537 4%,#392b23 12%,#463326 88%,#816244 96%,#473126);--sel-panel:linear-gradient(90deg,#392e22,#57422c 3%,#2a2b25 6% 94%,#5b472f 97%,#372c22);--sel-accent:#edd3a1;--sel-muted:#bdb29a;--sel-line:#c3a67367;--sel-radius:8px;}
.sop-select.sop-resonance-select > .sop-select-trigger{padding-inline:19px;border:1px solid #866f4f;box-shadow:inset 0 1px #e2c0887d,inset 0 -3px #211b18,0 16px 28px #0009;}
.sop-select.sop-resonance-select > .sop-select-trigger::before{inset:7px 12px;border:1px solid #0c1717;border-radius:4px;background:linear-gradient(125deg,#5053464d,#172321 45%,#0e191b);box-shadow:inset 0 2px 5px #0008,0 1px #c9af7d54;}
.sop-select.sop-resonance-select > .sop-select-trigger::after{inset:0;background:repeating-linear-gradient(0deg,transparent 0 3px,#110f0b13 3px 4px);}
.sop-select.sop-resonance-select .sop-select-icon{border-radius:50%;border:1px solid #8379639b;background:repeating-radial-gradient(circle,#102124 0 2px,#525950 2px 2.6px,#1c2b2c 3px 4px);box-shadow:0 3px 7px #0009,inset 0 0 0 2px #364345;}
.sop-select.sop-resonance-select .sop-select-icon::before{inset:12px;border:1px solid #ddc6947d;border-radius:50%;background:conic-gradient(#ae946b,#e3c797,#baac7d,#ddbd83,#ae946b);}
.sop-select.sop-resonance-select .sop-select-icon::after{inset:0;border-radius:50%;background:conic-gradient(from -30deg,transparent,#d2c6b627,transparent 27% 65%,#c2c6b31f,transparent);}
.sop-select.sop-resonance-select .sop-select-icon{color:#283533;text-shadow:0 1px #f4dfb566;}
.sop-select.sop-resonance-select [data-glyph="1"] .sop-select-icon::before{background:#bf8b7c;}
.sop-select.sop-resonance-select [data-glyph="2"] .sop-select-icon::before{background:#91b9b1;}
.sop-select.sop-resonance-select [data-glyph="3"] .sop-select-icon::before{background:#adb68b;}
.sop-select.sop-resonance-select .sop-select-chevron{border-radius:4px;background:linear-gradient(#cdbd97,#91744e);border:1px solid #ebd7ae;box-shadow:0 3px #433827;}
.sop-select.sop-resonance-select .sop-select-chevron::after{color:#29302a;}
.sop-select.sop-resonance-select .sop-select-popup{border:1px solid #a38a5f;border-radius:8px;padding:13px;}
.sop-select.sop-resonance-select .sop-select-menu-heading{border:1px solid #0e1719;border-radius:3px;background:linear-gradient(#131d1c,#202b27);box-shadow:inset 0 2px 4px #000a,0 1px #c2ae732e;color:#d6c495;}
.sop-select.sop-resonance-select .sop-select-menu-heading::after{inset:auto 11px 8px;height:4px;background:repeating-linear-gradient(90deg,#eed498 0 2px,transparent 2px 5px);opacity:.55;mask-image:linear-gradient(90deg,#000,transparent 85%);}
.sop-select.sop-resonance-select .sop-select-option{background:linear-gradient(#484b392b,#121f1c38);border-radius:5px;border-bottom:1px solid #69695267;}
.sop-select.sop-resonance-select .sop-select-option[aria-selected=true]{background:linear-gradient(140deg,#77705046,#304038);box-shadow:inset 0 1px #d0cf952e,0 2px 2px #0006;border-color:#b3aa7464;}
.sop-select.sop-resonance-select .sop-select-option[data-active=true] .sop-select-icon{transform:rotate(25deg);}
.sop-select.sop-resonance-select .sop-select-check{background:#b8d495;box-shadow:0 0 7px #b8da6d42;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-resonance-select *::before,.sop-select.sop-resonance-select *::after{transition:none!important;animation:none!important;}}
```
