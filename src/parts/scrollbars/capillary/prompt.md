# Capillary — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

幅11pxのガラス管と16pxの透明なつまみ。スクロール済みの領域には淡い水色が満ち、掴んだ縁にだけ光が集まる。

## 面と比率
幅11pxのガラス管と16pxの透明なつまみ。スクロール済みの領域には淡い水色が満ち、掴んだ縁にだけ光が集まる。
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
/* capillary — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-capillary{--sop-scroll-width:11px;--sop-handle-width:16px;--sop-scroll-accent:#a6d5d4;--rail-wake:.5;--rail-surface:linear-gradient(var(--rail-cross),#ffffff10,#b8dbdc12 25%,#18262d60 70%,#c4eeee22);--rail-edge:#adcccc36;}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-track{box-shadow:inset 1px 0 #ffffff18,inset -1px 0 #d9f4f310,0 1px 3px #0002;}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-track::before{inset:2px;border-inline-start:1px solid #e8ffff22;}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(var(--rail-cross),#93c3c458,#c0e9e1bd 45%,#769dce60);}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{border:1px solid #c5e5e575;background:radial-gradient(ellipse at 20% 13%,#f2ffff90,transparent 35%),linear-gradient(var(--rail-cross),#cee9ea70,#587d8740 36%,#a2c6cd65 70%,#e2f4f299);box-shadow:inset 1px 1px 2px #f2ffff85,inset -1px -2px 3px #d9e9f475,0 2px 5px #0004;backdrop-filter:blur(2px);}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:2px;border:1px solid #ddf8f339;background:linear-gradient(var(--rail-along),#fcffff45,transparent 40%);}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset-block:8%;inset-inline:2px auto;inline-size:2px;background:linear-gradient(var(--rail-along),transparent,#ffffffb0,transparent);opacity:.55;}
.sop-scroll-area.sop-scroll-sculpted.sop-capillary[data-dragging=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{opacity:1;}
```
