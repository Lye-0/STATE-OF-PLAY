# B022 round-2 独立レビュー

8 pass / 1 adjust (R312) / 1 redesign (R314)。既合格8件の通常造形は固定基準とする。

## R302 status-rail-notice — pass

14px三面レール、軸を抱くI形台車、読む板の重なりが実像で繋がる。上下の足とレール露出が単なる左線を支持へ変える。R277の二本腕やR282の照合梁とは、状態記号を載せる一台車と読む板の関係が異なる。本文とnative操作は固定される。

比較: R255, R277, R282

## R303 stitched-note-notice — pass

対角の丸みを持つ二枚の布を大きくずらし、縫い代と露出する織り地を別の面にした。R278の一枚のくびれた織り地を背景にする構造とは、二布のずれと対角輪郭が異なる。細い縫線だけの旧版から主輪郭・素材の重なりが独立した。

比較: R278

## R304 stepped-message-notice — pass

見出し・説明・実actionが同じ方向へ12pxずつ進む三段の実面を使う。内容高さに追随し、情報階層が段差を決める。R297の出力面と前台という二面とは、各情報の独立段と一方向の進行が異なる。狭幅長文も各面内へ収まる。

比較: R297, R222

## R305 receipt-tail-notice — pass

元監査T。下の紙端を24px周期の小さい抜きへ整理し、発行口の二重線と見出し/本文/操作の余白が揃った。レシートの既存形を保持する精度調整として合格。

比較: R252, R295

## R306 plain-status-notice — pass

元B/T。中立色・小さい角丸の汎用通知を維持し、影を抑えて読字と実actionの密度を整理した。Bとして明瞭で、Aの独自形を合格理由にしていない。

比較: R306

## R310 warm-confirm-notice — pass

元B/T。暖色と元の穏やかな角丸を保持し、重かった影を抑えた。長文・RTLでも内容と操作の優先順位が保たれ、Bとして合格。

比較: R310

## R311 annotation-leaf-hint — pass

全幅の中空の巻口とそこから続く読む紙が主輪郭を決める。楕円の孔は実際に背景を見せ、巻口と本文の予約領域が分離される。R138の閉じた円筒背、R291の縦の巻胴と帯とは、開いた巻口の内側と下へ続く一枚の注釈紙という関係が異なる。長文は紙の内側だけでスクロールし支持が残る。

比較: R138, R291

## R312 inspection-window-hint — adjust

曲面の点検口と右へ開いた蓋の大きい外形は、普通の矩形枠から進んだ。ただし三ヒンジが本文scrollerの横clip外に置かれ、初期から実物に見えず、固定蓋と読面を接続しない。長文でもこの不整合が残る。支持を固定面へ戻す修正が必要。

比較: R224, R312

- **B022-R312-clipped-hinges (major/consistency)**
  - 根拠: captures/reviewer-materials-2/inspection-window-hint-initial.png / -ltr-bottom.png / -rtl-bottom.png。logs/reviewer-hints-r2.log:320px content clientWidth170/scrollWidth205、390/768px162/197。heading::after inset-inline-end:-35px、幅22px。
  - 問題: 三ヒンジをoverflow-x:hiddenの本文scroller内の見出しへ置いたため、初期から全てclipされる。横の描画幅だけ35px増え、固定の蓋には接続しない。長文scrollで見出しが動く点も固定支持と不整合。
  - 改善: 三ヒンジをスクロールしないpanel基準の面へ移す。点検口右端から開いた蓋の根元へ実際にまたがる位置とし、上下/中央の接点をpanel全高で決める。LTR/RTL、320px、本文上端/下端で同じ接合を確認し、content scrollWidth==clientWidthも回復する。

## R313 folded-tag-hint — pass

左右の斜め肩が全輪郭を決め、20pxの実円孔へ30×48pxの留め輪が通る。背景色の診断でも孔が紙で埋まっていない。小折線のカードから大きい吊札へ再構成され、R253の各行の小留め輪やR294のレール吊札とは全体の大きいタグと孔が異なる。

比較: R253, R294

## R314 field-guide-hint — redesign

本文を三面へ分けて交互に16pxずらし、18px全幅折返しで繋ぐ形は成立する。しかしR222で承認した交互三面・二つの全幅斜め返し・最後の操作面という構造をほぼそのまま反復する。R275との差だけでは既承認全体に対する独立性を満たせず、A再設計が必要。

比較: R222, R275, R304

- **B022-R314-concertina-repetition (major/duplication)**
  - 根拠: captures/reviewer-materials-2/field-guide-hint-initial.png と B016/captures/reviewer-dialogs-5/canvas-pocket-dialog-initial.png (R222 Folded Plan Dialog)。
  - 問題: 交互に左右へずらす三つの紙面、二つの全幅斜め折返し、最後に操作を置く情報順がR222と一致する。色・16/18pxという寸法・カテゴリーの差だけで、構造上別案になっていない。
  - 改善: 交互蛇腹を撤去し、例えば一つの案内板から用途別の三つの索引片を異なる長さで段違いに突出させ、本文と設定は一つの固定読面へ整理する。索引片は飾りでなく各案内項目の見出しを受ける実領域にし、既存の番号タブ付きファイルや三枚紙の積層も反復しない。

## 実施検査

- immutable round-2 canonical100ハッシュ一致、正本コピーとportable配布CSS10一致（import除外）。captures/reviewer-extra-2/checks.json。
- 独立native通知6件：実notify、tone/role、action/close、queue、hover/focus timer pause、長文320/390/768、RTL、fixed text、forced/reduced、destroy。captures/reviewer-toasts-2/checks.json。
- 独立native hints4件：実pointer checkbox、Escapeで閉じてtriggerへfocus復帰、再表示で値保持、実action、outside click、show/hide、disabled、dynamic content、任意form inputの値/FormData保持、local vertical scroll、320/390/768、RTL、forced checkbox、reduced、tooltip role/aria-describedby、destroy。captures/reviewer-hints-2/checks.json。R312横幅超過は既知の失敗として指摘し、機械検査のPASS表示だけで合格にしていない。
- tooltipのEscape後はdismiss状態を保持する実仕様を確認し、最初の再進入で閉じたまま、leave後の再進入で開くことを実mouse moveで検証。初期helperの即時hover成功という誤った前提を修正した。
- 追加で全4 hints trusted input.click、外部button.focusで閉じる、開いたままdestroy後のcleanupを独立確認。captures/reviewer-materials-2/checks.json。shared feedbackのrelatedTarget判定/遅延0/null cleanupの該当コードも確認。
- normal motionのhover/leave/reenterで通知6件とhint見出しの本体相対矩形・font固定を確認。captures/reviewer-toast-motion-2/checks.json / reviewer-hints-2。
- R311巻口/R313タグ孔は検査DOMの背景をマゼンタへ変更し全レイヤーの空隙を確認。R312は初期と本文上下scroll/RTLを追加撮影。正本・固定版は変更していない。
- 元監査のR/T/B区分を照合し、既承認R138/222/253/277/278/282/291/294/297等の支持構造と比較。

## 限界

- Chromiumのみ、forced/reducedはエミュレーション。React4配布形式/全foundations browser suiteは主担当側の検証であり今回独立再実行していない。
- 共有focus修正は実配布の対象4 hintsで確認した。別resonance familyや全730部品のruntime回帰を今回網羅していない。
- 全730件は元監査と近似候補を参照し、今回全件を再撮影・再監査していない。
