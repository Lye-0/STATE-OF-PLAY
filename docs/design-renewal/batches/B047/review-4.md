# B047 round4 独立検査

**changes_requested：6 pass / 2 adjust / 2 redesign。通常造形は8件pass、R653/R654は再設計継続。追加でNav4件の位置不変scroll時のgroup閉鎖を確認。**

## R640 bookplate-tools-context — pass

見開きを廃し、実subjectの全幅横胴と28pxの一体側材から実分類の幅広い読む枝が続く。紙の別カードを繋ぐR631と異なり、読む枝そのものが一体材。標準separatorでも右半分の空白はなく、1群時は一つの面に戻る。元の反復と情報配置の残件を解消。

## R641 index-pocket-context — pass

round2合格のT/通常造形を対象10ファイル不変で継承。固定4の操作回帰も再確認。 元Tの索引見出し帯と薄い積層を維持。行ごとの厚いカードを減らし、17px名称・14px説明と4px小口の密度が整理されている。原版の長所を崩さず、実メニュー・下位階層・狭幅を読む構成。

## R642 blueprint-file-context — pass

上の実subjectから80px（狭幅56px）の横肩が伸び、左脚と16px重なって連続する。片持ちの上面→脚→折片→下の読む面が実面積で繋がり、長名LTR/RTLでも読字面を保つ。

## R643 ribbon-file-context — pass

round2合格のT/通常造形を対象10ファイル不変で継承。固定4の操作回帰も再確認。 元Tの丸い見出し帯を保持し、選択・縦線・分類線の重複強調を整理。24pxの曲率と4pxの返端を保ち、通常項目は平らな読む面に戻っている。既存形の精度改善として合格。

## R644 ceramic-file-context — pass

round2合格のT/通常造形を対象10ファイル不変で継承。固定4の操作回帰も再確認。 一続きの丸い片側壁から、実分類ごとに棚の床と短い右小口を出す構成。行ごとの丸角タイルではなく実groupを受ける連続した陶の側壁が主形を担う。真の棚間空隙と不透明な分類・disabled読字面を確認。

## R645 receipt-file-context — pass

巻軸を全廃し、現在の一枚票と実親への戻りを持つ切離し片へ変更。下位階層だけ24pxの真空隙と64pxの残し紙に実Backが載り、rootに架空の親片を置かない。行ごとのticket反復でなく、実階層の戻りがパネル全体を分ける。通常形の残件を解消。

## R651 chapter-spine-navigation — adjust

左背と三枚の板・個別行先カードを廃し、横の開いた小口と一枚の実索引、実現在地の幅広い前小口へ入る構成へ。非対称な両小口が一冊の断面を作り、旧背付き矩形群から離れた。sidebar狭幅の本文は110pxへ拡がり、外形も収まる。

- **R651-queued-scroll-closes-group / major**：固定4で実親anchorの矩形を変えずにdocument scroll通知を送ると、開いている実groupが閉じる。自動focus/scroll後の子操作待機で表面化し、4件すべてで独立再現。
- 改善：実anchorの座標が動いたpopoverだけを閉じる。通知だけで位置不変なら維持し、flow内のinline groupはページscrollでも読む面を維持する。固定7ではこの方向の修正を独立反証確認済みだが、固定4の記録では未修正として残す。
- 証拠：captures/reviewer-scroll-4-7.json, queued-scroll-4.json

## R652 station-board-navigation — adjust

各実行にも12pxの桁を設け、wrap後・mobile後続の吊り棒が必ず実桁から出る。共通の案内板構成を維持しつつ、実行数に依存して支持が浮く問題を解消。

- **R652-queued-scroll-closes-group / major**：固定4で実親anchorの矩形を変えずにdocument scroll通知を送ると、開いている実groupが閉じる。自動focus/scroll後の子操作待機で表面化し、4件すべてで独立再現。
- 改善：実anchorの座標が動いたpopoverだけを閉じる。通知だけで位置不変なら維持し、flow内のinline groupはページscrollでも読む面を維持する。固定7ではこの方向の修正を独立反証確認済みだが、固定4の記録では未修正として残す。
- 証拠：captures/reviewer-scroll-4-7.json, queued-scroll-4.json

## R653 folded-index-navigation — redesign

常設Z外枠の反復は解消し、実groupだけへ形を結び付ける方針も適切。ただし現物は通常の一覧とsummaryの端に付けた三角／細い側面に留まり、Aの主構造としてはまだ弱い。狭幅UIは解消済み。

- **R653-fold-is-edge-decoration / major**：実groupの閉状態は右端40/64pxの三角片、開状態は同じ端の細い台形面に変わる。summaryと子を読む主面は普通の矩形で、その二面が実際の大きい折返しや切口で繋がった形ではない。意味に合わせて装飾箇所を限定した改善だけではA主形の独立性と大胆さが不足。
- 改善：実summary面と子の読む面そのものを、面の前後が分かる大きい折返し・接合へ組み直す。端の三角を単に拡大せず、どちらが裏面で、どこで同じ紙が曲がり、どこが自由端なのかを実外形で成立させる。実groupなしに偽構造を置かない方針は保持。閉状態と実開状態の両方で通常のaccordion＋三角飾りを越えるか再確認する。
- 証拠：captures/reviewer-pose-4/folded-index-navigation-4-initial.png, captures/reviewer-open-groups-4/folded-index-navigation-details-ltr.png, captures/reviewer-open-groups-4/folded-index-navigation-flyout-ltr.png, snapshot/round-4/source/folded-index-navigation/styles.css

