# Optic Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

レンズ鏡筒、細密なフォーカス環、刻み目。光学機器の選択機構として作り直したセレクト。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-optic-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* optic-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-optic-select{--sel-radius:9px;--sel-bg:linear-gradient(125deg,#343c3f,#131e25 45%,#1d2930);--sel-panel:#172027;--sel-accent:#cddccd;--sel-muted:#a5b5b9;--sel-line:#78888869;}
.sop-select.sop-optic-select > .sop-select-trigger{min-height:108px;border:1px solid #929b9482;box-shadow:inset 0 0 0 3px #111b208f,inset 0 1px #eeeec96e,0 14px 22px #0009;}
.sop-select.sop-optic-select > .sop-select-trigger::before{inset:4px;border:1px solid #8697965a;border-radius:4px;background:repeating-linear-gradient(0deg,transparent 0 2px,#cfe3d205 2px 3px);}
.sop-select.sop-optic-select > .sop-select-trigger::after{inset:7px 5px;background:radial-gradient(circle,#718280 0 1px,#152427 1.6px 2.4px,transparent 2.8px) 0 0/100% 100%;border-inline:2px dotted #1c2428}
.sop-select.sop-optic-select .sop-select-icon{width:57px;height:57px;border-radius:50%;background:repeating-conic-gradient(#c2cbc3 0 3deg,#263840 3deg 7deg,#748384 7deg 10deg);border:1px solid #8a9b9b;box-shadow:0 0 0 2px #090f15,inset 0 0 0 3px #4b595c,0 4px 7px #000b;color:#cce5e5;font-size:10px;text-shadow:0 0 5px #b9d9b88a;}
.sop-select.sop-optic-select .sop-select-icon::before{inset:5px;border:2px solid #101a20;border-radius:50%;background:radial-gradient(circle at 32% 25%,#b6e1d781,#223b4a 30%,#142128 62%,#656a8c 87%,#c5f3eb5e);box-shadow:0 0 0 1px #bac1b761,inset 0 0 0 3px #233442,inset 1px 2px 3px #000;}
.sop-select.sop-optic-select .sop-select-icon::after{inset:12px;border:1px solid #9ebed364;border-radius:50%;background:conic-gradient(from 40deg,transparent,#769b6c2b,transparent 23%,#6787ac38,transparent 74%);}
.sop-select.sop-optic-select .sop-select-value .sop-select-option-copy b{font-size:18px;letter-spacing:-.5px;}
.sop-select.sop-optic-select .sop-select-chevron{border:1px solid #788c8a;background:repeating-conic-gradient(#728782 0 10deg,#1c2c34 10deg 20deg);box-shadow:inset 0 0 0 5px #202c32;}
.sop-select.sop-optic-select .sop-select-popup{border-radius:8px;background:linear-gradient(135deg,#34404760,transparent 55%),#172027;border:1px solid #75858b;box-shadow:inset 0 0 0 3px #0f1920,0 26px 50px #000b;}
.sop-select.sop-optic-select .sop-select-menu-heading{padding-bottom:21px;border-bottom:1px solid #65727561;}
.sop-select.sop-optic-select .sop-select-menu-heading::after{inset:auto 12px 2px;height:8px;background:repeating-linear-gradient(90deg,#b2c4bc8c 0 1px,transparent 1px 8px);mask-image:linear-gradient(90deg,#000,transparent 86%);}
.sop-select.sop-optic-select .sop-select-option{border-radius:5px;border-bottom:1px solid #7887892a;}
.sop-select.sop-optic-select .sop-select-option[aria-selected=true]{background:linear-gradient(100deg,#b6cbbb1a,#59737614);border-color:#9aad9e71;box-shadow:inset 3px 0 #cee3c6;}
.sop-select.sop-optic-select .sop-select-option[data-active=true] .sop-select-icon::after{transform:rotate(55deg);transition:transform .7s;}
.sop-select.sop-optic-select .sop-select-badge{border:1px solid #506260;background:#0e181b;padding:4px 5px;border-radius:2px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-optic-select *::before,.sop-select.sop-optic-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-optic-select .sop-select-chevron::before{content:'';position:absolute;inset:4px;border-radius:50%;background:#15252e;border:1px solid #a0b8a25e;}
.sop-select.sop-optic-select .sop-select-chevron::after{z-index:1;color:#d9edce;}
.sop-select.sop-optic-select [data-glyph="1"] .sop-select-icon::before{background:radial-gradient(circle at 32% 25%,#aadecb80,#243946 30%,#131928 55%,#7d8895 87%,#c5f3eb5e);}
.sop-select.sop-optic-select [data-glyph="2"] .sop-select-icon::before{background:radial-gradient(circle at 32% 25%,#d3b4d09e,#39324c 30%,#151f2c 55%,#8c839b 87%,#cad7d05e);}
.sop-select.sop-optic-select [data-glyph="3"] .sop-select-icon::before{background:radial-gradient(circle at 32% 25%,#c3d5b973,#36433a 30%,#13242b 55%,#537b87 87%,#c5f3eb5e);}
```
