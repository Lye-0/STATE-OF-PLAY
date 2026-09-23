# Spectrum Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

塗りの少ない暗い面。動くのは候補の文字幅に合わせた分光の下線で、行全体を厚い箱にしない。

## 文字と背景面
塗りの少ない暗い面。動くのは候補の文字幅に合わせた分光の下線で、行全体を厚い箱にしない。
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
/* spectrum-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-spectrum-select{--sel-radius:11px;--sel-bg:#22232a;--sel-panel:#1e2027;--sel-ink:#e4e5ef;--sel-muted:#b2b1c1;--sel-accent:#c2bfdc;--sel-line:#c1bdda26;--sel-plane:linear-gradient(90deg,#b8c0dc0b,#cbc4e70f);--sel-plane-border:transparent;--sel-plane-radius:3px;--sel-enter:sop-menu-dissolve;}
.sop-select.sop-select-sculpted.sop-spectrum-select > .sop-select-trigger{box-shadow:inset 0 1px #f3e9ff18,0 4px 12px #0002;}
.sop-select.sop-select-sculpted.sop-spectrum-select > .sop-select-trigger::before{inset:0 17px auto;height:1px;background:linear-gradient(90deg,transparent,#accfc552,#b3b6d27a,#d0b7c650,transparent);}
.sop-select.sop-select-sculpted.sop-spectrum-select .sop-select-popup::before{box-shadow:inset 0 -1px #c6c4d72b;}
.sop-select.sop-select-sculpted.sop-spectrum-select .sop-select-popup::after{content:'';position:absolute;pointer-events:none;left:calc(var(--sel-plane-x) + 12px);top:calc(var(--sel-plane-y) + var(--sel-plane-h) - 4px);width:calc(var(--sel-plane-w) - 24px);height:1px;background:linear-gradient(90deg,#afdace80,#b4c7e585,#c8b3df80,#e2bcc855);transition:top .24s,width .24s;}

.sop-select.sop-select-sculpted.sop-spectrum-select .sop-select-popup::before{background:none;border-color:transparent;box-shadow:none;}
.sop-select.sop-select-sculpted.sop-spectrum-select .sop-select-popup::after{left:calc(var(--sel-plane-x) + 13px);width:min(var(--sel-label-w,100px),calc(var(--sel-plane-w) - 32px));top:calc(var(--sel-plane-y) + var(--sel-plane-h) - 6px);height:2px;border-radius:2px;transition:top .23s cubic-bezier(.2,.85,.25,1),width .23s;}
.sop-select.sop-select-sculpted.sop-spectrum-select .sop-select-option[data-active=true] .sop-select-option-copy b{color:#faf8ff;}
```
