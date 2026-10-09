# B049 round 1 独立検査

**changes_requested — 7 redesign / 3 adjust。**

通常native操作は全10成功。一方、A/Rの主形と既承認との差に不足があり、全9表に選択時の60px移動とforced選択文字の不可視を追加再現した。

## R665 receipt-index-navigation — redesign

右80pxの縦書き控えは実currentと結び付くが、主形は通常の一覧＋太い端帯で、破線と色に依存する。実dialogへ控えの値が届かず、長名は控え外へ溢れる。

最寄比較: R655, R661, R252旧半券案, R645

- **R665-primary-shape**: 右80pxの縦書き控えは実currentと結び付くが、主形は通常の一覧＋太い端帯で、破線と色に依存する。実dialogへ控えの値が届かず、長名は控え外へ溢れる。
  改善方向: 一覧と細い控えの左右分割を主形から再考する。例えば実行先群を一枚の幅広い開いた折り返し帯に載せ、その帯の終端そのものを実現在地の大きい読む面として手前へ返す。小札の追加や既承認655の舌/661の窓を流用せず、一覧→現在地の一続きの外形と自由端が主形になる構成を試す。currentは横書きの十分な幅を持つ自然高または固定スクロール面とし、実dialogにも同じ実値と構造を届ける。
  証拠: captures/reviewer-navigation-1/receipt-index-navigation-initial.png, captures/navigation-self-0/receipt-index-navigation-initial.png

- **R665-long-current**: 実long activeを設定すると48pxの縦書き控えへ複数列が生まれ、文字が部品の外へはみ出して切れる。320px表示のroot幅222pxに対してLTR glyph右端279px、RTL glyph左端−56px。APIの通常長名試験はactive値が短いままなのでこれを捉えていない。
  改善方向: 実current面の幅/高さ内で全文を読めるレイアウトまたはキーボード可能な局所スクロールを設け、控え自身の文字をRangeで検査する。
  証拠: captures/reviewer-longcurrent-1/checks.json, captures/reviewer-longcurrent-1/receipt-index-navigation-ltr320.png

- **R665-mobile-current**: 実dialog下の控えは静的SELECT YOUR NEXT DESTINATIONのみで、desktop控えにある実現在地名がない。説明の「実モバイルでは現在地控えが下へ回る」と一致しない。
  改善方向: 実dialog内部へactual current値を持つ読む面を同じ素材構造で反映。長名/unknown/childとfocus/選択前後のnative矩形も固定する。
  証拠: captures/reviewer-navigation-1/receipt-index-navigation-mobile.png

## R671 archive-ledger-table — redesign

40px左帯・24px下小口と104px件数札を足した四角い台帳であり、元の通常表からA固有の主形へは進んでいない。読む行と主支持の関係が外周の額縁に留まる。

最寄比較: R391, R163, R655旧案, R676

- **R671-primary-shape**: 40px左帯・24px下小口と104px件数札を足した四角い台帳であり、元の通常表からA固有の主形へは進んでいない。読む行と主支持の関係が外周の額縁に留まる。
  改善方向: 四辺/左背を捨て、実ページ範囲と連続した記録面を一枚の大きな索引原紙にまとめる。例えば実page summaryを幅全体の56〜72pxの前端面へ置き、表の原紙がその前端の実開口へ16px入る一つのページ送り断面にする。件数は独立小札でなくこの原紙の切断小口へ統合。個別行カードや偽のページ束は作らず、1ページ/空/多ページで本物の現在範囲だけが形の意味を担う。
  証拠: captures/reviewer-tables-1/archive-ledger-table-initial.png, ../../evidence/baseline/archive-ledger-table-table.png

- **R671-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/archive-ledger-table-selected320.png

- **R671-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/archive-ledger-table-selected-forced-dark.png, captures/reviewer-extra-1/archive-ledger-table-selected-forced-light.png

## R672 inspection-grid-table — redesign

上の検索帯の両端32px顎と下のページ帯のL受けは元より明確だが、上下治具で矩形紙を挟む既存構図の反復で、検査表の列を扱う機能へ構造が届いていない。

