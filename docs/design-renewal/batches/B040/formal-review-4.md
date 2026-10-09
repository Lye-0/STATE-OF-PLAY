# B040 round-4 独立再検査

全10件 pass。R545／R553／R557の主形の不足は解消。既合格7件は不変hashで判断を継承した。

## R545 letterpress-layout-skeleton — pass

四辺の面取り枠と独立した本文カードを撤去。実題字32px、実図版、2pxの隙間で詰めた本文の組版塊へ変更し、図版と本文の同じ側に28pxの共通小口が連続する。狭幅は20px小口・28px題字を保持し、本文14pxと全文を確保。待機も同じ面の位置を使う。R531の左右記事割付、R401のL型台とは異なり、実内容の大きさと組版の密度が主形を作るためA合格。

近似比較：元R545, R531, R401, R505

## R551 archive-spine-timeline — pass

Tの細い背、四角い綴じ点、日時と読む紙の比率を保持。紙の下端の厚みと文字の整列が明瞭。全展開と狭幅でも履歴順を保つ。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R551, R109

## R552 railway-log-timeline — pass

Tの二本の軌道と枕木、三状態の丸い停車点を保持。実背景があり、日付と本文を結ぶ経路が全展開でも途切れない。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R552, R422, R382

## R553 folded-memory-timeline — pass

小さい日付札＋短い斜片を撤去。全幅142px以上の実日時面に大きい斜め自由端を設け、前の読む紙を42px重ね、44×84pxの返しが表裏をつなぐ。狭幅でも28px折端／32px重なりを保持。日時→折返し→本文の大きい面の順序が明瞭で、R555の控え橋、R222の三連の本文折面と読み位置・輪郭が異なる。LTR/RTL全展開で接続と自由端を確認しA合格。

近似比較：元R553, R555, R275, R222

## R554 stone-milestone-timeline — pass

各行の石キーを繰り返すのではなく、全履歴を貫く一つの割れ目と残る石橋で日時側／記録側を接続。狭幅では切断端の間の縦橋が両面へ接し、読む数字を覆わない。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R554, R394, R494, R174

## R555 ledger-event-timeline — pass

全高で連続する日時の控えと記録紙を、大きい切取り空隙に残した紙橋で接続。独立した二枚札や見開きではなく、全記録の共通控えという読み順が形を決める。狭幅の上下接続も保持。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R555, R084, R275, R391

## R556 margin-note-timeline — pass

Tの余白線、斜体日時、セリフ見出しと本文の静かな階層を維持。読字を邪魔する重い枠を増やさず、全展開でも十分な行間を確保。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R556, R415

## R557 console-log-timeline — pass

左日時列と右ログの二列表を廃止。実日時を各本文の直上へ移し、一つの連続床、40pxの全高側面、48pxの前端折面、実見出しの奥面へ再構成。外の開いた側と前端斜面が大きい断面を作り、個々の小ケースの反復ではない。狭幅も20px側面／44px前端へ縮めて同じ関係を保つ。R537の図版を持ち上げる首やR282の軸／個別顎とは異なる。文字とsummaryを動かさずA合格。

近似比較：元R557, R553, R282, R537

## R558 stitched-history-timeline — pass

大きい縦ループが前の記録から次の実孔へ到達し、短い前糸が重なる鎖の関係を確認。拡大したLTR／RTLの接点で孔背景、ループ端、手前糸が分離して見える。単なる離れたU列ではない。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R558, R378, R538, R157

## R559 open-plinth-timeline — pass

Tの開いた経路と紙の厚い下端を保ち、暗い展示背景の上でも日時、状態、本文が読める。余分な全周ケースを加えていない。 round-3から対象10ファイル不変を確認し、独立検査の合格を継承。

近似比較：元R559, R551

## 検証範囲

- 固定round-4の100 author hash一致、10 actual portable CSS一致。round-3との85ファイル同一、既合格7件の70ファイルは全て同一（captures/reviewer-hashes-4.json）。
- 変更R545/R553/R557を固定actual native exportで独立再操作。timeline2とskeleton1の全protocol成功、pageerrorなし。captures/reviewer-timelines-4/checks.json、reviewer-skeletons-4/checks.json。
- Timeline2：実click/Enter、実dateTime/link、制御受入／拒否、disabled、更新focus/current-nearest/link、reset、empty、destroy後無作用。長文320/390/768×LTR/RTL、summary44以上、字体とhover矩形固定、dark forced/reduced。
- 2件×1000/320×LTR/RTL×全閉／全展開16条件を撮影。normal motionでhover/leave/reenterを各2回実行し、日時・見出し・状態・summaryの全矩形／字体が固定。captures/reviewer-materials-4。
- Skeleton待機と実内容、長名・役割・長本文、320/390/768×LTR/RTL、input DOM/value/caret、loading inert/focus transfer-return/no steal、reset/dead cleanupを実検証。独立normal hover/leave/reenterの6幅方向とdestroy idempotenceはreviewer-geometry-4。
- 実像の通常・狭幅RTL・forcedを確認し、CSSの面と接点位置を照合。R545 28/20px共通小口、R553 42/32px重なり、R557 40/20px側面と48/44px前端。元baseline0、正式round-3指摘、既承認近似との構造差を再評価。
- 変更3件の主担当React actual4形式ログ（react-timelines-4.log、react-skeletons-4.log）全成功を補助確認。共有timeline/skeletonは本再設計で変更されず、round-3の独立検査を継承。B041 Wizardの変更は本評価の対象外。

## 限界

- 独立操作はChromiumの固定portable native。React4形式の全操作は主担当ログによる補助確認。
- 既合格7件は70ファイル同一性に基づきround-3の実操作・造形判断を継承し、全protocolを再実行していない。
- 別エンジン・スクリーンリーダーの実読み上げは未検証。素材評価は描画上の接触／前後関係である。
