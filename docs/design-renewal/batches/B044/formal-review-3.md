# B044 round 3 独立レビュー

**changes_requested — 5 pass / 1 adjust / 4 redesign。** 固定native実装の基本操作は10件通過。造形の不足と接合の不成立を修正対象とする。

## R600 folio-tab-search — adjust

選択索引と一枚の読む紙、開いた背の構図は採用可能。ただし紙を支えるという足の接合が実像で成立しない。

問題: 通常幅で紙の開始は52px、足は紙から−40px/幅24pxなので全体x12〜36で終わり、16pxの空隙を渡らない。狭幅も12px不足。背内の白い短線に見え、説明の綴じ足になっていない。

改善方向: 通常は紙基準−28px/幅40pxで背と紙に各12px、狭幅は−20px/幅28pxで各8px重ねる。文字と索引の位置は維持する。

証拠: captures/reviewer-search-3/folio-tab-search-initial.png, snapshot/round-3/source/folio-tab-search/styles.css

近似比較: R600 original, R163, R431。

## R601 caption-line-search — pass

Tの細い通し軸を保ち、実検索名・候補名・補足の階層と右側フィルターを整理した。元の精度改善として合格。

近似比較: R601 original, R596, R599。

## R602 console-query-search — pass

実検索・フィルター面が片側の曲がった支持脚へ連続し、空隙を渡る腕が一枚の明るい読む面を保持する。曲がる下端と実操作面の配置が全体を決める。

近似比較: R602 original, R597, R297, R537。

## R603 ribbon-index-search — pass

実見出しを読む広い布面と割尾、検索紙の後ろへ戻る折面、下の候補紙へ続く帯が一続きに読める。長文RTLでも接続と本文を分離できている。

近似比較: R603 original, R283, R583, R593。

## R604 ceramic-query-search — redesign

青い大きな非対称角丸容器の内側に検索と候補を配置した状態。小さい楕円と二重縁は材質の補助に留まり、Aの固有形を作っていない。

問題: 通常実像の大部分が一枚の青い角丸枠で、検索口と候補の読む面が形を分担していない。角の半径と縁を変えても普通の容器カードから離れない。

改善方向: 四辺の器枠を撤去。実検索を載せる高さ80〜96pxの陶の口から、片側の24〜32px幅の連続曲面を下の浅い候補皿へ接続し、反対側に32〜48pxの実空隙を開ける。皿は候補の自然高に追従し、入力・本文は平らな面に固定する。二つの角丸枠へ分割するだけでは不可。

証拠: captures/reviewer-search-3/ceramic-query-search-initial.png, snapshot/round-3/source/ceramic-query-search/styles.css

近似比較: R604 original, R215, R504 before redesign, R494 before redesign。

## R605 receipt-query-search — pass

全幅の実検索装置と暗い排出口から、一枚の候補紙が重なって出る。左右の紙余白と鋸歯の自由端が通常のフィルターカードから主形を変えている。

近似比較: R605 original, R295, R435, R252。

## R611 dispatch-command — redesign

開いた実ダイアログでは一本の全高柱、空隙、上の短い保持腕、矩形の読む票が主形。同組R602および承認済みの軸・腕の構成との反復が強い。

問題: 全高36px柱＋24px空隙＋48px上腕は、色・アイコンの材質を除くと既存の支持構成を繰り返す。コマンド群の分類や階層が主形に関与せず、装飾柱付きの一覧に留まる。

改善方向: 柱を廃し、実group見出しを幅全体の24〜32pxの仕分け口、直下の実コマンド群を8px差し込まれる一枚の長い処理票として構成する案。検索は別の上部差込面。groupなしでは偽の見出しや口を作らず一枚にする。実データのまとまりが面と接合数を決める構成を優先。R605の単一出力紙と同じものにせず、実groupごとの仕分け・選択機能を可視化する。

証拠: captures/reviewer-commands-3/dispatch-command-open.png, snapshot/round-3/source/dispatch-command/styles.css

近似比較: R611 original, R602, R597, R302, R282。

## R612 optical-command — pass

Tの丸い起動アイコンとコマンドアイコンのまとまりを保持し、タイトル・説明・ショートカットを安定した実一覧へ整えた。狭幅でも本文と操作を優先できている。