最寄比較: R282旧C顎案, R499, R662, R277

- **R672-primary-shape**: 上の検索帯の両端32px顎と下のページ帯のL受けは元より明確だが、上下治具で矩形紙を挟む既存構図の反復で、検査表の列を扱う機能へ構造が届いていない。
  改善方向: 上検索/下ページの対向枠を廃し、実theadとnative列幅調整を一つの開いた計測横桁にする。列名が読む上面、実resizerが列境界にある幅の広い指掛け/側面、下の行は同じ列幅で連続する床。桁の実小口は20〜28px、実操作領域は44pxを確保し偽目盛りは置かない。resizeの実幅だけに接点を追従させ、resizable:false時は偽工具を残さない。
  証拠: captures/reviewer-tables-1/inspection-grid-table-initial.png, ../../evidence/baseline/inspection-grid-table-table.png

- **R672-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/inspection-grid-table-selected320.png

- **R672-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/inspection-grid-table-selected-forced-dark.png, captures/reviewer-extra-1/inspection-grid-table-selected-forced-light.png

## R673 folded-register-table — redesign

上帯の小折角・下32px帯・右細壁・ページ送りの返端が、同じ矩形の表の外周へ付いた構成。太い帯は見えるが、一枚の折りが実際の読む面を決める固有構造として弱く、既承認の紙＋折返しから離れていない。

最寄比較: R403, R573, R613, R620

- **R673-primary-shape**: 上帯の小折角・下32px帯・右細壁・ページ送りの返端が、同じ矩形の表の外周へ付いた構成。太い帯は見えるが、一枚の折りが実際の読む面を決める固有構造として弱く、既承認の紙＋折返しから離れていない。
  改善方向: 周囲の小折角を廃し、実query/選択操作を載せる広い紙の背面と、実thead/bodyを載せる前面の間に一つの大きな内側の折返しを作る。32px程度の真空隙を残したまま、全幅の折面が反対側から回り込んで同じ紙の前面へつながることを実輪郭で示す。上下二枚＋別橋やZの額縁にはせず、折返しは一回だけ、ページ送りは同じ前紙の自由端へ。選択表示の予約行もこの操作背面の中へ含める。
  証拠: captures/reviewer-tables-1/folded-register-table-initial.png, ../../evidence/baseline/folded-register-table-table.png

- **R673-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/folded-register-table-selected320.png

- **R673-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/folded-register-table-selected-forced-dark.png, captures/reviewer-extra-1/folded-register-table-selected-forced-light.png

## R674 stone-record-table — redesign

緑の大きい二隅角丸矩形と下/右の小口、湾曲した小件数面である。元監査の丸角テーブルを大きくした範囲で、石の一体構造や表の働きによる固有性が不足。

最寄比較: R674原版, R121旧二重丸角案, R384, R654

- **R674-primary-shape**: 緑の大きい二隅角丸矩形と下/右の小口、湾曲した小件数面である。元監査の丸角テーブルを大きくした範囲で、石の一体構造や表の働きによる固有性が不足。
  改善方向: 丸角四辺の板をやめ、実検索で抽出した連続記録を一つの大きい露頭断面の開いた床へ置く。例えば上の実件数/検索を載せた72pxの斜め切断肩から、片側だけに深い96pxの割れを降ろし、tableの読む床がその内側へ入る非対称な一体石とする。行を石片へ分けず、対角角丸/4隅カットの既存石板にも戻さない。読み面の下には24px以上の連続切口を描き、文字はその内側へ。空/エラーでも同じ床を保つ。
  証拠: captures/reviewer-tables-1/stone-record-table-initial.png, ../../evidence/baseline/stone-record-table-table.png

- **R674-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/stone-record-table-selected320.png

- **R674-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/stone-record-table-selected-forced-dark.png, captures/reviewer-extra-1/stone-record-table-selected-forced-light.png

## R675 letterpress-data-table — adjust

Tの活版題字と細い罫の整理を維持。件数の縦の区切りと4pxの上/下基準が、薄い本文との階層を作る。通常造形の根本変更は不要。

