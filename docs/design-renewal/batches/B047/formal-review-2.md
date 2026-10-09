# B047 round2 独立検査

**changes_requested：3 pass / 2 adjust / 5 redesign。**

## R640 bookplate-tools-context — redesign

中央綴じの見開きは既承認の主形に近く、標準データでは右半分が全面空白になる。実分類の情報配置も意図を満たさない。

近似比較：R516, R220, R275

- **R640-open-spread-repeat（major / duplication）**：中央16pxの溝と左右の紙という大構図はR516/R220の見開きと近く、実メニューに載せ替えた差に留まる。標準データはseparatorが全列を占め、各batchが毎回左列から始まるため右半面が全空白。
- 改善方向：二列の並べ直しだけで終えず主形を再設計。一案は実subjectを全幅の横胴にし、実group数だけ深い切込みで分かれる幅広い読む枝を一体材として作る選別櫛。別カード＋別斜め橋を足すR631や、別紙を差すR375とは区別する。1群に偽の二面を作らず、separatorを含め実順序と読字を優先。
- 証拠：captures/reviewer-pose-2/bookplate-tools-context-2-open.png, snapshot/round-2/source/bookplate-tools-context/styles.css

## R641 index-pocket-context — pass

元Tの索引見出し帯と薄い積層を維持。行ごとの厚いカードを減らし、17px名称・14px説明と4px小口の密度が整理されている。原版の長所を崩さず、実メニュー・下位階層・狭幅を読む構成。

近似比較：原版R641, R255

## R642 blueprint-file-context — adjust

四周図面枠から、右へ寄せた実subject/headingと左へ張り出す読む紙へ変化した。主形は独立しているが、上面と側脚の接点が成立していない。

近似比較：R622, R582

- **R642-upper-support-gap（major / design）**：通常headingの実面左端はpanel基準80px、側脚は0〜32pxで間に48pxの空隙。下の折片は0〜80pxだが上辺がheading下端にあり、上面へは右上の角一点しか届かない。上面→側脚→下紙という説明の最初の接合がない。
- 改善方向：上のsubject/headingへ実面積で入る横肩を作るか、片持ち材の断面自体を連続させる。下紙側の横材は保持し、LTR/RTL・狭幅でも上面/脚にそれぞれ数px以上の重なりを実画像で確認。
- 証拠：captures/reviewer-pose-2/blueprint-file-context-2-open.png, captures/reviewer-material-2/blueprint-file-context-root-ltr320.png, snapshot/round-2/source/blueprint-file-context/styles.css

## R643 ribbon-file-context — pass

元Tの丸い見出し帯を保持し、選択・縦線・分類線の重複強調を整理。24pxの曲率と4pxの返端を保ち、通常項目は平らな読む面に戻っている。既存形の精度改善として合格。

近似比較：原版R643, R283

## R644 ceramic-file-context — pass

一続きの丸い片側壁から、実分類ごとに棚の床と短い右小口を出す構成。行ごとの丸角タイルではなく実groupを受ける連続した陶の側壁が主形を担う。真の棚間空隙と不透明な分類・disabled読字面を確認。

近似比較：R504, R632, R215

## R645 receipt-file-context — redesign

幅広カプセル状の巻軸と下の切断紙は、直前の却下構図に近い。実Backを巻端へ置く変更だけでは独立したA主形が不足。

近似比較：R625 round5却下, R371, R138

- **R645-capsule-roll-repeat（major / duplication）**：112px巻軸とされる主要面は丸いカプセルで、その下に一枚の切断紙を引く構図。R625旧版の丸入力＋紙という却下案、R371の巻軸に近く、実Back位置の変更だけでは新しい主形にならない。
- 改善方向：巻軸/カプセルを廃し、現在の一枚の票と実親名＋Backの大きな切離し片を、24px程度の真空隙と幅広い一本の残し紙で結ぶ案。階層0には架空の親片を置かず、下位でのみ実Backがその接合を担う。R361等の行ごとのチケット反復にせず、パネル全体の現在票と実親への戻りが外形を決める。
- 証拠：captures/reviewer-pose-2/receipt-file-context-2-open.png, captures/reviewer-material-2/receipt-file-context-root-ltr320.png

## R651 chapter-spine-navigation — redesign

一本の左背と三つの矩形紙、行先の小矩形カードという構図に留まる。ブランド・行先・現在地を一冊に見立てるだけでは既承認の背付き紙から十分離れていない。狭幅の実行先も読みにくい。

近似比較：R255, R360, 旧R431

