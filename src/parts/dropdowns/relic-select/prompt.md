# Relic Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

博物館の収蔵品ラベルを真鍮の枠へ。打刻された番号、留めねじ、革と金属の余韻。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-relic-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* relic-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-relic-select{--sel-bg:linear-gradient(150deg,#4d4432,#242a23 50%,#353528);--sel-panel:linear-gradient(125deg,#55492b35,#1f2824 50%,#453e2b3d),#202620;--sel-accent:#d5b981;--sel-muted:#b8ae92;--sel-ink:#e8dcc0;--sel-line:#b59d616b;--sel-radius:6px;}
.sop-select.sop-relic-select > .sop-select-trigger{border:1px solid #b6a26f9e;box-shadow:inset 0 0 0 3px #66583b4d,inset 0 1px #e9d09b85,0 8px 0 -5px #29261f,0 14px 25px #0008;}
.sop-select.sop-relic-select > .sop-select-trigger::before{inset:5px;border:1px solid #baa5735e;border-radius:2px;background:repeating-linear-gradient(35deg,#a5996010 0 1px,transparent 1px 4px);}
.sop-select.sop-relic-select > .sop-select-trigger::after{inset:6px;background:radial-gradient(circle at 2px 2px,#c5b687 0 1px,#403722 1.4px 2px,transparent 2.5px),radial-gradient(circle at calc(100% - 2px) calc(100% - 2px),#c5b687 0 1px,#403722 1.4px 2px,transparent 2.5px);}
.sop-select.sop-relic-select .sop-select-value .sop-select-option-copy b{font:20px/1.25 Georgia,serif;}
.sop-select.sop-relic-select .sop-select-icon{border-radius:4px;background:linear-gradient(130deg,#bdac7d,#7e7654 25%,#c3ae7d 50%,#625d45 80%,#a99a6c);border:1px solid #cab581a6;box-shadow:inset 0 0 0 4px #bfb08240,inset 0 0 0 5px #4846308f,0 3px 5px #0008;color:#313d32;font-weight:bold;text-shadow:0 1px #d8ca92;}
.sop-select.sop-relic-select .sop-select-icon::after{inset:8px;border:1px solid #f8e2a638;background:repeating-linear-gradient(170deg,#191e1621 0 1px,transparent 1px 5px);}
.sop-select.sop-relic-select .sop-select-popup{border:1px solid #ae9b6b9c;border-radius:5px;box-shadow:inset 0 0 0 3px #6251365c,0 24px 48px #000b;}
.sop-select.sop-relic-select .sop-select-menu-heading{border:1px solid #b2a07161;margin:4px 4px 11px;background:#1b251d;color:#e0cda2;box-shadow:inset 0 2px 4px #0009;}
.sop-select.sop-relic-select .sop-select-menu-heading>span{font:15px/1.4 Georgia,serif;letter-spacing:.4px;}
.sop-select.sop-relic-select .sop-select-option{border:1px solid #a3935f26;border-radius:2px;background:#af945309;box-shadow:inset 0 1px #aa9a6026;}
.sop-select.sop-relic-select .sop-select-option[aria-selected=true]{background:linear-gradient(120deg,#b49c5640,#50543929);border-color:#c5af70a1;box-shadow:inset 0 0 0 3px #141f202e;}
.sop-select.sop-relic-select .sop-select-badge{border:1px solid #a898614d;padding:3px 4px;background:#12201b2f;}
.sop-select.sop-relic-select .sop-select-check{border-radius:1px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-relic-select *::before,.sop-select.sop-relic-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-relic-select .sop-select-option{margin-block:7px;background:linear-gradient(130deg,#5e56342b,#19302b21);box-shadow:inset 0 0 0 3px #93845112,0 2px 0 #08151240;padding-block:13px;}
.sop-select.sop-relic-select .sop-select-option-copy b{font:16px/1.35 Georgia,serif;}
.sop-select.sop-relic-select .sop-select-option .sop-select-icon{width:44px;height:49px;}
```
