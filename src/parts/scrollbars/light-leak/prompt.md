# Light Leak — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

9pxの軌道に淡い分光が残る。15pxのつまみは滑らかな白い面で、操作中だけ縁の光が広がる。

## 面と比率
9pxの軌道に淡い分光が残る。15pxのつまみは滑らかな白い面で、操作中だけ縁の光が広がる。
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
/* light-leak — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak{--sop-scroll-width:9px;--sop-handle-width:15px;--sop-scroll-accent:#d8c8eb;--rail-wake:.6;--rail-edge:#bbbfc528;--rail-surface:#c9d5e00a;}
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(var(--rail-along),#8bb4c359,#aca7d969,#e8c3d282);}
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak > .sop-scroll-rail > .sop-scroll-track::after{inset-inline:3px;inset-block:0;background:linear-gradient(var(--rail-along),transparent,#e5d9fc30,transparent);}
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-along),#e3dfe9,#c3bfd6 34%,#c3d1e0 72%,#dce5e6);border-color:#f2f0fa9c;box-shadow:inset 1px 0 #ffffff90,0 2px 4px #0003;}
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:1px;background:linear-gradient(var(--rail-cross),#ffffff70,transparent 45%);}
.sop-scroll-area.sop-scroll-sculpted.sop-light-leak > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:-2px;background:none;border:1px solid #cbd2e633;box-shadow:0 0 8px #c5c5e54a;}
```
