# B049 round 7 独立最終再検査

**pass — 全10件合格。**

重点3件の主形/接合/実読字の残件を解消。既合格7件は作者70ファイル不変と今回のnative回帰を確認して継承。

## R665 receipt-index-navigation — pass

旧擬似面の上書きは除去され、一覧の終端全幅が64pxの曲面を介して184pxの実current読面へ連続する。側橋と切離し票の反復を離れ、desktopと実dialogで同じ原紙の返面として読める。長名全文scroll・unknown・owned reading focusも保持し、通常主形/UIを承認。

最寄比較: R645, R655, R661

## R671 archive-ledger-table — pass

実ページ索引の根元が原紙の端へ接続し、wideの8px浮きが解消した。実ページ数に応じた読む端として一覧に付属し、装飾の偽紙束を増やさない。10000ページを含む全実番号が320/390/768×LTR/RTLで単一行・面内に収まり、実選択・controlled拒否・focus退避も成立。

最寄比較: R671固定1, R625, R297

## R672 inspection-grid-table — pass

実列名・幅操作・設定幅表示が同じ深い横桁に揃った。旧inset競合は解消し、設定幅の意味も明示された。列名を保持しながら実resizeが材料の側面を担う通常形を承認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R672固定1, R282旧案

## R673 folded-register-table — pass

実検索/選択の220px背面と実記録面が、全高48pxの広い返面でつながる主形へ変わった。小さいC取手の付加ではなく読む領域の配置が折面を決め、狭幅では同じ面が上へ回る。RTLの材の向きも整合し、通常形を承認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R224, R476, R403

## R674 stone-record-table — pass

短い隅欠けから、全高に続く非対称の傾斜・割れ・切口へ変更された。規則的な表床を一体の大きい露頭の内側に置き、件数/検索/ページを小石に分けない。元の丸角板から主形を変更できており、通常形を承認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R674固定1, R214, R564, R654

## R675 letterpress-data-table — pass

Tの活版題字と連続した読む面を保持。選択予約・forced選択glyph・RTL数値isolateを実検査し、前回残件の解消を確認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R675原版

## R676 index-drawer-table — pass

Tの引出し上蓋/明るい内床/前板を保持。選択予約・forced選択glyph・RTL数値isolateを実検査し、前回残件の解消を確認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R676原版

## R677 rail-dataset-table — pass

独立した塗り矩形range面を廃し、実固定列の幅に対応する支持が表の下小口から送り溝へ続く構造になった。可動床下の開いた空間と片端の受け、native鞍形つまみが一つの機構として読める。狭幅で識別列を解放した時は支持も48pxへ縮み、架空の固定床を残さない。実rangeと横scrollの双方向操作に造形が対応しており、主形を承認。

最寄比較: R677固定1, R662, R239

## R678 stitched-register-table — pass

最初のthの42px移動は解消し、実列名と本文列・孔の対応が戻った。実columnごとの布帯が共通の56px縫い代へ通る形を保持し、列幅/RTLでもnative見出しを覆わない。通常形とUIを承認。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R678固定1, R658, R672

## R679 open-sheet-table — pass

軽いセリフ/下罫検索/囲まない状態を保持し、活版Tとの違いを維持。選択予約・forced選択glyph・RTL数値の残件も解消。 固定4から作者10ファイル不変を照合し、今回native回帰でも問題なし。

最寄比較: R679原版, R675

## 実施した検査

- 固定7作者100hash/manifest一致・source/配布CSS10一致。固定4→7は変更3件の7ファイルのみ、既合格7件の作者70ファイルは完全不変。captures/reviewer-hashes-7.json。
- 共有tableの固定4→7実export差分は実pages桁数を--wb-page-digitsへ渡す一行のみ。新pageIndex/scrollControlのAPIは固定4検査を保持し、今回も実操作を再確認。
- 重点3件を固定actual nativeで独立撮影。R665のdesktop/実dialog全幅曲面、R671紙端接合、R677固定幅支持/開いた受け/鞍形つまみを実像で評価。寸法や機能追加だけを合格理由にしない。reviewer-controls-7、reviewer-navigation-7、reviewer-tables-7。
- actual portable tables9 full native回帰: sort/query/IME/select/all/clear/actions/page/resize/ownedfocus/live label/controlled/loading/error/empty/disabled/長文320390768LTRRTL/native scroll/44button/forced/reduced/cleanup。全9PASS/pageerrors=[]。reviewer-tables-7。
- 全9×18=162選択/全選択/解除条件で相対文字/hit固定、hover/leave/reenter全27幅条件もfont/文字矩形固定。reviewer-table-geometry-7、reviewer-extra-7。
- 全9 dark/light forced選択済みを狭幅/wideで再撮影。重点変更の索引/sliderもdark/lightを実画像確認。glyph/backplate遮蔽の再発なし。reviewer-wideforced-7、reviewer-extra-7、reviewer-controls-7。
- 実ページ索引: page50クリック/データ縮小時page2へ所有focus/option off時表scrollへ退避/controlled拒否/disabledを再確認。10000pages・current5000を6幅方向で全表示番号のRange単一行/内面を確認。reviewer-controls-7/checks.json、digits.json、index-digits-*.png。
- 実range: 320390768×LTRRTLでHome/End→実scroll両端、実scroll50%→range50%同期、option off focus退避、disabled、forcedを再確認。実識別列の固定/解放に対応した支持を画像で照合。reviewer-controls-7。
- receipt全native回帰PASS/pageerrors=[]。実mobile長名6条件の全文End scroll/所有focus、schema rebuild保持/unknown close退避/no-stealを再確認。reviewer-navigation-7、reviewer-mobilecurrent-7、reviewer-readingfocus-7。
- 元監査/固定4と既承認近似の比較基準を保持。通常形合格済み7件へ新たな造形条件を追加せず、hash同一性と実UI回帰で継承。

## 範囲の限界

- React全形式・既存Table20/Nav20互換性・恒久HTTP回帰の実行は主担当側検証。独立は固定actual portable native全10と作者100hash/配布CSS10を確認。
- 固定5/6は途中版として個別の正式判定を行わず、今回固定7に含まれる最終差分を評価。
- ページ桁数は実10000pagesまでを検証。理論上の無制限桁を保証しない。
