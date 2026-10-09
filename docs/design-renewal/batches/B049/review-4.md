# B049 round 4 独立再検査

**changes_requested — 7 pass / 2 adjust / 1 redesign。**

R672幅表示・R678見出し原点・全9 RTL数値は解消。R673/R674の新主形を承認。R665の旧CSS上書き、R671の接合/多桁番号、R677の主形が残件。

## R665 receipt-index-navigation — adjust

実currentの長名・実dialog・所有focusは維持。新しい全幅の返曲面は、CSS末尾の旧64×48px擬似面が上書きして通常desktopでは表示されない。現物は平たい一覧と丸底の現在面であり、意図する一枚紙の連続形をまだ検査できない。

最寄比較: R645, R655, R661

- **R665-obsolete-return-override**: 新しい全幅64px曲面の後に旧 .wb-nav-desktop::after が残り、実computedはwidth64px/height48px/right−32px/bottom−48px。desktop通常像では大きい返曲面がなく、説明と本体・dialogの材の関係が一致しない。
  改善方向: 旧overrideを除去し、実desktop/sidebar/dock/actualdialogで同じ幅広い返面が一覧終端とcurrent面へ接触することを画像で確認。文字・行・hitを動かさない。
  証拠: captures/reviewer-controls-4/checks.json, captures/reviewer-controls-4/receipt-desktop.png

## R671 archive-ledger-table — adjust

実pageに応じた112pxの索引を読む紙の側端へ置く構成は、前版の太いfooterから主形を変えている。動的な実索引と一枚の記録面という方向は受け入れられるが、wideの8px浮きと多桁ページ番号の改行を修正する必要がある。

最寄比較: R671固定1, R625, R297

- **R671-page-index-contact**: wideで索引の左padding8pxが背景の空隙となり、実ページの自由端が本文の端から離れて浮く。narrowではpadding0で接するため、素材構造が幅で変わる。
  改善方向: 索引の根元を読む原紙の実端へ接続し、側面の前後関係を明確にする。単にborderを増すのではなく同じ原紙の端として読める連続性をwide/RTLで確認。
  証拠: captures/reviewer-tables-4/archive-ledger-table-initial.png, captures/reviewer-controls-4/archive-768-rtl.png

- **R671-page-number-wrap**: 実10,000行/pageSize1/current5000の索引で10000が「100」「00」の2行へ分割される。320/390/768×LTR/RTLで確認。読むページ番号は分割すると誤読しやすい。
  改善方向: 実ページ番号を単一行に保ち、桁数に応じた幅または文字寸法を確保する。最大桁のRange行数と内側面を検証し、選択時に本文/hitの位置を変えない。
  証拠: captures/reviewer-controls-4/digits.json, captures/reviewer-controls-4/index-digits-320-ltr.png, captures/reviewer-controls-4/index-digits-768-rtl.png

## R672 inspection-grid-table — pass

実列名・幅操作・設定幅表示が同じ深い横桁に揃った。旧inset競合は解消し、設定幅の意味も明示された。列名を保持しながら実resizeが材料の側面を担う通常形を承認。

最寄比較: R672固定1, R282旧案

## R673 folded-register-table — pass

実検索/選択の220px背面と実記録面が、全高48pxの広い返面でつながる主形へ変わった。小さいC取手の付加ではなく読む領域の配置が折面を決め、狭幅では同じ面が上へ回る。RTLの材の向きも整合し、通常形を承認。

最寄比較: R224, R476, R403

## R674 stone-record-table — pass

短い隅欠けから、全高に続く非対称の傾斜・割れ・切口へ変更された。規則的な表床を一体の大きい露頭の内側に置き、件数/検索/ページを小石に分けない。元の丸角板から主形を変更できており、通常形を承認。

最寄比較: R674固定1, R214, R564, R654

## R675 letterpress-data-table — pass

Tの活版題字と連続した読む面を保持。選択予約・forced選択glyph・RTL数値isolateを実検査し、前回残件の解消を確認。

最寄比較: R675原版

## R676 index-drawer-table — pass

Tの引出し上蓋/明るい内床/前板を保持。選択予約・forced選択glyph・RTL数値isolateを実検査し、前回残件の解消を確認。

最寄比較: R676原版

