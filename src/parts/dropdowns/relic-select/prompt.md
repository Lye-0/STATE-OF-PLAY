# Relic Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

落ち着いた象牙色の紙と余白。候補に合わせて明るい面と影が移動し、開くと面が縦にほどける。

## 文字と背景面
落ち着いた象牙色の紙と余白。候補に合わせて明るい面と影が移動し、開くと面が縦にほどける。
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
/* relic-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-relic-select{--sel-radius:9px;--sel-bg:#ded5c6;--sel-panel:#ebe5da;--sel-ink:#403e37;--sel-muted:#7c786a;--sel-accent:#7c7658;--sel-line:#968b6938;--sel-plane:linear-gradient(105deg,#fffdf49a,#e4dbc665);--sel-plane-border:#fffffda8;--sel-plane-radius:5px;--sel-enter:sop-menu-folio;}
.sop-select.sop-select-sculpted.sop-relic-select > .sop-select-trigger{box-shadow:inset 0 1px #fff8e8e8,0 4px 10px #332b2015;}
.sop-select.sop-select-sculpted.sop-relic-select > .sop-select-trigger::before{background:linear-gradient(95deg,#baa8800e,transparent);}
.sop-select.sop-select-sculpted.sop-relic-select .sop-select-popup::before{border-inline-start:2px solid #8e886666;box-shadow:0 2px 4px #55432112,inset 0 1px #fff9e7;}
.sop-select.sop-select-sculpted.sop-relic-select .sop-select-option .sop-select-option-copy b,.sop-select.sop-select-sculpted.sop-relic-select .sop-select-value .sop-select-option-copy b{font-family:Georgia,'Yu Mincho',serif;font-size:16px;font-weight:400;}
.sop-select.sop-select-sculpted.sop-relic-select .sop-select-menu-heading{letter-spacing:.6px;}
```
