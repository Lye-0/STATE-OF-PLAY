# Paging color final review

**修正14件合格。全20件の1/6/12ページを実選択し、選択／未選択番号・有効矢印・末尾情報を測定。**

最初の再検査でslattedの後半直指定colorがtokenを上書きしている残件を発見。主担当がvar(--ink)へ変更後、3状態を独立再実行して解消確認しました。

- spine-index-pages: 最小4.517:1 / 4.5:1 normal-text threshold
- track-stop-pages: 最小5.224:1 / 4.5:1 normal-text threshold
- ribbon-ticket-pages: 最小4.595:1 / 4.5:1 normal-text threshold
- stone-step-pages: 最小4.691:1 / 4.5:1 normal-text threshold
- ledger-page-tabs: 最小5.277:1 / 4.5:1 normal-text threshold
- perforated-pages: 最小5.015:1 / 4.5:1 normal-text threshold
- console-pages: 最小5.235:1 / 4.5:1 normal-text threshold
- stitched-index-pages: 最小4.888:1 / 4.5:1 normal-text threshold
- open-bracket-pages: 最小5.032:1 / 4.5:1 normal-text threshold
- coin-stack-pages: 最小4.981:1 / 4.5:1 normal-text threshold
- margin-line-pages: 最小4.218:1 / 44px selected digits use 3:1 large-text threshold
- shuttle-key-pages: 最小4.585:1 / 4.5:1 normal-text threshold
- folded-tab-pages: 最小4.575:1 / 4.5:1 normal-text threshold
- bookplate-pages: 最小5.212:1 / 4.5:1 normal-text threshold
- plain-result-pages: 最小6.382:1 / 4.5:1 normal-text threshold
- compact-data-pages: 最小5.893:1 / 4.5:1 normal-text threshold
- soft-reading-pages: 最小6.192:1 / 4.5:1 normal-text threshold
- line-navigation-pages: 最小5.717:1 / 4.5:1 normal-text threshold
- warm-book-pages: 最小6.050:1 / 4.5:1 normal-text threshold
- slatted-pages: 最小4.697:1 / 4.5:1 normal-text threshold

margin-lineの実選択44px数字は4.218:1で大文字3:1基準を満たします。その他通常文字は4.5:1以上。変更した末尾muted/ink自身は既知背景に対し5.2以上で、背景や素材・レイアウトは維持。14sourceと独立fixtureの一致、HEADからの変更がcolor/--ink/--mutedだけであることを機械照合しました。

track-stopを含む既知4pseudo面はhelperの20件測定へ入り、閾値を下げず未測定を解消。画像と実背景値が一致します。

証拠: paging-final-source.json、captures/paging-final/readings.json・paint.json・sheet0〜2.jpg、captures/paging-slatted-final/。実行はTSX portable、fixture幅340px（viewport1000）。全幅／RTL／他形式の回帰は主担当の検証範囲で、この限定レビューの実施済みとは扱いません。作者・元fixture未編集。
