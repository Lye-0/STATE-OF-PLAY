# Paper Ribbon — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

幅12pxの平たい帯と18pxの紙のしおり。操作面に沿う折り目の明暗が、掴んだときに変化する。

## 面と比率
幅12pxの平たい帯と18pxの紙のしおり。操作面に沿う折り目の明暗が、掴んだときに変化する。
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
/* paper-ribbon — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon{--sop-scroll-width:12px;--sop-handle-width:18px;--rail-radius:2px;--sop-scroll-accent:#d9ceb7;--rail-surface:#b6aa911a;--rail-edge:#c5b99c24;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-track{box-shadow:inset 1px 0 #e3dcc620;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-track::before{inset:0;background:repeating-linear-gradient(var(--rail-along),transparent 0 8px,#d6caba22 8px 9px);}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-cross),#d4c8b0,#e7dfcf 49%,#b8ac9690 50%,#dfd3bd);border:0;clip-path:polygon(0 0,100% 0,100% 100%,50% 93%,0 100%);box-shadow:inset 1px 0 #fff2d8aa;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:1px;background:linear-gradient(var(--rail-along),#fff9e65c,transparent 30%);border-inline-start:1px solid #a6927130;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:0;background:linear-gradient(var(--rail-cross),transparent 42%,#fff9e676 49%,transparent 65%);opacity:.4;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon[data-dragging=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{opacity:1;}
.sop-scroll-area.sop-scroll-sculpted.sop-paper-ribbon[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{clip-path:polygon(0 0,100% 0,93% 50%,100% 100%,0 100%);}
```
