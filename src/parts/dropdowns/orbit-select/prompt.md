# Orbit Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

天体の軌道を重ねた観測盤。選択した星のハローが、パネルの曲線へつながる。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-orbit-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* orbit-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-orbit-select{--sel-bg:radial-gradient(ellipse at 2% 70%,#3448658c,transparent 65%),#171e2c;--sel-panel:radial-gradient(ellipse at 80% 0,#41416577,transparent 65%),#161f2c;--sel-accent:#c2c7f4;--sel-muted:#acb4cb;--sel-line:#a0acc14d;--sel-radius:24px;}
.sop-select.sop-orbit-select > .sop-select-trigger{border-radius:50px 16px 16px 50px;padding-left:14px;}
.sop-select.sop-orbit-select > .sop-select-trigger::before{width:155px;height:155px;border-radius:50%;left:-40px;top:-21px;border:1px solid #bab7d851;box-shadow:0 0 0 20px #a3a8d012,0 0 0 21px #a1b9d929,0 0 0 41px #b3a6c008,0 0 0 42px #adb6d81c;transform:rotate(-24deg) scaleY(.6);}
.sop-select.sop-orbit-select > .sop-select-trigger::after{inset:8px;background:radial-gradient(circle at 73% 24%,#cdd5ed 0 1px,transparent 1.5px),radial-gradient(circle at 87% 68%,#afaadd 0 1px,transparent 1.4px);}
.sop-select.sop-orbit-select .sop-select-icon{border-radius:50%;border:1px solid #ada7d38a;background:radial-gradient(circle at 31% 24%,#e0cdeb,#979cba 18%,#465d86 39%,#1e3048 61%,#101e2d 78%,#9eafda78);box-shadow:inset -2px -2px 4px #bbc7e578,0 5px 8px #0008;color:#e1e1f3;overflow:visible;text-shadow:0 1px 4px #050e15;}
.sop-select.sop-orbit-select .sop-select-icon::before{inset:14px -7px;border:1px solid #d9c5e682;border-radius:50%;transform:rotate(-28deg);}
.sop-select.sop-orbit-select .sop-select-icon::after{inset:6px;border:1px solid #d4d9f253;border-radius:50%;border-bottom-color:transparent;transform:rotate(18deg);}
.sop-select.sop-orbit-select [data-glyph="1"] .sop-select-icon{filter:hue-rotate(210deg);}
.sop-select.sop-orbit-select [data-glyph="2"] .sop-select-icon{filter:hue-rotate(80deg);}
.sop-select.sop-orbit-select .sop-select-popup{border-radius:17px 17px 27px 27px;}
.sop-select.sop-orbit-select .sop-select-menu-heading::before{z-index:-1;inset:1px 5px;border:1px solid #b4b6d12c;border-radius:50%;transform:rotate(-9deg);}
.sop-select.sop-orbit-select .sop-select-menu-heading::after{z-index:-1;inset:9px 30px;border:1px solid #b4b6d12c;border-radius:50%;transform:rotate(6deg);}
.sop-select.sop-orbit-select .sop-select-option{border-radius:34px 12px 12px 34px;padding-left:11px;}
.sop-select.sop-orbit-select .sop-select-option[aria-selected=true]{border-color:#ada4df73;background:linear-gradient(100deg,#a3a7dc25,#afb7e212);}
.sop-select.sop-orbit-select .sop-select-option[data-active=true] .sop-select-icon::before{transform:rotate(15deg);transition:transform .6s;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-orbit-select *::before,.sop-select.sop-orbit-select *::after{transition:none!important;animation:none!important;}}
```
