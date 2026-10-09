# B048 round 10 独立再検査

**changes_requested — 8 pass / 2 adjust。通常造形全10合格、正式7の視覚6残件は解消。655/661の新しい所有focus回帰が残る。**

固定10のみを検査。作者100hash/CSS10一致、91ファイルは7から不変。通常造形の承認基準を維持し、実dialog・全層空隙・糸の接点・長名・文字/押面の固定を再確認。作者/共有/snapshotへの変更なし。

## R655 ledger-index-navigation — adjust

全行の切口と読む幅を保ったまま実current票が選択へ追従する主形を承認継承。実dialogにも舌と現在地票が入り、長名は136pxの局所スクロールに収まりnative本文との交差0。通常・実mobileの構造と操作が一致した。 通常造形は合格だが、可視mobile readingへの所有focusがitems schema更新でBODYへ落ちる共有回帰が残る。

- 実dialog内の現在地scroll面にfocusした後、同じidを保ったitems label更新で可視paneからBODYへfocusが脱落する。R663 header固定面は保持する。 改善: 再構築前に実pane所有focusを記録し、paint後に同じ可視paneへpreventScrollで復元。unknownで非表示になる場合は可視のmodal close等へ退避し、outside focusは奪わない。

## R656 letterhead-navigation — pass

固定1から保持されたTの題字/二列/章罫を継承。共有7の実操作も再確認。 固定10は作者10ファイル不変を照合し、共有JS差分の実操作回帰と通常/forced像を再確認して継承。


## R657 rail-dock-navigation — pass

実親子を結ぶ二股金属の主形を保持。実dialogの中央空隙は下層も透明で、背景が見える。親/子の読む面は不透明なまま分岐が実床へ接続する。


## R658 stitched-map-navigation — pass

親の耳から32pxの親子間を連続した糸が渡り、子布の二つの実孔へ入る。LTR/RTLと実mobileで確認。片側支持・斜めの自由端という承認済み主形を保持し、接点の残件を解消。


## R659 open-bracket-navigation — pass

元の実一覧の開括弧と短辺を保持し、Tの調整は合格継承。 固定10は作者10ファイル不変を照合し、共有JS差分の実操作回帰と通常/forced像を再確認して継承。


## R660 book-jacket-navigation — pass

四辺の親枠を撤去し、実親の幅広い前唇とその裏へ入る子紙の自由端に主形を集約。通常/実モバイルとも外周箱への依存を解消。 固定10は作者10ファイル不変を照合し、共有JS差分の実操作回帰と通常/forced像を再確認して継承。


## R661 caption-rail-navigation — adjust

152pxの実現在地窓と24pxの真空隙、非対称の残し材を実dialogにも反映。選択やunknown activeでnative行を動かさず、長名は専用面内で全て読める。 通常造形は合格だが、可視mobile readingへの所有focusがitems schema更新でBODYへ落ちる共有回帰が残る。

- 実dialog内の現在地scroll面にfocusした後、同じidを保ったitems label更新で可視paneからBODYへfocusが脱落する。R663 header固定面は保持する。 改善: 再構築前に実pane所有focusを記録し、paint後に同じ可視paneへpreventScrollで復元。unknownで非表示になる場合は可視のmodal close等へ退避し、outside focusは奪わない。

## R662 blueprint-dock-navigation — pass

上治具/索引/下送りの実接触とモバイル接続を維持。固定3合格を継承。 固定10は作者10ファイル不変を照合し、共有JS差分の実操作回帰と通常/forced像を再確認して継承。


## R663 ribbon-top-navigation — pass

実ブランドと現在地の交差を実dialog内にも反映。128pxの固定読む面と常設三行のheaderにより、長名/子項目/unknown activeでも一覧の文字と押面が動かない。側切口を通る通常の材も保持。


## R664 ceramic-dock-navigation — pass

連続する湾曲陶路の楕円開口が実dialogでも下層まで開いた。親の面から子床へ重なる一体形と、不透明なnative読字面を保持。


## 実施した検査

- 固定10作者100hashすべてmanifest一致。配布CSS10は@import除外比較で一致。固定7から91ファイル不変、6部品のCSSとR663のmarkup/Vanilla/React defaultのみ変更。R656/659/660/662各10ファイル不変。captures/reviewer-hashes-10.json。
- 固定7→10 portable internal/workbench/navigation.js差分を読取。実mobile current cloneは別クラスで状態に同期、window固定slot、footer default維持、crossing option追加。作者/共有/固定snapshotの編集なし。
- 全10初期と実native dialog、全10の実groupをLTR/RTLで独立撮影。R657/664の実dialog全層空隙、R658の親耳→孔糸接点、R655/661/663の実dialog現在地材を目視確認。reviewer-pose-10 / reviewer-open-groups-10。
- 実inline親子4件×320390768×LTRRTL=24条件の長名/説明/ARIA/読む幅/実mobileを確認。reviewer-inline-10/checks.json。
- 全10×4layouts×3幅×2方向×4実active変更=960条件。長名は日本語10反復と無空白英字、a→b→child→absent→aを実更新し全native相対glyph/hitの位置と寸法を照合、全件成功。reviewer-geometry-10/checks.json。
- 655/661実長名currentの12幅方向条件、native行との交差0。655は136px内scroll、661は152px内scroll。reviewer-longcurrent-10/checks.json。
- 655/661/663実dialogの長い現在地名18幅方向条件、全文一致/tabindex0/overflowauto/実EndキーscrollTop増加を確認。reviewer-mobilecurrent-10/checks.json。
- 全10通常hover/leave/reenter相対文字矩形/font固定、sidebar60幅方向条件とdark/light forced像。内部装飾のscrollWidthが広いR662腕/R663帯はnative字の欠けやroot横overflowとは区別した。reviewer-nav-extra-10。
- 655/661/663のactual current/child/missing、footer override、selected mobile dark/light forced読字を確認。reviewer-current-10 / reviewer-current-forced-10。
- 全10actual portable native独立回帰: href/controlled/update所有focus/group/mobile disabled/Tabtrap/Escape/empty/4layouts×320390768×LTRRTL/44hit/reduced/dead cleanup。reviewer-navigation-10とreviewer-navigation-B-10の各5件成功、pageerrors=[]。
- 主担当の新しい所有focus回帰報告を受け固定10で独立再現。実mobile reading focus→同id items label updateで655/661はBODYへ、663はDIVを保持。既存full native成功がこの新pane条件の合格を意味しない。reviewer-readingfocus-10/checks.json。

## 範囲の限界

- React4形式・既存20部品互換・恒久HTTPは主担当側検証。独立側は固定10のactual portable native全10と共有配布JS差分を検査。
- 通常Aの造形基準は正式7を維持し、今回6残件の実像と回帰を再判定。提案採用/寸法追従/自動試験成功だけを美的合格理由にしていない。
