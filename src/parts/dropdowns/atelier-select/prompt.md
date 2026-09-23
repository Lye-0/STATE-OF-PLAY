# Atelier Select — 造形仕様 v2.0.0（STATE OF PLAY v4.2.0）

顔料の厚みと紙の台紙。色票を一枚ずつ選ぶ、作品のようなパレットメニュー。

タイプA。素材と形そのものを表現する。既存のトグルなどは完成度の基準であり、別部品の造形をそのまま移植する指示ではない。

## 閉じたフィールドと開いた候補の設計
素材の象徴となるアイコン、選択ラベル、補足説明、独立した開閉インジケーターを持つ。閉じたトリガーだけでなく、ヘッダー、各候補の素材面、バッジ、選択チェック、候補移動のフォーカス、操作ヒントまで同じ造形で揃える。選択ラベルと説明を装飾の背景へ焼き込まない。

基本トリガーは102px以上、主アイコンは50px、選択肢のアイコンは44px。狭い画面では寸法と余白を縮める。長い日本語のラベル、description、badgeは折り返し、操作部の外へはみ出させない。各素材固有の上書きは下記のCSSを正本とする。開閉時だけ短い移動・透明度の変化を使い、常時揺れる文字や待機中のJSループを追加しない。

## 選択動作
これは実際の値を返す単一選択select-only comboboxであり、アクションメニューではない。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消する。選択候補とフォーカス候補を区別する。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢の内部に別のボタンや入力欄を入れない。

## 導入と内容
itemsのvalue/label/description/icon/badge/group/disabledを利用先から受け取る。展示用の内容を事実や固定仕様として扱わず、架空の性能・状態を勝手に補わない。renderOptionは非対話の装飾のみ。nameのhidden input、識別子、キーボードフォーカスを保持する。開いたメニューは対応ブラウザーのtop layerへ出し、画面上下端では向きを反転し、長いリストは内部スクロールする。コンポーネントを取り外す際は開いたポップオーバーとイベントを解除する。

## 必要なソースと配置
`styles.css`、`select-sculpted.css`、そこから参照するベースCSSを揃える。ルートの`sop-select-sculpted`と`.sop-atelier-select`を維持する。配布側のファイル見出しは参照元のパスであり、導入先の同じ階層を強制するものではない。利用先の構成と規約を確認して配置し、移動時には相対importとCSSの参照を更新する。既存コードを無条件に上書きしない。プロジェクトが見えない場合は必要な構成を確認する。

## 確認基準
単独の表示と他のスキンを混在させた表示が一致すること。通常・操作中・無効・キーボードフォーカス・320px幅・長い日本語・prefers-reduced-motion・forced-colorsを確認する。外観変更を理由に入力の標準操作、状態管理、外部制御を省略しない。

## 固有スタイル（正本と同期）
次はこの部品の`styles.css`と同一の内容。共有の寸法と操作状態のスタイルは`select-sculpted.css`も必要。コード込みの実装プロンプトには必要な全ファイルが含まれる。