最寄比較: R675原版, R679

- **R675-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/letterpress-data-table-selected320.png

- **R675-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/letterpress-data-table-selected-forced-dark.png, captures/reviewer-extra-1/letterpress-data-table-selected-forced-light.png

## R676 index-drawer-table — adjust

Tの引出しの上蓋/内側本文/前板を軽く整理し、不透明な読む床に統一できている。通常造形は保持調整として合格。

最寄比較: R676原版, R251, R591

- **R676-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/index-drawer-table-selected320.png

- **R676-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/index-drawer-table-selected-forced-dark.png, captures/reviewer-extra-1/index-drawer-table-selected-forced-light.png

## R677 rail-dataset-table — redesign

右上から下へ伸びる材と左下からの材が矩形表を囲う逆向きのL枠に見える。片持ちという説明はあるが、過去の対角支持と主構図が同じで、実表の横移動との関係もない。

最寄比較: R284, R662, R277, R672

- **R677-primary-shape**: 右上から下へ伸びる材と左下からの材が矩形表を囲う逆向きのL枠に見える。片持ちという説明はあるが、過去の対角支持と主構図が同じで、実表の横移動との関係もない。
  改善方向: 左右Lの外枠を廃し、実横スクロールの記録面が一つの低い開いたクロススライドへ入る構造へ。固定する選択/識別列と、実際に横へ動く残りの列面の境界を主形にし、上下ではなく一方の床端に幅60〜80pxの受けと16pxの挿込み小口を持たせる。native列移動/端点を実スクロールから反映し、偽の位置目盛りや装飾だけの動くつまみは作らない。列幅変更/RTLでも固定列を覆わない。
  証拠: captures/reviewer-tables-1/rail-dataset-table-initial.png, ../../evidence/baseline/rail-dataset-table-table.png

- **R677-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/rail-dataset-table-selected320.png

- **R677-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/rail-dataset-table-selected-forced-dark.png, captures/reviewer-extra-1/rail-dataset-table-selected-forced-light.png

## R678 stitched-register-table — redesign

左の交差線は布の耳へ到達していない。幅広の孔もなく、通常の紫の表の外にzigzag模様を足した像である。孔を追加するだけでも過去の布背＋縫糸のカテゴリ横展開になる。

最寄比較: R157, R538, R598, R658

- **R678-primary-shape**: 左の交差線は布の耳へ到達していない。幅広の孔もなく、通常の紫の表の外にzigzag模様を足した像である。孔を追加するだけでも過去の布背＋縫糸のカテゴリ横展開になる。
  改善方向: 左縦背/交差糸の反復を廃し、実列見出しと列幅そのものを使う一枚の織り登録面へ再構成する。例えば各実columnの名を載せた幅可変の布帯が、表の上にある一つの48〜64pxの折った共通縫い代を通って本文へ続く。穴/糸は実列境界から導出し、列数や幅が変わっても同じ接点へ置く。四辺縫い/左綴じ/個別行紙は使わず、列の情報と材料の方向が一致する主形を検討する。
  証拠: captures/reviewer-tables-1/stitched-register-table-initial.png, ../../evidence/baseline/stitched-register-table-table.png

- **R678-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/stitched-register-table-selected320.png

- **R678-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/stitched-register-table-selected-forced-dark.png, captures/reviewer-extra-1/stitched-register-table-selected-forced-light.png

- **R678-thread-disconnected**: 通常の糸はx8〜32、布耳はx48から始まり16pxの空白がある。狭幅は糸x0〜24に対して布耳x32で8px離れる。真の孔がなく、接合の説明と実像が一致しない。
  改善方向: 根本形の決定後、支持と読面の実接点を同一座標へ置き、全層の穴を開ける。本文の背景色の点で代用しない。
  証拠: captures/reviewer-tables-1/stitched-register-table-initial.png, snapshot/round-1/source/stitched-register-table/styles.css

## R679 open-sheet-table — adjust

元の軽いセリフと開いた紙面の個性が、675と同じ600/30px題字、囲み検索、囲みbadgeへ均されている。文字サイズ抑制自体は妥当だが、Tのよい差まで消している。

