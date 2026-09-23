# Nocturne Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

黒いピアノの艶と象牙の細いエッジ。夜の静けさを、磨かれた黒い選択面で表現。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-nocturne-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* nocturne-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-nocturne-select{--sel-bg:linear-gradient(120deg,#3e42499c,#10151f 34%,#121c29 80%,#353b4280);--sel-panel:linear-gradient(155deg,#303641,#101a26 62%,#1e2732);--sel-accent:#d1c4a4;--sel-ink:#ece7db;--sel-muted:#a7afbb;--sel-line:#b2b09a4b;--sel-radius:8px;}
.sop-select.sop-nocturne-select > .sop-select-trigger{border-radius:8px 8px 18px 8px;box-shadow:inset 0 1px #e9e1c450,inset 0 -4px #060c12,0 14px 24px #000a;}
.sop-select.sop-nocturne-select > .sop-select-trigger::before{inset:5px;border:1px solid #c5bea038;border-radius:5px 5px 14px 5px;background:linear-gradient(145deg,#e0d7bf0c,transparent 38%);}
.sop-select.sop-nocturne-select > .sop-select-trigger::after{right:55px;top:6px;bottom:6px;width:2px;background:linear-gradient(#c6c3b87e,#f4ead373,#b3ae976a);box-shadow:2px 0 #090e1799;}
.sop-select.sop-nocturne-select .sop-select-value .sop-select-option-copy b{font:22px/1.2 Georgia,serif;}
.sop-select.sop-nocturne-select .sop-select-icon{background:radial-gradient(circle at 29% 20%,#ddd3ba83,#404658 20%,#142132 55%,#090f1b 77%);border:1px solid #b4ad8a78;border-radius:50%;color:#c2ba9e;box-shadow:inset -1px -2px 3px #d9d1b06b,0 4px 7px #0008;}
.sop-select.sop-nocturne-select .sop-select-icon::before{inset:5px;border:1px solid #c2bba251;border-radius:50%;border-right-color:transparent;transform:rotate(-25deg);}
.sop-select.sop-nocturne-select .sop-select-icon::after{top:5px;right:7px;width:5px;height:5px;border-radius:50%;background:#daceb587;box-shadow:0 0 8px #fff5ce40;}
.sop-select.sop-nocturne-select .sop-select-popup{border-radius:8px 8px 20px 8px;}
.sop-select.sop-nocturne-select .sop-select-menu-heading>span{font:italic 17px/1.3 Georgia,serif;}
.sop-select.sop-nocturne-select .sop-select-menu-heading::after{inset:3px;border-block:1px solid #c2b8a127;z-index:-1;}
.sop-select.sop-nocturne-select .sop-select-option{border-radius:4px;background:linear-gradient(#b9bbc10d,#070d161f);border-bottom:1px solid #babaa929;box-shadow:0 2px 0 #0209166e;}
.sop-select.sop-nocturne-select .sop-select-option[aria-selected=true]{background:linear-gradient(115deg,#dbd0b825,#3b465959);border-color:#b3aa8e76;box-shadow:inset 3px 0 #d6cbae,0 2px 0 #080e175c;}
.sop-select.sop-nocturne-select .sop-select-badge{font-family:Georgia,serif;font-style:italic;font-size:10px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-nocturne-select *::before,.sop-select.sop-nocturne-select *::after{transition:none!important;animation:none!important;}}

.sop-select.sop-nocturne-select .sop-select-option-copy b{font:17px/1.3 Georgia,serif;}
.sop-select.sop-nocturne-select .sop-select-option .sop-select-icon{background:radial-gradient(circle at 30% 23%,#f1e7cd,#c6beae 30%,#7c8198 63%,#515e77 82%);color:#354259;}
.sop-select.sop-nocturne-select .sop-select-option .sop-select-icon::before{background:radial-gradient(circle at 68% 33%,#78829670 0 3px,transparent 3.5px),radial-gradient(circle at 30% 65%,#5f6c8970 0 4px,transparent 4.7px);border-color:#eee7cc47;}
```
