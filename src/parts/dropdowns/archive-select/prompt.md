# Archive Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

明るい紙、細い区切り、薄い選択面。縦へ展開し、左端の線と背景が選択候補に追従する。

## 文字と背景面
明るい紙、細い区切り、薄い選択面。縦へ展開し、左端の線と背景が選択候補に追従する。
候補名を最優先に、説明と小さなチェックを添える。アイコンは利用側が指定したときだけ20pxで表示し、アイコンがなくても空白を残さない。標準のフィールドはmin-height 62px、候補はmin-height 46px、説明付きなら自然に広がる。ラベル・description・badgeは折り返し、内容のないバッジは表示しない。showHeading/showHintsで補助見出しとヒントを選べる。

## 動く面
select-motion.tsが現在の候補の位置・寸法をCSS変数へ同期する。背景面はpopupの擬似要素であり、文字は移動させない。hoverとキーボード移動は同じ面に反映するが、確定済みのチェックは別に保持する。面の追従は約230ms、開閉は約240msを基準に固有CSSへ合わせる。アニメーション完了を待たず選択でき、連続操作では現在の候補へ直ちに向きを変える。
ポインター追従はマウスでのみ使い、タッチではタップ・開閉・選択の演出を使う。scroll・resize・テキスト変更で位置を再計測し、popup内のスクロールで面が行からずれないようにする。キーボードのフォーカスと確定値はselect-controller.tsが管理する。

## 状態と移植
これは単一値を返すselect-only combobox。上下/Home/End/頭文字で候補を移動し、Enter/Space/Tabで確定、Escapeで取消。無効候補・無効フィールド・空リスト・フォームresetを維持する。選択肢内に操作できるボタンを入れない。itemsとvalue/onValueChangeを利用側のデータに接続する。候補内容に依存するテーマや例文は実装の固定仕様ではない。通常の「並び順」「保存先」でも同じ造形が成立するようにする。
開く方向は画面端で反転し、Popover API対応時はtop layerを使う。destroy()で背景面の監視、イベント、RAF、タイマーを含め解除する。

## 必要なソースと配置
固有styles.cssとそこからimportする共有CSS・TSをすべて含める。ルートのスキンクラスとA専用のopt-inクラスを保持する。ファイル見出しは配布時のパスであり、導入先の階層を強制するものではない。ユーザーのプロジェクト構成と規約を確認し、相対import・CSS・例の配置を連動して変更する。既存ファイルを無条件に上書きしない。プロジェクトを参照できなければ構成を確認する。

## 確認基準
実寸の画面で形と余白を確認する。単独・他スキン混在・同じ共有CSSの重複読み込みでも造形が変わらないこと。幅320px、長い日本語、キーボード、タッチ相当、prefers-reduced-motion、forced-colorsを確認する。縮小モーション時は表面の移動を止めても位置と選択状態を維持する。ホバーできない環境でも操作可能にする。

## 固有スタイル（正本と同期）
下記はこのパーツのstyles.cssと同じ内容。共有select-sculpted.cssの寸法・操作状態と併用する。

```css
@import "../../../shared/select-sculpted.css";
/* archive-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-archive-select{--sel-radius:4px;--sel-bg:#e4e1d6;--sel-panel:#f0eee5;--sel-ink:#3c453d;--sel-muted:#778073;--sel-accent:#697b59;--sel-line:#73785e3b;--sel-plane:linear-gradient(90deg,#c4cdad3b,#dce0cd24);--sel-plane-border:transparent;--sel-plane-radius:0px;--sel-enter:sop-menu-folio;}
.sop-select.sop-select-sculpted.sop-archive-select > .sop-select-trigger{border-bottom:2px solid #91987a8c;box-shadow:0 2px 0 #d8d7c58c,inset 0 1px #ffffeff0;}
.sop-select.sop-select-sculpted.sop-archive-select > .sop-select-trigger::before{background:repeating-linear-gradient(0deg,#4b603a02 0 1px,transparent 1px 4px);}
.sop-select.sop-select-sculpted.sop-archive-select .sop-select-popup{box-shadow:0 3px 0 #babea929,0 16px 30px #0002;}
.sop-select.sop-select-sculpted.sop-archive-select .sop-select-popup::before{box-shadow:inset 3px 0 #7e886879;}
.sop-select.sop-select-sculpted.sop-archive-select .sop-select-option{border-radius:0;border-bottom:1px solid #828a7120;}
.sop-select.sop-select-sculpted.sop-archive-select .sop-select-menu-heading{font-size:9px;letter-spacing:.8px;}
.sop-select.sop-select-sculpted.sop-archive-select .sop-select-badge{font-family:Consolas,monospace;}
```