- **R651-spine-rectangles-repeat（major / duplication）**：64pxの背にbrand/list/currentの矩形三枚と16pxの下小口を付け、行先をさらに普通の小矩形へ分割。R255/R360などの背＋紙群からの主形差が弱く、ブランドと実現在地が造形の固有性を作っていない。
- 改善方向：左柱＋三矩形を廃止。一案はブランドを読む大きな横向きの開いた製本小口と、一枚の索引本文、その下端が実現在地の幅広い小口へ入る非対称な一冊の断面へ。個別行先カードを廃し、実group展開も同じ意味の面へ接続する。単なる綴具や層追加では不足。
- 証拠：captures/reviewer-pose-2/chapter-spine-navigation-2-initial.png, captures/reviewer-pose-2/chapter-spine-navigation-2-mobile.png

- **R651-sidebar-reading-width（major / ui）**：sidebar/320px、実component222pxで実行先名の本文幅が34px。17pxの日本語が2字ずつ縦に続く。長いbadgeとiconを同じ行に残す配分が原因で、9件の表示が極端に縦長になる。
- 改善方向：狭いcomponentでは名称・説明を全幅の上段、badge/付随操作を別段へ。native44pxと実全文を保ち、TextNode Rangeの幅と実画像を両方確認する。小字化やellipsisで隠さない。
- 証拠：captures/reviewer-nav-extra-2/checks.json, captures/reviewer-nav-extra-2/chapter-spine-navigation-sidebar-ltr320.png

## R652 station-board-navigation — adjust

実行先を共通の桁から吊る案内板とし、現在地の琥珀小口で意味を分ける主形は成立。ただしwrapとモバイルでは途中から支持が途切れ、吊り棒だけが浮く。

近似比較：R294, R322, R422

- **R652-hangers-not-attached-after-wrap（major / design）**：共通12px桁は最上段のみにある。通常wrap後の「もっと見る」とmobile2行目以降は44px吊り棒が空中で終わり、桁に繋がらない。実行数/長文で増える後続面の支持を説明できていない。
- 改善方向：実行ごとに桁を通すか、一つの連続側支持から各実板へ肩を伸ばす。行数固定の装飾ではなくnatural wrap/縦列/展開した実子項目の全てに接合が続く構造にする。
- 証拠：captures/reviewer-pose-2/station-board-navigation-2-initial.png, captures/reviewer-pose-2/station-board-navigation-2-mobile.png, snapshot/round-2/source/station-board-navigation/styles.css

## R653 folded-index-navigation — redesign

上下の大きい返しを持つ一枚Z断面にNavを載せた構図で、既承認の主形反復が強い。狭幅sidebarでは実名称幅と外形overflowも不十分。

近似比較：R403, R222, R523

- **R653-z-return-repeat（major / duplication）**：上下の斜め返し・中央の読む一枚紙・左右開放という主要構図がR403/R222と同じ系統。ブランド/行先/現在地を各既存面へ載せ替えた差であり、色や大きさ以外の独自性が不足。
- 改善方向：上下の常設飾り返しを廃し、実group disclosureと子行先がある部分だけが大きい折り込みを開く構造を検討。直接リンクとブランドは一つの主面、実展開だけが別面へ接合し、mobile detailsでも同じ意味を保つ。通常リンクを偽の折片へ量産しない。
- 証拠：captures/reviewer-pose-2/folded-index-navigation-2-initial.png, captures/reviewer-pose-2/folded-index-navigation-2-mobile.png

- **R653-sidebar-reading-width（major / ui）**：sidebar/320px、実component222pxで実行先名の本文幅が42px。17pxの日本語が2字ずつ縦に続く。長いbadgeとiconを同じ行に残す配分が原因で、9件の表示が極端に縦長になる。
- 改善方向：狭いcomponentでは名称・説明を全幅の上段、badge/付随操作を別段へ。native44pxと実全文を保ち、TextNode Rangeの幅と実画像を両方確認する。小字化やellipsisで隠さない。
- 証拠：captures/reviewer-nav-extra-2/checks.json, captures/reviewer-nav-extra-2/folded-index-navigation-sidebar-ltr320.png

- **R653-sidebar-overflow（major / ui）**：sidebarの320/390px×LTR/RTLでroot.scrollWidthがclientWidthより40px大きい。R653は222→262、R654は222→230。native全protocolもこの条件で停止。
- 改善方向：独立した外形・返端・側面をcomponent内に予約し、狭幅/sidebar用の余白と擬似面寸法を一致させる。読む面を狭めず、改造後の全幅・LTR/RTLを再確認。
- 証拠：captures/reviewer-nav-extra-2/checks.json, snapshot/round-2/source/folded-index-navigation/styles.css

