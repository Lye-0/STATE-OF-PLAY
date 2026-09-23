# Lacquer — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

10pxの暗い漆面に15pxの落ち着いた赤褐色のつまみ。細い反射が縁をなぞり、掴むと深い艶が変わる。

## 面と比率
10pxの暗い漆面に15pxの落ち着いた赤褐色のつまみ。細い反射が縁をなぞり、掴むと深い艶が変わる。
レールは9〜12px、つまみは15〜18pxを中心とする。触れる領域は通常34px、タッチ用44pxを確保する。見た目の太さとヒット領域は分離する。正確な寸法・反射・色・境界・短い変化は下記の固有CSSを正本とし、共有のscrollbar-sculpted.cssも保持する。

## 動きと意味
スクロール位置とつまみ位置はブラウザーのネイティブスクロールから即時に決まる。表面の変化はスクロール・ドラッグ中に限り、停止すると短く落ち着く。`--sop-scroll-progress`は現在のスクロール位置を0〜1で表す。進捗面を持つスキンだけ`--rail-wake`が正の値となり、前後のレールの色・質感を分ける。これは実際に読んだ内容の履歴や既読確認を表すものではない。
つまみは内容量に比例する長さを維持し、ホイール・タッチ・矢印・Home/End・PageUp/PageDown・縦横・RTLの操作を保つ。方向によって面の軸と進捗の起点も合わせる。

## 移植
contentを利用先の内容へ差し替え、制約された高さを持つコンテナ内へ置く。Reactではchildren、通常HTMLではコンテンツ領域に配置する。ネイティブ値を変える慣性や装飾の追従遅延は付けない。destroy()でイベントと監視を解除する。

## 必要なソースと配置
固有styles.cssとそこからimportする共有CSS・TSをすべて含める。ルートのスキンクラスとA専用のopt-inクラスを保持する。ファイル見出しは配布時のパスであり、導入先の階層を強制するものではない。ユーザーのプロジェクト構成と規約を確認し、相対import・CSS・例の配置を連動して変更する。既存ファイルを無条件に上書きしない。プロジェクトを参照できなければ構成を確認する。

## 確認基準
実寸の画面で形と余白を確認する。単独・他スキン混在・同じ共有CSSの重複読み込みでも造形が変わらないこと。幅320px、長い日本語、キーボード、タッチ相当、prefers-reduced-motion、forced-colorsを確認する。縮小モーション時は表面の移動を止めても位置と選択状態を維持する。ホバーできない環境でも操作可能にする。

## 固有スタイル（正本と同期）
下記はこのパーツのstyles.cssと同じ内容。共有scrollbar-sculpted.cssの寸法・操作状態と併用する。

```css
@import "../../../shared/scrollbar-sculpted.css";
/* lacquer-scroll — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll{--sop-scroll-width:10px;--sop-handle-width:15px;--sop-scroll-accent:#dcb0ab;--rail-surface:linear-gradient(var(--rail-cross),#181b1d,#313336 48%,#121619);--rail-edge:#ccc8c128;}
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-track{box-shadow:inset 1px 0 #0005,inset -1px 0 #ffffff0c;}
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{border:1px solid #c5a59e55;background:linear-gradient(var(--rail-cross),#482c2c,#8e5d58 24%,#69443f 63%,#38292c);box-shadow:inset 1px 0 #dfc1b575,0 2px 5px #0005;}
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:2px;border-inline-start:1px solid #f2e9d278;background:linear-gradient(var(--rail-cross),#dec2b222,transparent 55%);}
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:4px;inset-inline:1px auto;inline-size:2px;background:linear-gradient(transparent,#fff3daab,transparent);}
.sop-scroll-area.sop-scroll-sculpted.sop-lacquer-scroll[data-dragging=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-cross),#52312e,#ab7367 24%,#794c47 63%,#402b30);}
```
