# Magnetic — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

二本の細い線と16pxのつまみ。移動するつまみの近くでレールがわずかに開き、短い光の余韻が残る。

## 面と比率
二本の細い線と16pxのつまみ。移動するつまみの近くでレールがわずかに開き、短い光の余韻が残る。
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
/* magnetic-scroll — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll{--sop-scroll-width:12px;--sop-handle-width:16px;--rail-radius:16px;--sop-scroll-accent:#c5cfd8;--rail-edge:transparent;--rail-surface:transparent;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track{background:linear-gradient(var(--rail-cross),transparent 0 1px,#9cafc346 1px 2px,transparent 2px calc(100% - 2px),#9cafc346 calc(100% - 2px) calc(100% - 1px),transparent calc(100% - 1px));box-shadow:none;border:0;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-cross),#657383,#bec8d3 24%,#9aa6b5 64%,#d0d7dd 88%);border:1px solid #e8eef666;box-shadow:0 2px 3px #0004,inset 1px 0 #fffffb70;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:2px;background:linear-gradient(var(--rail-cross),#ffffff25,transparent 60%);}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:-3px -4px;opacity:0;background:none;border-inline:1px solid #c9dfef55;border-radius:18px;transition:opacity .2s,inset .3s;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll[data-dragging=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{opacity:1;inset-inline:-5px;}

.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track{overflow:visible;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll > .sop-scroll-rail > .sop-scroll-track::before{inset-inline:-3px;inset-block-start:calc(var(--sop-thumb-offset,0px) - 4px);block-size:calc(var(--sop-thumb-size,40px) + 8px);background:none;border-inline:1px solid #a8bed442;border-radius:50% / 20%;opacity:.4;transition:opacity .2s;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll[data-scrolling=true] > .sop-scroll-rail > .sop-scroll-track::before{opacity:1;}
.sop-scroll-area.sop-scroll-sculpted.sop-magnetic-scroll[data-orientation=horizontal] > .sop-scroll-rail > .sop-scroll-track::before{left:calc(var(--sop-thumb-offset,0px) - 4px);right:auto;width:calc(var(--sop-thumb-size,40px) + 8px);top:-3px;bottom:-3px;height:auto;border-inline:0;border-block:1px solid #a8bed442;border-radius:20% / 50%;}
```
