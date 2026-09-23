# LED Rail — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

10pxのレールの微細な目盛りが進行に応じて点灯する。つまみは落ち着いた明るい金属面。

## 面と比率
10pxのレールの微細な目盛りが進行に応じて点灯する。つまみは落ち着いた明るい金属面。
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
/* led-rail — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail{--sop-scroll-width:10px;--sop-handle-width:16px;--rail-radius:4px;--sop-scroll-accent:#e0cba8;--rail-edge:#b4a99133;--rail-surface:#262420;--rail-wake:.9;}
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail > .sop-scroll-rail > .sop-scroll-track{background:repeating-linear-gradient(var(--rail-along),#cbbf9533 0 2px,transparent 2px 7px),#202522;box-shadow:inset 1px 0 #0008;}
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:repeating-linear-gradient(var(--rail-along),#ead7abbe 0 2px,transparent 2px 7px);}
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-cross),#8b8b79,#d4d2ba 25%,#b5b3a4 65%,#d2c7ab);border:1px solid #e7dfc07a;box-shadow:inset 1px 0 #fff9dc75,0 2px 3px #0004;}
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:3px;background:linear-gradient(var(--rail-along),#ffffff20,transparent);border-inline-start:1px solid #ffffff20;}
.sop-scroll-area.sop-scroll-sculpted.sop-led-rail > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:0;background:linear-gradient(var(--rail-along),transparent,#ffefcb77,transparent);}
```
