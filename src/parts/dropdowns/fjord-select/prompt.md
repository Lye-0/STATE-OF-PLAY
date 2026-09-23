# Fjord Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

青灰色の明るいフィールド。半透明の薄い背景が滑り、上下の反射が面の厚みを示す。

## 文字と背景面
青灰色の明るいフィールド。半透明の薄い背景が滑り、上下の反射が面の厚みを示す。
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
/* fjord-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-fjord-select{--sel-radius:12px;--sel-bg:#dce5e9;--sel-panel:#e9eff2;--sel-ink:#2a404d;--sel-muted:#657e8d;--sel-accent:#496f82;--sel-line:#7392a236;--sel-plane:linear-gradient(100deg,#bdcedb5c,#deebf157);--sel-plane-border:#ffffffb0;--sel-plane-radius:7px;--sel-panel-image:linear-gradient(155deg,#ffffff55,transparent 60%);}
.sop-select.sop-select-sculpted.sop-fjord-select > .sop-select-trigger{box-shadow:inset 0 1px #ffffffed,0 4px 12px #18334412;}
.sop-select.sop-select-sculpted.sop-fjord-select > .sop-select-trigger::before{background:linear-gradient(100deg,transparent,#ffffff33);}
.sop-select.sop-select-sculpted.sop-fjord-select .sop-select-popup::before{box-shadow:inset 0 -1px #6f8b9836,inset 0 1px #ffffffbe;}
.sop-select.sop-select-sculpted.sop-fjord-select .sop-select-popup{border-top:2px solid #98b5c585;}
.sop-select.sop-select-sculpted.sop-fjord-select .sop-select-option[aria-selected=true] .sop-select-check{font-weight:bold;}
```
