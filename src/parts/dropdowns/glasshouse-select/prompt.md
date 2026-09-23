# Glasshouse Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

明るいセージのガラス面。白い反射が候補へ滑り、背景の低彩度の光がポインターに応える。

## 文字と背景面
明るいセージのガラス面。白い反射が候補へ滑り、背景の低彩度の光がポインターに応える。
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
/* glasshouse-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-glasshouse-select{--sel-radius:17px;--sel-bg:#dfe8e3;--sel-panel:#e9eeea;--sel-ink:#30443b;--sel-muted:#6e8276;--sel-accent:#49725f;--sel-line:#71908334;--sel-plane:radial-gradient(ellipse at var(--sel-light-x) 0,#ffffffe0,#fbfff57a 80%);--sel-plane-border:#ffffffe0;--sel-plane-radius:11px;--sel-enter:sop-menu-dissolve;}
.sop-select.sop-select-sculpted.sop-glasshouse-select > .sop-select-trigger{box-shadow:inset 0 1px #fbfffacf,0 4px 12px #163c2710;}
.sop-select.sop-select-sculpted.sop-glasshouse-select > .sop-select-trigger::before{background:radial-gradient(ellipse at 90% 10%,#d3e2cd75,transparent 75%);}
.sop-select.sop-select-sculpted.sop-glasshouse-select .sop-select-popup::before{box-shadow:0 2px 6px #24432f0c,inset 0 1px #fffefa;}
.sop-select.sop-select-sculpted.sop-glasshouse-select .sop-select-popup{background-image:radial-gradient(ellipse at 100% 0,#d6e4d980,transparent 60%);}
.sop-select.sop-select-sculpted.sop-glasshouse-select .sop-select-check{color:#38684f;}
```