- **R653-queued-scroll-closes-group / major**：固定4で実親anchorの矩形を変えずにdocument scroll通知を送ると、開いている実groupが閉じる。自動focus/scroll後の子操作待機で表面化し、4件すべてで独立再現。
- 改善：実anchorの座標が動いたpopoverだけを閉じる。通知だけで位置不変なら維持し、flow内のinline groupはページscrollでも読む面を維持する。固定7ではこの方向の修正を独立反証確認済みだが、固定4の記録では未修正として残す。
- 証拠：captures/reviewer-scroll-4-7.json, queued-scroll-4.json

## R654 stone-terrace-navigation — redesign

離れた三石板・各小リンクの面取りは解消。しかし一体化した現物は、矩形の読むパネルに右48pxと下24pxの面取りを付けた形で、固有の採掘形や材料の大きい凹凸が現れていない。狭幅UIは解消済み。

- **R654-single-bevel-box / major**：三板を一枚へ統合したが、全長の輪郭は矩形で、右の直線48px面と下24pxの面取りが素材表現のほぼ全て。実group開口も矩形の子一覧と縦12pxの陰であり、大きい採掘面・断層という説明に対応する固有外形がない。汎用立体パネルからの差が不足。
- 改善：一体面を保ちながら、通常の矩形外周と直線の側面そのものを見直す。実brand・行先床・現在地の前端の関係から、大きい切欠き／凹む面／不均一な断面が全体形を決める案へ。実group部分だけの小さい陰追加や色違いでは不足。R394の均等番号階段、R614の梁と首の再利用も避け、読む面を先に確保して大きい物理構造を検討する。
- 証拠：captures/reviewer-pose-4/stone-terrace-navigation-4-initial.png, captures/reviewer-open-groups-4/stone-terrace-navigation-details-ltr.png, snapshot/round-4/source/stone-terrace-navigation/styles.css

- **R654-queued-scroll-closes-group / major**：固定4で実親anchorの矩形を変えずにdocument scroll通知を送ると、開いている実groupが閉じる。自動focus/scroll後の子操作待機で表面化し、4件すべてで独立再現。
- 改善：実anchorの座標が動いたpopoverだけを閉じる。通知だけで位置不変なら維持し、flow内のinline groupはページscrollでも読む面を維持する。固定7ではこの方向の修正を独立反証確認済みだが、固定4の記録では未修正として残す。
- 証拠：captures/reviewer-scroll-4-7.json, queued-scroll-4.json

## 実施確認

- 固定round4 source100hash・portable CSS10一致。round2から27著者ファイル変更、既合格R641/643/644の30ファイル不変。全10export JSはbyte不変。captures/reviewer-hashes-4.json。
- Context6件の固定4 actual native全protocolを独立実行し全PASS。keyboard/実checkbox/radio/submenu/controlled/disabled/labels/path/focus/dead reset/empty/error/long320390768LTRRTL/forced/reduced/cleanup。captures/reviewer-contexts-4/checks.json。
- Context6件のnormal hover→leave→reentry、字体と相対矩形固定、実右クリック、outside no-steal、toggle focus、dark/light forcedを追加確認。captures/reviewer-extra-4/checks.json。
- Context変更R4件の320/768 LTR/RTL、実subject/group、実親と子、背後文字に対する不透明読字面、実空隙を再撮影。captures/reviewer-material-4。
- Nav4件は固定4 actual nativeで、live labels/href/owned focus/compatible flyout/disabled/controlled/modal/dead API、4layouts長文320390768LTRRTL、forced/reducedを実行。結果はcaptures/reviewer-navigation-4/checks.jsonに保存。
- Nav4件の独立追加でnormal hover解除/再進入の字面固定、sidebar24幅方向の実文字Rangeと外形、dark/light forcedを確認。320px実component222pxの名称幅651/652/653/654は110/142/158/134px、全24条件overflow無し。captures/reviewer-nav-extra-4/checks.json。
- Nav全4の実flyout・mobile details開状態をLTR/RTLで別撮影。自動scrollの直後ではなくスクロールが安定してから実クリックし、開いた材とnative内容を確認。captures/reviewer-open-groups-4。
- controlled Escapeはnative cancel callback/状態の配送を待つassertを使用。coreの変更ではなく、前回の即時assert疑義と実操作の成否を分けた。
- 追加反証：同一anchor位置でscrollイベントを配送すると固定4はNav4すべてgroup=null、固定7は4件すべてgroup=parentを維持。captures/reviewer-scroll-4-7.json。
- Nav4全protocolは651/652/653の連続実行PASSと、654の焦点スクロール安定後の単独完走PASSを合わせて確認。自動scrollによる一度の子click待機を消していない。ログはcaptures/reviewer-native-logs-4。

## 限界

- React4形式および全20恒久suiteはこの独立再検査では再実行していない。主担当の検証と固定portable nativeの独立証拠を区別。
- 提案に沿った寸法や名称だけで造形を合格にしていない。R653/R654は前の反復を解消した点を認めつつ、現在の実像がA主形として不足するため再設計継続。
