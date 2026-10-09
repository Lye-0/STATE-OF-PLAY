# B042 round-9 最終独立レビュー

全10件 pass。通常造形はround6から保持。残件のforced読字がdark/light両方で解消しました。

## R575 ledger-procedure-wizard — pass

下の丸いキャップを撤去し、上だけの56px連続曲面／両端小口から入力紙が16px重なって出る。一枚の自由端にfooterを収め、通常の上下丸角区画という前回の問題を解消。R371上下二円筒やR138横円筒と異なる、実章面から書く紙への一方向の返りとしてA通常形は合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R576 index-flap-wizard — pass

Tの索引札と本文紙を保ち、14pxの実章名／28px見出し／本文の階層が整った。少数・多手順でも読む面が成立する。 round2から対象10authorファイル不変、通常造形の合格を継承。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R577 control-sequence-wizard — pass

外周棚・面取り板を撤去。実labelの立面とnative input/textarea床を折れた片側支持・二つの腕で保持する開いた湾へ変更。現在の章だけが一本の操作列から読む見出しへ接続し、7長章の先頭・中間・末尾も誤接続なし。R537の中央首付き画面やR297の操作台と異なる実入力の断面でA通常形は合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R578 stitched-journey-wizard — pass

88px穴と44px番号／両側14px橋を保持し、番号を上34pxへ固定。長名・7章・320px RTLでも穴と番号の中心が一致し、字の背面を橋が横断しない。前回の調整を解消、通常形合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R579 open-plan-wizard — pass

Tの大きい実章数字と余白を維持。現在の下線、見出し、実入力の階層は静かで一貫し、名称だけの仮想機構を追加していない。 round2から対象10authorファイル不変、通常造形の合格を継承。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R580 bookend-stage-wizard — pass

紙の縁に4px接触する支持壁へ変更し、本文＋長errorの自然高を通って共通台へ重なる。3実fields・長errorの320/768 LTR/RTLでも壁が途中で切れず、読む紙を保持する関係を確認。通常形合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R581 clipped-page-wizard — pass

Tの下端の実切込み札を保持。native章・本文・操作は変形せず、少数／多手順でも索引と本文の配分が安定。 round2から対象10authorファイル不変、通常造形の合格を継承。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R582 blueprint-stage-wizard — pass

大きい切角外板を撤去。実章の後方面と現在の入力紙を32pxの真空隙・角度の異なる二本の斜め支持で組む。wideは現在章の側から自然高の紙へ、narrowは上側から接続。R573一枚折橋、R574地形の一段、R535二箱ヒンジとは支持数・方向・後方面の連続が異なる。7長章の先頭／中間／末尾でも支持は現在の紙に入り、A通常形合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R583 ribbon-stage-wizard — pass

入力とerrorを一枚の読む紙へ連続させ、上と実際の下端の受けが外周帰還帯へ接触。長errorでも下受けが紙下端へ追従し、浮いた入力紙を解消。全高帯／大きい自由端の通常形は保持して合格。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## R584 ceramic-stage-wizard — pass

狭幅多手順の横paddingを整理し、実名欄を確保。1/2/4/7章の全現在位置×320/768 LTR/RTLが成功。上下肩と胴の通常造形は前回合格を継承。 round9は通常CSSを完全に保持。dark/light forcedで実番号・次へ・完了・disabledの文字を再描画し、子だけのsystem色＋forced-color-adjust:noneでbackplateによる消失が解消した。

## 今回の実施範囲

- immutable round9 source100 SHA-256一致、native CSS10一致。round6から90ファイル不変、変更10stylesは通常CSSを完全なprefixとして保持し、末尾forced媒体の子文字指定だけを追加。captures/reviewer-hashes-9.json。
- 全10×dark/light forced×次へ/完了/disabledの60条件を実portable nativeで再描画し、2RAF後の実画像とcomputed stylesを保存。captures/reviewer-forced-9/checks.json／各PNG。
- 選択中の01/02、次へ、完了が両system配色で判読可能。完了状態の既完了チェックと未選択番号も保持。disabledは淡くなるが字形が消えず、native disabledを維持。
- 通常造形・実接合・長章名・1/2/4/7全現在位置・native入力/Undo/caret/validation/controlled/cleanup・長error40条件・hover離脱再進入のround6合格を差分限定で継承。
- round8の明示背景色だけではdark/lightとも字が消えることを独立60条件で確認済み。round8は主担当指示で正式化せず、証拠をreviewer-forced-8へ保持。最終round9では文字子だけのforced調整抑止で解消を確認。

## 限定事項

- 今回の限定再検査はforcedの読字とexact差分。全通常操作をround9で再実行したとは扱わず、通常CSS・DOM/API不変とround6実検査を根拠に継承。
- React全4形式の独立重複実行はしていない。実portable nativeの描画で確認し、主担当Reactログとは区別。
- B041の同様の潜在欠陥はこのB042判定へ含めない。別固定入力で追加確認する。
