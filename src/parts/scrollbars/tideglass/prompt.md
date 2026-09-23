# Tideglass — 面・比率・動きの仕様（STATE OF PLAY v4.3.0）

12pxの透明な水路と17pxの有機的なレンズ面。スクロールした領域に水色が満ち、つまみの縁が静かに光る。

## 面と比率
12pxの透明な水路と17pxの有機的なレンズ面。スクロールした領域に水色が満ち、つまみの縁が静かに光る。
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
/* tideglass — proportion, surface, response. v4.3.0 */
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass{--sop-scroll-width:12px;--sop-handle-width:17px;--sop-scroll-accent:#9ac5d2;--rail-surface:linear-gradient(var(--rail-cross),#99c7d319,#b9d3e80a 70%,#c7dee525);--rail-edge:#b7d0d12b;--rail-wake:.6;}
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass > .sop-scroll-rail > .sop-scroll-track > .sop-scroll-fill{background:linear-gradient(var(--rail-along),#87acbd35,#94c5db9e);box-shadow:inset 1px 0 #ebffff35;}
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle{background:linear-gradient(var(--rail-cross),#e4f4fc9c,#9bbdcd77 24%,#52798d44 60%,#d5e9efa1);border-color:#e1f1f28a;border-radius:45% 55% 48% 52% / 15% 15% 16% 16%;box-shadow:inset 2px 0 3px #ecffff80,inset -1px 0 2px #ddeefa8a,0 2px 4px #0004;}
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::before{inset:3px;border:1px solid #c8e6f350;background:radial-gradient(ellipse at 30% 0,#edffff90,transparent 50%);}
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{inset:1px;opacity:0;background:linear-gradient(var(--rail-along),transparent 30%,#ffffff80 52%,transparent 70%);}
.sop-scroll-area.sop-scroll-sculpted.sop-tideglass[data-scrolling=true] > .sop-scroll-rail > .sop-scroll-thumb > .sop-scroll-handle::after{opacity:.75;}
```