```css
@import "../../../shared/select-sculpted.css";
/* atelier-select — field, icon, list and option art direction. v4.2.0 */

.sop-select.sop-atelier-select{--sel-ink:#3c3632;--sel-muted:#766b60;--sel-accent:#866c54;--sel-dark:#fff4d9;--sel-line:#a3937757;--sel-bg:#e8dfcc;--sel-panel:#eee7d9;--sel-radius:5px;--sel-hover:#d1b89b24;}
.sop-select.sop-atelier-select > .sop-select-trigger{border-radius:5px;box-shadow:inset 0 1px #fffbe1,inset 0 -4px #bca58b,1px 6px 0 #584b3f,0 17px 25px #0007;}
.sop-select.sop-atelier-select > .sop-select-trigger::before{inset:5px 5px 8px;border:1px solid #a39a7e55;background:repeating-linear-gradient(0deg,transparent 0 3px,#91795b07 3px 4px);}
.sop-select.sop-atelier-select > .sop-select-trigger::after{inset:0 0 auto;height:6px;background:linear-gradient(90deg,#568d87 0 25%,#a87d79 25% 50%,#d4ad58 50% 75%,#57778b 75%);}
.sop-select.sop-atelier-select .sop-select-value .sop-select-option-copy b{font:italic 24px/1.15 Georgia,'Yu Mincho',serif;letter-spacing:-.8px;}
.sop-select.sop-atelier-select .sop-select-icon{border:none;background:#eee4d2;border-radius:2px;box-shadow:1px 3px 4px #66544448;transform:rotate(-5deg);color:#eee9d1;align-items:flex-end;padding-bottom:7px;font-size:9px;}
.sop-select.sop-atelier-select .sop-select-icon::before{inset:4px;background:linear-gradient(130deg,#98c0a6,#4a847d 48%,#629c99 54%,#3f7277);clip-path:polygon(5% 3%,28% 7%,50% 0,84% 7%,100% 3%,94% 25%,100% 55%,93% 86%,97% 100%,50% 96%,14% 100%,3% 82%,7% 37%,0 14%);box-shadow:inset 1px 1px #ffffff4d;}
.sop-select.sop-atelier-select [data-glyph="1"] .sop-select-icon::before{background:linear-gradient(128deg,#cb9b96,#995859 55%,#c57875 58%,#97626d);}
.sop-select.sop-atelier-select [data-glyph="2"] .sop-select-icon::before{background:linear-gradient(130deg,#e3c87e,#b38a47 46%,#dcc26c 50%,#bea654);}
.sop-select.sop-atelier-select [data-glyph="3"] .sop-select-icon::before{background:linear-gradient(128deg,#abc1c8,#4b7187 40%,#98b6bd 48%,#526c88);}
.sop-select.sop-atelier-select .sop-select-icon::after{inset:6px;opacity:.45;background:repeating-linear-gradient(160deg,transparent 0 3px,#f5ffe722 3px 4px);}
.sop-select.sop-atelier-select .sop-select-popup{border-radius:5px;box-shadow:inset 0 1px #fff8e6,3px 4px 0 #c5b497,5px 6px 0 #ac9a82,0 20px 40px #0008;}
.sop-select.sop-atelier-select .sop-select-menu-heading{color:#756247;border-bottom:1px solid #aa98735e;padding-inline:12px;}
.sop-select.sop-atelier-select .sop-select-menu-heading>span{font:italic 16px/1.3 Georgia,serif;}
.sop-select.sop-atelier-select .sop-select-menu-heading small{padding:4px;border:1px solid #ad9d8378;rotate:4deg;}
.sop-select.sop-atelier-select .sop-select-option{border-radius:3px;background:#faf4e729;border-bottom:1px solid #beaf9659;}
.sop-select.sop-atelier-select .sop-select-option[aria-selected=true]{background:#d9cdad38;border-color:#a6936a;box-shadow:inset 0 0 0 2px #fff8e77a,2px 3px 0 #b9a68347;}
.sop-select.sop-atelier-select .sop-select-option[data-active=true] .sop-select-icon{transform:rotate(3deg) translateY(-1px);}
.sop-select.sop-atelier-select .sop-select-check{border-radius:2px;transform:rotate(-5deg);}
.sop-select.sop-atelier-select .sop-select-badge{color:#756851;letter-spacing:.4px;}

@media(prefers-reduced-motion:reduce){.sop-select.sop-atelier-select *::before,.sop-select.sop-atelier-select *::after{transition:none!important;animation:none!important;}}

/* Pigment cards: the supplied palette colours, not arbitrary hue rotations. */
.sop-select.sop-atelier-select .sop-select-icon::before{background:linear-gradient(137deg,#dfa586,#aa604d 43%,#d68e72 46%,#a86e64);}
.sop-select.sop-atelier-select [data-glyph="1"] .sop-select-icon::before{background:linear-gradient(134deg,#aac2a3,#708c75 44%,#a3b897 48%,#6b927d);}
.sop-select.sop-atelier-select [data-glyph="2"] .sop-select-icon::before{background:linear-gradient(134deg,#aac8d6,#4e6f85 44%,#8cafbc 50%,#557986);}
.sop-select.sop-atelier-select [data-glyph="3"] .sop-select-icon::before{background:linear-gradient(134deg,#e8d9b7,#baa486 44%,#e0ccb2 51%,#bbac8a);}
.sop-select.sop-atelier-select .sop-select-option{margin-block:7px;background:#fffaea4f;box-shadow:1px 2px 1px #b5a48552;padding-block:14px;}
.sop-select.sop-atelier-select .sop-select-option .sop-select-icon{width:51px;height:52px;}
.sop-select.sop-atelier-select .sop-select-option-copy b{font-family:Georgia,serif;font-size:17px;font-style:italic;}
.sop-select.sop-atelier-select .sop-select-badge{color:#79674d;font-size:7px;}
.sop-select.sop-atelier-select .sop-select-menu-heading{min-height:72px;border-bottom:3px double #ab947759;}
```
