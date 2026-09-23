# Ember Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

暗い面に落ち着いた文字。移動中の行の縁だけに温かな光が集まり、面の余白を引き立てる。

## 文字と背景面
暗い面に落ち着いた文字。移動中の行の縁だけに温かな光が集まり、面の余白を引き立てる。
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
/* ember-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-ember-select{--sel-radius:11px;--sel-bg:#262323;--sel-panel:#242123;--sel-ink:#e6dfd8;--sel-muted:#b1a39e;--sel-accent:#d7ad97;--sel-line:#c4b1a629;--sel-plane:radial-gradient(ellipse at 0 50%,#d2a58a1e,transparent 80%),#ffffff03;--sel-plane-border:transparent;--sel-panel-image:linear-gradient(120deg,#c0a59305,transparent);}
.sop-select.sop-select-sculpted.sop-ember-select > .sop-select-trigger{box-shadow:inset 0 1px #f0d6bd18,0 5px 12px #0002;}
.sop-select.sop-select-sculpted.sop-ember-select > .sop-select-trigger::before{inset:0 0 auto;height:1px;background:linear-gradient(90deg,transparent,#f0c5aa70,transparent);}
.sop-select.sop-select-sculpted.sop-ember-select .sop-select-popup::before{border-inline-start:2px solid #dfb39998;box-shadow:inset 2px 0 8px #d49a7320;border-radius:2px 8px 8px 2px;}
.sop-select.sop-select-sculpted.sop-ember-select .sop-select-option .sop-select-check{color:#f0c6a7;}
```