## R654 stone-terrace-navigation — redesign

三つの離れた面取り板と、さらに面取りした個別リンクの反復。石段を支える一体の地形や固有の機構が読めず、汎用カードを素材色へ置換した範囲に留まる。狭幅読字と外形も調整が必要。

近似比較：R394, R614, R534

- **R654-disconnected-bevel-panels（major / design）**：brand/list/currentは空隙で分離した三つの面取り板。各行先にも同じ小口を反復し、全体は独立したカード群に見える。実石段としての連続支持とA固有の輪郭が不足。
- 改善方向：小リンクごとの面取りを全廃し、ブランドから行先床、現在地の低い前端まで一つの採掘面を連続させる案。一本の大きい斜め断層と実groupの開口で全体を作り、R394の均等な番号階段やR614の梁＋首＋床を再利用しない。
- 証拠：captures/reviewer-pose-2/stone-terrace-navigation-2-initial.png, captures/reviewer-pose-2/stone-terrace-navigation-2-mobile.png

- **R654-sidebar-reading-width（major / ui）**：sidebar/320px、実component222pxで実行先名の本文幅が42px。17pxの日本語が2字ずつ縦に続く。長いbadgeとiconを同じ行に残す配分が原因で、9件の表示が極端に縦長になる。
- 改善方向：狭いcomponentでは名称・説明を全幅の上段、badge/付随操作を別段へ。native44pxと実全文を保ち、TextNode Rangeの幅と実画像を両方確認する。小字化やellipsisで隠さない。
- 証拠：captures/reviewer-nav-extra-2/checks.json, captures/reviewer-nav-extra-2/stone-terrace-navigation-sidebar-ltr320.png

- **R654-sidebar-overflow（major / ui）**：sidebarの320/390px×LTR/RTLでroot.scrollWidthがclientWidthより8px大きい。R653は222→262、R654は222→230。native全protocolもこの条件で停止。
- 改善方向：独立した外形・返端・側面をcomponent内に予約し、狭幅/sidebar用の余白と擬似面寸法を一致させる。読む面を狭めず、改造後の全幅・LTR/RTLを再確認。
- 証拠：captures/reviewer-nav-extra-2/checks.json, snapshot/round-2/source/stone-terrace-navigation/styles.css

## 実施確認

- 著者100hash・portable CSS10一致。captures/reviewer-hashes-2.json。
- 元immutable0と固定2の全10初期、Context展開／Nav実mobileを独立Chromiumで撮影比較。captures/reviewer-pose-2。既承認近似は各partへ記録。
- 固定2 Context6件のnative全protocolを独立実行し全PASS。keyboard/実checkbox/radio/submenu/controlled/disabled/labels/path/focus/dead reset/empty/error/long320390768LTRRTL/forced/reduced/cleanup。captures/reviewer-contexts-2/checks.json。
- Context6件追加：実右クリック・outside no-steal・normal hover→leave→reentryで字面/相対矩形固定・toggle焦点・dark/light forced。captures/reviewer-extra-2/checks.json。
- Context R4件×320/768×LTR/RTLで実named/anonymous groupとsubject、親→子、背後の強い文字に対する読字面を実確認。captures/reviewer-material-2。
- Nav R651/R652はnative全protocolを独立完走。live brand/href/labels、owned focus、compatible flyout、disabled summary/child、controlled active/open、modal焦点、実href、dead API、4layouts長文320390768LTRRTL、forced/reduced。R653/R654はAPI検査後のsidebar overflowで停止し全PASSとは扱わない。
- Nav4件の別helperでnormal hover解除/再進入の文字固定、sidebar全6幅方向の実本文Range/overflow、dark/light forcedを追加記録。captures/reviewer-nav-extra-2/checks.json。
- R652でcontrolled true Escape拒否→uncontrolled Escape直後のstateがtrueという一度の即時assert失敗。単独再実行は全PASS、診断再実行は即時false/2RAF後false。native cancel配送時刻の疑義を主担当へ共有し、確定runtime欠陥とは区別した。review-b047-escape.mjs。

## 限界

- Nav R653/R654の全protocolは実overflowで中断。その後の全cleanupを含むsuite完走は未確認。別helperのlong/forced実像は確認済み。
- React4形式・共有全20の恒久suiteはこの独立検査では再実行していない。主担当のログと独立nativeを混同しない。
- 改善案は方向を具体化するための候補であり、名称や寸法通りに実装しただけで合格とはしない。再設計後の実像、意味、近似、読む面を再評価する。