## R677 rail-dataset-table — redesign

native rangeと実横scrollの双方向同期は成立している。ただし通常形は四角い表の下に、標準的な長方形のrange面を足した構図。固定識別床と可動記録床の境界は太い直線のままで、別のつまみ面を増やしたことが主形の機構的な関係へ結び付いていない。

最寄比較: R677固定1, R662, R239

- **R677-independent-slider-panel**: native rangeと実横scrollの双方向同期は成立している。ただし通常形は四角い表の下に、標準的な長方形のrange面を足した構図。固定識別床と可動記録床の境界は太い直線のままで、別のつまみ面を増やしたことが主形の機構的な関係へ結び付いていない。
  改善方向: 固定識別面・可動記録面・実rangeの受けを一つの支持構造に組み直す。実固定列幅に対応する支持が下へ続き、viewportの下小口と操作溝が同じ材の交差/差込みとして読める構成などが必要。狭幅で固定列を解放する時は架空の固定材を残さない。標準rangeを大きくする/色を揃えるだけでは不足。
  証拠: captures/reviewer-material-4/rail-dataset-table-ltr.png, captures/reviewer-controls-4/rail-320-rtl.png

## R678 stitched-register-table — pass

最初のthの42px移動は解消し、実列名と本文列・孔の対応が戻った。実columnごとの布帯が共通の56px縫い代へ通る形を保持し、列幅/RTLでもnative見出しを覆わない。通常形とUIを承認。

最寄比較: R678固定1, R658, R672

## R679 open-sheet-table — pass

軽いセリフ/下罫検索/囲まない状態を保持し、活版Tとの違いを維持。選択予約・forced選択glyph・RTL数値の残件も解消。

最寄比較: R679原版, R675

## 実施した検査

- 固定4作者100hash/manifest一致、sourceと配布CSS10一致。captures/reviewer-hashes-4.json。作者/shared/snapshotの編集なし。
- actual portable tables9 full native回帰を独立実行: sort/query/IME/select/all/clear/actions/page/resize/ownedfocus/live label/controlled/loading/error/empty/disabled/320390768LTRRTL/native scroll/44button/forced/reduced/cleanup。全9PASS/pageerrors=[]。reviewer-tables-4。
- 表9×18=162の選択/全選択/解除幾何を独立再確認。hover/leave/reenter全27幅条件も実文字/font/hit固定。reviewer-table-geometry-4、reviewer-extra-4。
- 全9 dark/light forced選択済みの狭幅とwideを撮影・視認。選択glyphのbackplate不可視は回帰なし。全9RTL footerはLTR/isolateとなり実範囲/ページ順を維持。reviewer-wideforced-4、reviewer-extra-4、reviewer-rtlvalues-4。
- R672/673/677/678 LTR/RTLの実material/th/pseudo/Rangeを撮影。672設定幅と678sticky原点の修正を確認。reviewer-material-4。
- 新pageIndex: real page50クリック、rows縮小でpage2へownedfocus、option offで表scrollへ退避、controlled拒否の通知/値保持、disabledを実操作。100pagesと10000pagesを320390768LTRRTLで撮影。reviewer-controls-4/checks.json、digits.json。
- 新scrollControl: 320390768×LTRRTLでnative Home/End→実scroll両端、実scroll50%→range50%の双方向同期、option off所有focus退避、disabled、dark/light forced native rangeを確認。reviewer-controls-4。
- receipt full native回帰PASS/pageerrors=[]。mobile長名6条件でEndによる実scroll/focus、schema rebuild時所有reading保持・unknown時closeへ退避・no-stealを確認。reviewer-navigation-4、reviewer-mobilecurrent-4、reviewer-readingfocus-4。
- 元audit/固定3/既承認近似と主形を比較。新機能の追加や提案寸法の採用だけでA合格にしない。

## 範囲の限界

- React40/既存Table20/Nav20の全配布互換性・恒久HTTP試験は主担当側検証。今回の独立検査は固定actual portable native10とsource/export CSSに限定。
- 主担当のsheet-4はrange追加前の像を含むため、新主形の最終判断は固定4actual nativeの独立撮影を使用。
- R665は古いCSS上書きのため意図する全幅曲面を正常desktopで評価できない。修正後の実像を再検査する。
