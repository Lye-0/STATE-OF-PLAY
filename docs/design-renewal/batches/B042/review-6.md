# B042 round-6 独立再レビュー

通常造形：全10合格。総合：changes_requested（全10 adjust）。残件はdark forced colorsの実番号／次へ読字。

## R575 ledger-procedure-wizard — adjust

下の丸いキャップを撤去し、上だけの56px連続曲面／両端小口から入力紙が16px重なって出る。一枚の自由端にfooterを収め、通常の上下丸角区画という前回の問題を解消。R371上下二円筒やR138横円筒と異なる、実章面から書く紙への一方向の返りとしてA通常形は合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/ledger-procedure-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R576 index-flap-wizard — adjust

Tの索引札と本文紙を保ち、14pxの実章名／28px見出し／本文の階層が整った。少数・多手順でも読む面が成立する。 round2から対象10authorファイル不変、通常造形の合格を継承。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/index-flap-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R577 control-sequence-wizard — adjust

外周棚・面取り板を撤去。実labelの立面とnative input/textarea床を折れた片側支持・二つの腕で保持する開いた湾へ変更。現在の章だけが一本の操作列から読む見出しへ接続し、7長章の先頭・中間・末尾も誤接続なし。R537の中央首付き画面やR297の操作台と異なる実入力の断面でA通常形は合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/control-sequence-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R578 stitched-journey-wizard — adjust

88px穴と44px番号／両側14px橋を保持し、番号を上34pxへ固定。長名・7章・320px RTLでも穴と番号の中心が一致し、字の背面を橋が横断しない。前回の調整を解消、通常形合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/stitched-journey-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R579 open-plan-wizard — adjust

Tの大きい実章数字と余白を維持。現在の下線、見出し、実入力の階層は静かで一貫し、名称だけの仮想機構を追加していない。 round2から対象10authorファイル不変、通常造形の合格を継承。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/open-plan-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R580 bookend-stage-wizard — adjust

紙の縁に4px接触する支持壁へ変更し、本文＋長errorの自然高を通って共通台へ重なる。3実fields・長errorの320/768 LTR/RTLでも壁が途中で切れず、読む紙を保持する関係を確認。通常形合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/bookend-stage-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R581 clipped-page-wizard — adjust

Tの下端の実切込み札を保持。native章・本文・操作は変形せず、少数／多手順でも索引と本文の配分が安定。 round2から対象10authorファイル不変、通常造形の合格を継承。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/clipped-page-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R582 blueprint-stage-wizard — adjust

大きい切角外板を撤去。実章の後方面と現在の入力紙を32pxの真空隙・角度の異なる二本の斜め支持で組む。wideは現在章の側から自然高の紙へ、narrowは上側から接続。R573一枚折橋、R574地形の一段、R535二箱ヒンジとは支持数・方向・後方面の連続が異なる。7長章の先頭／中間／末尾でも支持は現在の紙に入り、A通常形合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/blueprint-stage-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R583 ribbon-stage-wizard — adjust

入力とerrorを一枚の読む紙へ連続させ、上と実際の下端の受けが外周帰還帯へ接触。長errorでも下受けが紙下端へ追従し、浮いた入力紙を解消。全高帯／大きい自由端の通常形は保持して合格。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/ribbon-stage-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## R584 ceramic-stage-wizard — adjust

狭幅多手順の横paddingを整理し、実名欄を確保。1/2/4/7章の全現在位置×320/768 LTR/RTLが成功。上下肩と胴の通常造形は前回合格を継承。

dark forced colorsで選択中の実番号と次へ文字が黒い矩形として消える。親のHighlight背景／黒いHighlightTextに対し、子b/spanは透明背景の黒字。ブラウザが子の字の背後へ黒いbackplateを描き、黒字と一致する。全10件の実画像で再現。親背景とのcomputed色比だけでは検出できない。

改善：選択番号の実bと次へ／完了の実span自身に不透明なHighlight/HighlightTextの面、またはCanvas/CanvasTextの字面を明示し、通常色は変更しない。darkとlight forcedの実画像で番号・次へ・完了・done記号・focusが読めることを確認する。

証拠：docs/design-renewal/batches/B042/captures/reviewer-forced-6/ceramic-stage-wizard.png, docs/design-renewal/batches/B042/captures/reviewer-forced-6/checks.json

## 実施確認

- 固定source100 SHA-256一致、native配布CSS10一致、round2から81authorファイル不変。T576/579/581の各10ファイル不変。captures/reviewer-hashes-6.json。
- 実portable native全10の入力・validation・Enter/Next/Back/完了・controlled・async error・更新時DOM/Undo/caret・disabled・reset・empty・長文320/390/768 LTR/RTL・reduced・destroy成功。reviewer-wizards-6。forcedは機械的完了と読みやすさを分離し、実像の不具合を上記記録。
- 1/2/4/7章の全現在位置×320/768 LTR/RTL、全10件成功。reviewer-wizard-counts-6。
- 全10×3実fields×長いasync error×320/768 LTR/RTL=40条件、errorとinput/textarea交差0。reviewer-errors-6/checks.json。
- 全10×7長章名×320/768 LTR/RTL=40条件、normal motionでhover→leave→reenter後の字面位置・寸法・font不変、横overflow0。reviewer-extra-6。
- R577/R582の7長章名×現在先頭/中間/末尾×320/768 LTR/RTL=24条件。文字固定・横overflow0、実画像で現在の章と紙への支持接合を確認。reviewer-current-6。
- 全10をdark forcedで個別再描画し、選択番号／次へが消える症状と子の実computed styleを保存。reviewer-forced-6。
- 再設計3件と接合調整4件をround2実像・元監査・既承認の最寄構造と比較。通常造形は全10合格。

## 限定事項

- 本レビューはimmutable round6対象。通常造形は全10合格だが、共通forced読字の修正が必要なので総合はchanges_requested。
- React全4形式の独立重複実行はしていない。主担当のReact結果と区別し、こちらは実portable nativeで操作・描画を確認。
- 提案名や説明だけでは合格にせず、保存した実描画に基づく。通常合格済み形は次回限定修正で保持する。