最寄比較: R679原版, R675

- **R679-preserve-t-identity**: 元の軽いセリフと開いた紙面の個性が、675と同じ600/30px題字、囲み検索、囲みbadgeへ均されている。文字サイズ抑制自体は妥当だが、Tのよい差まで消している。
  改善方向: 30px/狭幅24pxの規模は維持しながら、原版の軽いセリフweightと開いた検索の下罫、簡潔な状態表示を戻す。675の太い活版基準/区切りとは階層と線密度を分ける。新しい装飾や枠は増やさない。共通UI二件も修正する。
  証拠: captures/reviewer-tables-1/open-sheet-table-initial.png, ../../evidence/baseline/open-sheet-table-table.png

- **R679-selection-shift**: 320/390pxで非選択→最初の行を選択すると選択件数/解除のtoolbar行が出現し、押したcheckboxと本文の相対yが60px下へ移る。9件共通。
  改善方向: 非選択時から同寸の選択情報行を予約するか、既存の状態領域へ情報/解除を置いてtableの原点を維持する。hiddenの解除ボタンをfocus可能なまま残さない。選択/解除/全選択を幅方向ごとに相対矩形で確認する。
  証拠: captures/reviewer-extra-1/checks.json, captures/reviewer-extra-1/open-sheet-table-selected320.png

- **R679-forced-selected-glyph**: dark/light forcedで選択行の名前が黒/白のbackplateと同色になり読めない。全9の選択済み実画像で再現。tdにHighlight/HighlightTextを付けるだけでは実子glyphのbackplateが揃わない。
  改善方向: 実選択セル内の名前/数値/子spanにsystem foreground/backgroundを一致させ、必要ならその読む子だけforced-color-adjust:noneを限定。全体のforcedを無効にせず、dark/lightの選択済み全列を実画像で確認する。
  証拠: captures/reviewer-extra-1/forced-selected-contact.png, captures/reviewer-extra-1/open-sheet-table-selected-forced-dark.png, captures/reviewer-extra-1/open-sheet-table-selected-forced-light.png

## 実施した検査

- 作者100hashと固定manifest一致、配布CSS10一致。captures/reviewer-hashes-1.json。
- 全10の原版auditとnative before、今回initial/実選択/狭幅を比較。A/Rは構造・独自性、Tは元の長所を保持する基準で判定。近似比較は各partに記録。
- 固定actual portable tables9を独立操作: sort3状態/query/IME/selected/all/clear/actions/page/keyboard resize/owned focus/live label/controlled拒否/loading/error/empty/disabled/long320390768×LTRRTL/local scroll/44button/forced/reduced/deadcleanup。全9成功、pageerrors=[]。reviewer-tables-1/checks.json。
- receipt actual portable native: href/control/update/group/mobile/Tabtrap/Escape/empty/disabled/4layout×320390768×LTRRTL/44hit/forced/reduced/deadcleanup成功。reviewer-navigation-1/checks.json。
- 表9×3幅の通常hover/leave/reenterと選択前後のcheckbox/本文相対矩形/fontを独立記録。hover固定だが狭幅18条件で選択後60px移動。reviewer-extra-1/checks.json。
- 表9の選択済みdark/light forcedを追加実撮影し全9名称backplate欠陥を確認。既存native成功はこの追加視認性や選択幾何の合格を意味しない。
- receiptに長い実activeを設定し320390768×LTRRTLを撮影/Range記録。実dialog内にはcurrent値が無いことも確認。reviewer-longcurrent-1/checks.json。

## 範囲の限界

- React Table20×4/JS Table20×2の恒久互換性は主担当側検証。独立は今回のfixed portable native10を操作。
- 固定1のNav共有はB048最終11より前。receiptはcurrentPresentation footer defaultで新opt-in pane焦点回帰の対象外。本レビューはその版差を合格の言い訳や不具合と混同しない。
- 改善案は設計の起点であり、採用/寸法追従を合格理由にはしない。特に支持/折紙/糸は既承認の主形を再利用せず、次候補の実像・意味・接点で再評価する。
