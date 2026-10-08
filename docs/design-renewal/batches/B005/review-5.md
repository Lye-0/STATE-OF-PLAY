# B005 round 5 — changes_requested

9 pass / 1 adjust。通常造形は変更3件を含め全10件合格。全件のforced文字消失も解消した。残件はR084のforced時に未選択行へ✓が出る問題一件。

## 個別判定

- **R076 interleave-select — pass**: 紙の層・背・紙へまたがる綴じ輪が構造として読める。選択の銅色の綴じ線と確定印は情報を邪魔せず、輪が機能と結び付く。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R077 railcar-select — pass**: 暗い空隙を挟んで桟から下がる切欠き札が明快。候補を替えても穴・吊り線・札が残り、通常の行背景の色替えとは異なる。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R078 thumb-index-select — pass**: 左右の折り込み、候補下端のV字の口、クラフトの表裏が同じ小包の構造にまとまる。固定本文面と折り口の状態変化を分離している。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R079 split-ticket-select — pass**: 固定半径の非対称な凹みと露出した明るい断面、右外周の削りが石の厚みを示す。長文でも角が読む面へ入り込まず、R033の旧長文問題を再発していない。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R080 shelf-bay-select — pass**: 大きな索引列と右へ折れた耳の連続が候補を探す構造を作る。本文列と索引列の階層が明快で、左右交互の不安定な外形を解消。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R082 marginalia-select — pass**: 折った留め帯が背の縫い線をまたぎ、布の候補へつながる。紫色だけに頼らず、R055の輪やR047の取っ手と異なる留め方が読める。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R083 hex-bolster-select — pass**: 左上の固定六角支点と、右下の固定ガイドから斜めへ入る楔に再構成。面の切欠きと支点の重なり、選択時に楔だけが進む役割が見え、R048の左右C字金具との反復を解消。本文とhit領域は固定。

- **R084 twin-column-select — adjust**: 本文から切取り線で分かれた打刻半券、上下の切欠き、半券に収まる確定印が一体化した。通常造形のA不足は解消。残件はforced-colors時の非選択印の誤表示のみ。

  forced colorsで透明な文字色がCanvasTextへ置換され、非選択の確定印が可視になる。選択枠は正しいが、全候補に✓が並び状態の意味が矛盾する。

  根拠: captures/reviewer-5/twin-column-select-forced-short.pngでは下書きだけaria-selected=trueだが3行すべてに✓。-forced-last.pngでは公開済みへ確定変更後も非選択2行に✓。source/styles.cssのcheckはopacity:1;color:transparent、選択時のみ通常色。

  改善: 非選択のcheckをopacity:0またはvisibility:hiddenで非表示にし、aria-selected=trueで表示する。色の透明化だけに依存しない。forcedで初期選択と別行確定の両方を確認し、✓が常に一件だけになることを検証する。

- **R085 brass-ledger-select — pass**: 木の面板と下の木口、棚の暗い空隙、二つの支点を持つ取っ手が一貫する。金と水色の混在を解消し、確定印と取っ手の状態が対応する。 通常造形は合格基準として固定し、forced-colors不具合も解消。

- **R086 folding-caption-select — pass**: 37×29pxの角帽子が紙端の外4pxから9pxの唇で面へ回り込み、上面と側面が同じ保持体として読める。対角配置を維持し、R032の回転板を反復せず接合問題を解消。

## 実施検査

- round-5 sourceHashes100件一致。10件のsource/native CSSはimportを除き同一。固定portable nativeをChromiumで操作。
- 全10件Space/Enter展開、End確定、Home/Escape確定維持、focus復帰、trigger disabled、disabled optionスキップを再確認。
- 通常motionのhover→leave→reenterで行/本文矩形が固定。展開/hover/別候補確定後を撮影。R083の支点と楔、R084の半券、R086の外周保持を実寸と長文画像で再評価。
- 320px長文の日本語と空白なし英字を全候補へ注入。popupの横溢れなし。実際に長文を確定したclosed triggerもdocument幅320。RTLとreducedも全10件再確認。
- forcedの新規ページで全10件の短文を撮影、End/Enterで別行を確定して再展開。長文forcedも撮影。文字消失は全件解消、R084だけ非選択✓の誤表示を検出。contact-forced-short/last/forced.png参照。
- 旧contrast helperはR083のpseudo背景を見ず祖先の暗い背景を採用して6件のfalse positiveを出した。helper以外の操作assertは全件通過、pageerror0。R083は実画像で明るいpseudo面上に本文があることを確認。これはUI失敗ではなくcheckerの適用範囲外。
- round-4の730件監査と近似比較を引継ぎ、変更3件についてB003 R048、B002 R032、帳票系との違いを再判断。通常造形10件を合格基準として固定。

## 制限と再検査範囲

- Chromiumとmedia emulationでの検査。実機touch/他ブラウザ未実施。
- 全730件の再操作は行わず、round-4の監査・候補画像比較を引継ぎ。
- 9件は合格。再検査の必須対象はR084の非選択✓非表示と、その差分に伴う表示回帰。
