# Orbit Select — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

チャコールの面の中を、輪郭の美しい丸い選択面が滑る。選択済みの小さな円と、移動中の背景を区別する。

## 文字と背景面
チャコールの面の中を、輪郭の美しい丸い選択面が滑る。選択済みの小さな円と、移動中の背景を区別する。
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
/* orbit-select — text-led, material-specific motion. v4.3.0 */
.sop-select.sop-select-sculpted.sop-orbit-select{--sel-radius:25px;--sel-plane-radius:22px;--sel-bg:#23242a;--sel-panel:#202126;--sel-accent:#d1cde3;--sel-muted:#acaabb;--sel-line:#c5c1d52c;--sel-plane:linear-gradient(110deg,#ffffff12,#bbb7d706);--sel-plane-border:#d7d5e438;}
.sop-select.sop-select-sculpted.sop-orbit-select > .sop-select-trigger{padding-inline:22px;box-shadow:inset 0 1px #ffffff19,0 4px 12px #0002;}
.sop-select.sop-select-sculpted.sop-orbit-select > .sop-select-trigger::before{background:linear-gradient(125deg,#ffffff05,transparent 60%);}
.sop-select.sop-select-sculpted.sop-orbit-select .sop-select-popup{padding:9px;border-radius:25px;box-shadow:0 16px 35px #0003,inset 0 1px #e8e4ff14;}
.sop-select.sop-select-sculpted.sop-orbit-select .sop-select-popup::before{box-shadow:inset 0 1px #f0edff22;}
.sop-select.sop-select-sculpted.sop-orbit-select .sop-select-option{padding-inline:18px;}
.sop-select.sop-select-sculpted.sop-orbit-select .sop-select-check{width:12px;height:12px;font-size:0;border:1px solid #d1cde38c;border-radius:50%;background:radial-gradient(circle,#ded9f3 0 2px,transparent 3px);}
```
