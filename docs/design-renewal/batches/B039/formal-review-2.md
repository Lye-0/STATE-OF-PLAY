# B039 round-2 独立検査

changes_requested：5 pass、R538/R543 adjust、R535/R537/R540 redesign。全10のnative操作成功とAの造形判断を区別。

## R535 archive-file-skeleton — redesign

索引・原資料・説明の情報順は原版より明瞭だが、Aの主形が既承認の下ポケット構図を反復している。操作と読字は成立。

近似比較：元R535、R197、R263、R222旧下ポケット案

**R535-lower-pocket-repetition / major**

上に紙を露出させ、下の前ポケットに入れ、前面へ読む内容を載せる主構造がR197等と重なる。中央の切欠きと三つの索引を足しても、材料の保持と主要輪郭は同じ下ポケットである。名称をアーカイブへ替えた差だけではAに足りない。

改善：下ポケットを廃し、収納と情報配置を別の主構造へ変える。一案は図版紙を載せる浅い半箱と人物・本文の半箱を、幅36px程度の露出した布ヒンジで接続する開いた保存箱。三資料は端から出る実仕切り索引へ。箱端面はヒンジで途切れ、紙の見開きや細い吊り棒の反復を避ける。狭幅は二半箱を上下へし、同じヒンジを横へ移す。

根拠：captures/reviewer-skeletons-2/archive-file-skeleton-loaded.png、captures/reviewer-skeletons-2/archive-file-skeleton-loaded-ltr-320.png

## R536 photo-caption-skeleton — pass

Tの写真→人物→本文→資料という順序を保持。212pxの主画像、22px余白、資料の上下線が情報階層を作り、待機と実内容が同じ領域へ対応する。14px本文と16px人物を維持し、狭幅の本文約170pxを確保。通常の記事カードを新規Aとして評価せず、元の写真・キャプション比率の精度として合格。

近似比較：元R536、R531

## R537 control-console-skeleton — redesign

native本文の読みと待機／読込の対応は成立。しかし制御台の主形は全周の面取り箱に留まり、Aの独立した構造に達していない。

近似比較：元R537、R297、R397、R214

**R537-framed-box-not-console-support / major**

大きい全周borderと右下の切角の内側に、画像・人物／本文・三資料を並べている。下32pxの帯は他の三辺と同じ囲いの一部で、別の深さの台が実内容を支える形には見えない。青い箱の面取り追加で元監査の不足を解消したとは判断できない。

改善：全周枠を廃し、立つ実図版と別の広いログ台を大きい湾曲首でつなぐ等、実内容の支持を主形にする。例：幅48〜64pxの首を図版下から露出させ、読む台へ12px以上差し込む。首の両側は真空隙とし、本文・三資料は台の平面／前面へ。R297の直結する二面とは異なる離れた表示面の支持を作り、架空のノブを足さない。

根拠：captures/reviewer-skeletons-2/control-console-skeleton-loaded.png、snapshot/round-2/source/control-console-skeleton/styles.css

## R538 stitched-page-skeleton — adjust

実人物面と本文面の間に24pxの背景を開け、各面の真孔を44px周期の糸で結ぶ主構造はAとして成立。狭幅も水平の縫い目に切り替え、実読む面を確保。R378の週片を一筆で綴じる機構とは、二枚の布を横糸で接合する構成が異なる。ただし広幅RTLの孔位置は不整合。

近似比較：元R538、R378、R333、R431

**R538-rtl-holes-outside-thread / major**

広幅RTLでは人物面が右、本文面が左へ入れ替わり、糸は中央の24px空隙に残る。一方maskの孔は人物面の物理右端／本文面の物理左端に固定され、両外側へ離れる。実糸が孔を通らず、説明と前後関係が崩れる。

改善：広幅RTLでは人物の孔を左6px、本文の孔を右6pxへ移し、糸の論理位置と一致させる。44px周期／top26pxの位相は維持し、狭幅の水平綴じも通常・長文で再確認する。

根拠：captures/reviewer-skeletons-2/stitched-page-skeleton-loaded-rtl-768.png、captures/reviewer-contacts-2/checks.json

## R539 open-grid-skeleton — pass

Tの左右情報列を保持し、左3pxと内部1pxの線の強弱を整理。狭幅では全幅の読み順へ戻り、native本文が細列に閉じ込められない。R541と近い編集格子の語彙だが、元監査Tとして情報列の秩序を磨く範囲の合格。

近似比較：元R539、R541

## R540 book-jacket-skeleton — redesign

画像と人物を表紙、三資料を帯、本文を内頁へ分けた情報配分は確認。しかし大きい切角付き枠と離れた本文カードという二つの箱に留まり、ジャケットの巻返しが実際につながっていない。

近似比較：元R540、R533、R403、R516、R181

**R540-separate-framed-cover-and-page / major**

