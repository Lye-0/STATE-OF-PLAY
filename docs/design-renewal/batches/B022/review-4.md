# B022 round-4 独立レビュー

全10件 pass。R312固定ヒンジの接合と横幅超過、R314蛇腹反復の指摘を解消。既合格8件の通常造形は不変のため引き継ぐ。

## R302 status-rail-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。14px三面レール、軸を抱くI形台車、読む板の重なりが実像で繋がる。上下の足とレール露出が単なる左線を支持へ変える。R277の二本腕やR282の照合梁とは、状態記号を載せる一台車と読む板の関係が異なる。本文とnative操作は固定される。

比較: R255, R277, R282

## R303 stitched-note-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。対角の丸みを持つ二枚の布を大きくずらし、縫い代と露出する織り地を別の面にした。R278の一枚のくびれた織り地を背景にする構造とは、二布のずれと対角輪郭が異なる。細い縫線だけの旧版から主輪郭・素材の重なりが独立した。

比較: R278

## R304 stepped-message-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。見出し・説明・実actionが同じ方向へ12pxずつ進む三段の実面を使う。内容高さに追随し、情報階層が段差を決める。R297の出力面と前台という二面とは、各情報の独立段と一方向の進行が異なる。狭幅長文も各面内へ収まる。

比較: R297, R222

## R305 receipt-tail-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。元監査T。下の紙端を24px周期の小さい抜きへ整理し、発行口の二重線と見出し/本文/操作の余白が揃った。レシートの既存形を保持する精度調整として合格。

比較: R252, R295

## R306 plain-status-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。元B/T。中立色・小さい角丸の汎用通知を維持し、影を抑えて読字と実actionの密度を整理した。Bとして明瞭で、Aの独自形を合格理由にしていない。

比較: R306

## R310 warm-confirm-notice — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。元B/T。暖色と元の穏やかな角丸を保持し、重かった影を抑えた。長文・RTLでも内容と操作の優先順位が保たれ、Bとして合格。

比較: R310

## R311 annotation-leaf-hint — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。全幅の中空の巻口とそこから続く読む紙が主輪郭を決める。楕円の孔は実際に背景を見せ、巻口と本文の予約領域が分離される。R138の閉じた円筒背、R291の縦の巻胴と帯とは、開いた巻口の内側と下へ続く一枚の注釈紙という関係が異なる。長文は紙の内側だけでスクロールし支持が残る。

比較: R138, R291

## R312 inspection-window-hint — pass

三つの36×10pxヒンジをスクロール見出しから固定の蓋の面へ移し、点検口へ12px重なる接合が実際に見えるようになった。初期/長文の本文上端・下端/LTR・RTLで三接点が固定され、本文に侵入しない。320pxのcontent clientWidth/scrollWidthは170/170、390/768pxは162/162となり、前回35pxの横超過も解消。曲面点検口と開いた蓋の通常造形を接合の修正で成立させている。

比較: R224, R312

## R313 folded-tag-hint — pass

round-2から正本10ファイルのハッシュ不変。通常造形合格を引き継ぐ。左右の斜め肩が全輪郭を決め、20pxの実円孔へ30×48pxの留め輪が通る。背景色の診断でも孔が紙で埋まっていない。小折線のカードから大きい吊札へ再構成され、R253の各行の小留め輪やR294のレール吊札とは全体の大きいタグと孔が異なる。

比較: R253, R294

## R314 field-guide-hint — pass

交互三面と全幅の蛇腹を撤去し、一枚の固定案内板から36/28/24pxの索引片を突き出す構成へ変わった。上片は見出しの意味記号、下の二片は実際の品質/設定の項目名を受け、主読面の値と同じ行に接続する。単なる無内容な小飾りの追加ではなく、項目名と値の役割が板の外形を作る。R222の連続折紙との反復を解消し、R259の番号タブ付きファイルとも複数の実項目を外周へ配置する関係が異なる。長文では板は残り、索引は対応する項目と一緒にスクロールする。RTLでも文字を鏡映せず、forcedでも項目名・値・native設定・適用が読める。

比較: R222, R275, R304

## 今回の検証範囲

- canonical100ハッシュ一致、portable配布CSS10一致（import除外）。変更はR312/R314のみ、既合格8件80ファイルはround-2と不変。captures/reviewer-extra-4/checks.json。
- 独立native通知6件の実notify/roles/action/close/queue/timer hover-focus pause/長文320390768/RTL/fixed text/forced/reduced/destroy回帰成功。captures/reviewer-toasts-4/checks.json、pageerror 0。
- 独立native hints4件の実checkbox、Escape/trigger復帰/値保持、実action、outside、disabled、動的説明、任意form input/FormData、局所scroll、320390768、RTL、forcedチェック、reduced、tooltipのEscape抑止→leave/reenter、destroy成功。captures/reviewer-hints-4/checks.json、pageerror 0。
- R312のcontent幅は全3viewportでscrollWidth==clientWidth。ヒンジは初期・長文上下・LTR/RTLで固定面に接続。captures/reviewer-materials-4/inspection-window-hint-*。
- R314の通常短文・320長文・RTL・強制色の下端まで実画像確認。品質/設定ラベルと各値の対応、実checkbox/適用、文字が反転しないことを確認。captures/reviewer-materials-4/field-guide-hint-rtl-bottom.png / -forced-bottom.png。
- 全4 hints追加実input.click→外のbutton.focusで閉じる→再表示→open destroyを確認。normal motionの固定本文/hover leave reenterは今回hint helperと前回の不変通知ソース検証を併用。
- 通常造形の独立比較は変更2件に限定。元監査と既承認R222/R259/R275などに対し、支持接点と項目の機能・外形を比較した。正本/固定snapshot変更なし。

## 限界

- Chromiumのみ。forced/reducedはエミュレーション。React配布形式と全foundations browser suiteは今回独立再実行していない。
- 対象4 hintsの固定portable実装でshared focus修正の回帰を確認した。別resonance familyや全730 runtimeへの網羅的な検査ではない。
- 既合格8件の通常造形はハッシュ不変により引き継ぐ。全730件の再撮影・再監査は行っていない。