近似比較: R612 original, R508, R510。

## R613 folded-command — redesign

開いた主画面は三辺の厚い桃色枠と下辺の面取り帯。閉じた起動面の折角に比べ、実作業画面が普通の矩形一覧へ戻っている。

問題: 24px内側の白い矩形を太い外枠で囲い、下48pxの斜め面を足しているだけで、紙の表裏や実折れが読む構造を決めていない。展開後の主形がAとして不足する。

改善方向: 三辺枠を撤去し、現在の検索・コマンドを一枚の前紙へ置く。実祖先の戻り操作が存在する場合だけ、その実ラベルと操作を48pxの返し面へ載せ、24〜32pxの折口が現在紙に8px重なる構成を検討。深さ0で偽祖先面を描かず、自由端と裏面が読める一枚紙を保つ。現APIのpathが単一戻るbuttonなら、複数の偽ボタンを描かない。祖先jumpを追加する場合は本物の意味・履歴・focus・Undo・cleanupの回帰を別途検証する。

証拠: captures/reviewer-commands-3/folded-command-open.png, snapshot/round-3/source/folded-command/styles.css

近似比較: R613 original, R403, R573, R553。

## R614 stone-console-command — redesign

大きい非対称の丸い石枠と白い入力凹みが中心。通常の厚い角丸ダイアログから主構造が十分変わっていない。

問題: 14/18/22pxの厚みと90/100pxの曲率が全周フレームを作るが、検索と実候補の役割による切断・支持関係は見えない。石色と厚い縁だけをAの根拠にはできない。

改善方向: 実header/queryを一つの厚い石梁、実候補一覧を切断床に置き、その間に32〜48pxの大きい実空隙を開く。片側の幅36〜48pxの岩の首で梁と床を連続させ、両端の小飾りや独立二枠にしない。検索梁はnative入力、床は候補の自然高を受け、長い一覧の局所scrollでも支持が本文と混線しないようにする。

証拠: captures/reviewer-commands-3/stone-console-command-open.png, snapshot/round-3/source/stone-console-command/styles.css

近似比較: R614 original, R564, R594, R504 before redesign。

## 実施した検査

- 固定manifestの正本100ファイルのSHA256一致、配布CSS10件一致。captures/reviewer-hashes-3.json。
- 独立Chromium実portable native Search6件：filter/keys/ARIA/実form/reset/IME/disabled/readOnly/async/empty/error/cleanup、320/390/768 LTR/RTL、forced dark/reducedを実操作。reviewer-search-3/checks.json。
- 独立Command4件：disabled候補skip、reorder後semantic active id、label/trigger更新、native DOM/caret/focus/Undo、実Enter実行、階層drill/更新後path保持/Backspace、Escapeと起動focus復帰、controlled open、disabled、async二重抑止/error、IME、empty、長文320/390/768 LTR/RTL、44px hit、forced dark/reduced、destroy後API不変を実操作。reviewer-commands-3/checks.json。
- Search6件×320/768×LTR/RTL=24条件の長い見出し・filter・17候補の実像/overflowを追加検査。reviewer-material-3/checks.json。
- Search6件のnative label focus、外部focusを奪わない更新、実第二候補クリック、screen-reader status絶対配置を追加確認。reviewer-api-extra-3/checks.json。
- Search6件×320/768×LTR/RTL=24条件、通常motionのhover→leave→reenterで文字/入力/候補/metaの相対矩形とfont固定を確認。reviewer-hover-3/checks.json。
- 全10の通常実像と展開後を確認し、元監査・原版画像・既承認の近似構造と比較。機能成功とAの造形合否を分離した。

## 限界

- 独立レビューは固定round3のnative実配布を対象とする。主担当React4形式・HTTP24・galleryの成功報告は補助情報であり、今回独立React再実行の結果としては扱わない。
- 全730件をこの回で再撮影してはいない。元監査と保存画像、最寄りの既承認構造を比較した。
- 改善案は実装候補であり、名称や寸法を満たすだけで次回合格を保証しない。新しい共有祖先jump等は今回の検査対象に存在しない。