上は全周面取りの切角表紙、中央は上下borderの帯、下はmargin-top24pxで完全に離れた紙。資料帯の折返しは表紙と内頁の間をつなぐという説明に反し、内頁へ届かない。単なる隙間の削除だけでは普通の書籍紹介枠の不足も残る。

改善：表紙の全周囲いを廃し、実図版と人物を持つ一枚のジャケットの長い巻返しを、本文紙の背面へ通して反対の小口へ露出させる等、隠れる区間と戻る区間を主構造にする。三資料を載せる幅広い巻返し面、二つの実開口、本文紙との前後・接点を明確にし、R533の狭い横フラップ／R403の単純Z折／R516の見開きを反復しない。本文は広い固定平面で読み、24pxの断絶をなくす。

根拠：captures/reviewer-skeletons-2/book-jacket-skeleton-loaded.png、captures/reviewer-skeletons-2/book-jacket-skeleton-loaded-rtl-320.png、snapshot/round-2/source/book-jacket-skeleton/styles.css

## R541 list-column-skeleton — pass

Tの人物と本文を縦罫で分ける構成を保持。上画像を184pxへ、下資料を軽い下線と16px間隔へ改め、画像と本文の量の釣合いを改善。狭幅で二列を解除し14px本文・長い名前を全幅に近い領域で読む。R539とは近いが元の構成を保持するT精度基準で合格。

近似比較：元R541、R539

## R542 window-grid-skeleton — pass

Tの左資料列と右画像を64px／192pxの格子に整理。上の人物と下本文を全幅にし、資料の面も44px以上を確保。元の小さい孤立点・ボタンの散らばりを抑え、待機と実内容の対応が明瞭。

近似比較：元R542、R532

## R543 ribbon-heading-skeleton — adjust

実人物面を大きい布帯、左右の不等長の自由端へ変え、元の単なる見出し色面から主形を作った。R283の小さい候補リボンとは、図版前の大きい人物帯と長い自由端で区別できる。ただし画像への重なりと長文時の端位置が説明通りになっていない。

近似比較：元R543、R283、R483

**R543-banner-does-not-overlap-image / major**

図版margin-top:-24pxはgrid gap24pxを相殺するだけで、全測定条件の帯と図版の重なりは0px。さらに自由端top20px固定のため、320px長文で帯高291.875pxになっても右端は122pxのままで、画像へ返らず帯の途中に留まる。

改善：図版が帯の背面へ実24px入る配置にし、自由端の位置を帯の下端基準へ変更する。長文で帯が伸びても左右の86/122px端が実図版へ続くよう、通常・長文・LTR/RTLで重なりと端位置を再測定する。

根拠：captures/reviewer-contacts-2/checks.json、captures/reviewer-contacts-2/ribbon-heading-skeleton-320-ltr-true.png、snapshot/round-2/source/ribbon-heading-skeleton/styles.css

## R544 ceramic-card-skeleton — pass

Tの大きい円形図版と人物の二列を保持し、上6px／下10pxの面と一隅42pxを整理。狭幅は160px円と全幅人物へ切り替え、待機中の小点の散らばりをなくした。円窓をもつ標本面という元の長所と14px本文の読みを保つ。

近似比較：元R544、R480

## 実施確認

- 固定正本100 SHA-256・配布CSS10一致。配布internal/signature/skeleton.js全10はB038最終7の同runtimeとbyte同一。captures/reviewer-hashes-2.json。
- 独立Chromium実portable native10：待機／実内容、同一native input DOM・値・caret、loadingでrootへfocus退避・slot inert/hidden・ARIA busy、同入力へ復帰、外部focusを奪わない、rows2/8、escaped status、paused、破棄後reset/update/pause不作動。reviewer-skeletons-2/checks.json:10成功/errors0。
- 全10×320/390/768×LTR/RTL×待機／読込=120長文条件を操作・撮影。forced dark/reducedも全10。本文14px・実追加native inputの読字と表示範囲を確認。
- 別独立geometry scriptで全10×6条件=60の名前／本文幅、normal hover/leave文字のroot基準矩形・font不変、destroy二度とtabindex清掃を確認。reviewer-geometry-2。
- R538/R540/R543は320/768×LTR/RTL×短文／長文=24条件の接点・mask・重なりを追加測定・撮影。reviewer-contacts-2。R543帯／画像の実重なりは0px。
- 元730 baseline判定・元実読込画像と既承認の下ポケット／綴じ／console／book／ribbon形を比較。機能成功をA独創性の代替にしていない。
- 主担当React skeleton10×TSX/JSX original/portable四形式成功ログを補助参照。共有B038の恒久22回帰結果はruntime不変のため継承。

## 限界

- 独立実ブラウザはChromium。Firefox/Safari未確認。
- React四形式と恒久共有回帰は主担当のログ参照で、独立再実行ではない。
- R535/R537/R540の改善案は方向の提案であり、未実装案の合格を保証するものではない。
