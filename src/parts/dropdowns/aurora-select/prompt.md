# Aurora Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

光の層を重ねたカプセルと、偏光するオパールの選択肢。開いた中まで屈折光が続く。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-aurora-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* aurora-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-aurora-select{--sel-bg:linear-gradient(115deg,#243e4659,#15242b 43%,#3d325b78),#152128;--sel-panel:linear-gradient(150deg,#213c409c,#202331 45%,#3f305076),#15212a;--sel-accent:#b7f5de;--sel-line:#b5e0e354;--sel-muted:#abc6cb}
.sop-select.sop-aurora-select > .sop-select-trigger{border-radius:22px 22px 8px 22px;}
.sop-select.sop-aurora-select > .sop-select-trigger::before{inset:-15% -5%;background:conic-gradient(from 75deg at 64% 15%,transparent,#a6f2d92e,transparent 24%,#b6a6f636,transparent 43%,#82dfed3d,transparent 70%);filter:blur(7px);transform:rotate(-10deg);}
.sop-select.sop-aurora-select > .sop-select-trigger::after{inset:5px;border:1px solid #c3f9ed25;border-radius:18px 18px 4px 18px;box-shadow:inset 0 1px 1px #defcf321;}
.sop-select.sop-aurora-select .sop-select-icon{border-radius:50%;color:#18343c;font-size:8px;align-items:flex-end;padding-bottom:8px;background:radial-gradient(circle at 30% 20%,#ecfff8,#83c6c4 22%,#6292ac 38%,#365569 51%,#8baac16e 69%,#efffebbb);border:1px solid #d9fff9b5;box-shadow:inset 2px 2px 5px #f4ffff9e,inset -2px -2px 4px #b2fef98c,0 5px 7px #0007;}
.sop-select.sop-aurora-select .sop-select-icon::before{inset:6px;border:1px solid #d2ffff82;border-radius:50%;background:conic-gradient(from 38deg,#a2d2fd16,#dc9de559,#79bba562,#f3ffc270,#89a4ee2e);}
.sop-select.sop-aurora-select .sop-select-icon::after{inset:6px 12px 27px 7px;border-top:2px solid #f0ffffc4;border-radius:50%;transform:rotate(-24deg);}
.sop-select.sop-aurora-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(30deg)}
.sop-select.sop-aurora-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(220deg)}
.sop-select.sop-aurora-select [data-glyph="3"] .sop-select-icon{filter:hue-rotate(-40deg)}
.sop-select.sop-aurora-select .sop-select-popup{border-radius:10px 22px 22px 22px;backdrop-filter:blur(24px);}
.sop-select.sop-aurora-select .sop-select-menu-heading{border-bottom:1px solid #b7eedd39;background:linear-gradient(120deg,#9ae9cf1c,transparent 48%,#b998e727);border-radius:9px;}
.sop-select.sop-aurora-select .sop-select-menu-heading::before{inset:6px 8px;border:1px solid #cfece318;border-radius:6px;z-index:-1}
.sop-select.sop-aurora-select .sop-select-option[aria-selected=true]{background:linear-gradient(110deg,#b1edd724,#a9b9e326);box-shadow:inset 1px 1px #e4fff625,0 3px 7px #0002;border-color:#ceffef47;}
.sop-select.sop-aurora-select .sop-select-option[data-active=true] .sop-select-icon{transform:translateY(-2px) rotate(-6deg);filter:brightness(1.12);}

@media(prefers-reduced-motion:reduce){.sop-select.sop-aurora-select *::before,.sop-select.sop-aurora-select *::after{transition:none!important;animation:none!important;}}
```
