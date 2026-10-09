# B048 round 7 独立再検査

**changes_requested — 4 pass / 6 adjust。通常の主形は承認し、実dialog内の一致・全層空隙・縫い接点を限定修正。**

固定6の作者100を継承する固定7を評価。6の不具合/像は履歴として区別。作者/共有/snapshot変更なし。

## R655 ledger-index-navigation — adjust

全行に同じ読む矩形と実切口を予約し、実current票だけが舌の先へ移る。7で属性復帰、選択前後の押面468×112/本文位置は同一。通常形は成立、実dialog内部の同形が残件。

**R655-actual-dialog-material:** 外側frameのdesktop非表示状態には改善があるが、実native dialogを開いた内部に実選択行と索引舌/現在票が存在しない。655/661は通常の選択行、663は24px下罫のheaderで、前回の本体/展開一貫性を解消していない。

改善: 実dialog内のnative情報へ実選択行と索引舌/現在票を同じ前後関係で配置する。外側launcherのcurrentFootだけを変更して完了としない。実current移設が必要ならopen/close/updateの所有focus・ARIA・cleanupと全行の固定予約を確認する。

根拠: captures/reviewer-pose-7/ledger-index-navigation-7-mobile.png, captures/reviewer-pose-7/ledger-index-navigation-7-initial.png

**R655-long-current-overlap:** 実active名を長い日本語×4＋英字へ更新しsidebar320/390×LTRRTLを操作すると、currentFootが予約152pxを超えて上へ伸びnative読む行を覆う。320では押面y376..846.8、current面y499.8..982.8/高さ483pxで重なり57,602px²。R661の固定152px/scrollは同条件で重なり0。

改善: current面を固定予約の中で全文読める高さ/局所スクロールへ制限するか、全行同一の予約を内容に適応させる。選択変更でnative行は動かさず、値を省略せず、320390768×LTRRTLの長い実active名と実native hit/glyph非遮蔽を同時に検証する。

根拠: captures/reviewer-longcurrent-7/checks.json, captures/reviewer-longcurrent-7/ledger-index-navigation-ltr320.png

## R656 letterhead-navigation — pass

固定1から保持されたTの題字/二列/章罫を継承。共有7の実操作も再確認。

## R657 rail-dock-navigation — adjust

各行棚を廃した実親子の二股が実床へ入り、desktopは真空隙と不透明な読字面を両立。通常形を承認し、mobile下層だけ調整。

**R657-mobile-underlayer:** desktopの二股の中央空隙は実背景へ抜けるが、実mobile dialogには全面の不透明backgroundが残る。子の材から抜いた部分はdialogと同じ淡色で埋まり、全層の空隙にならない。

改善: dialog全体の塗りを二股の中央空隙の下に残さず、header/native読む面/子床/閉じる/操作案内だけに不透明な下地を確保する。暗色/明色/背後の文字の上で孔は透過し、native文字は透けないことを実画像確認する。

根拠: captures/reviewer-inline-7/rail-dock-navigation-mobile-open.png, snapshot/round-7/source/rail-dock-navigation/styles.css

## R658 stitched-map-navigation — adjust

矩形枠を廃して片側の耳、実2孔、斜めの自由端を持つ子布へ改善。孔は実maskになったが、desktopの親から子への糸の接点が未完成。

**R658-desktop-thread-disconnected:** desktopのflyoutに32px上余白があり、子布と糸::beforeの開始もtop32px。親の耳の下端から子布上端までの32px区間には糸が無く、二つの孔を背後から通す6px線は子布の中だけで終わる。mobileには渡る線があるため、両表示の接点が不一致。

改善: 親の実耳から最初の子孔へ連続する糸の露出区間を作る。子の孔位置/裏通過/終端と一つの経路として結び、単なる孔の中の短い色線で縫った扱いにしない。RTLでも親耳と孔の双方を同じ論理側へ。

根拠: captures/reviewer-open-groups-6/stitched-map-navigation-flyout-ltr.png, captures/reviewer-inline-7/stitched-map-navigation-mobile-open.png, snapshot/round-7/source/stitched-map-navigation/styles.css

## R659 open-bracket-navigation — pass

元の実一覧の開括弧と短辺を保持し、Tの調整は合格継承。

## R660 book-jacket-navigation — pass

四辺の親枠を撤去し、実親の幅広い前唇とその裏へ入る子紙の自由端に主形を集約。通常/実モバイルとも外周箱への依存を解消。

## R661 caption-rail-navigation — adjust

選択位置を動かす方式から一定のwindow slotへ。152pxの実現在名面、24pxの真空隙、非対称の残し材が一体の読む窓を作る。押面772×112/本文位置の相対関係は選択で不変。実dialog内部は未反映。

**R661-actual-dialog-material:** 外側frameのdesktop非表示状態には改善があるが、実native dialogを開いた内部に実現在名の貫通窓/残し材が存在しない。655/661は通常の選択行、663は24px下罫のheaderで、前回の本体/展開一貫性を解消していない。

改善: 実dialog内のnative情報へ実現在名の貫通窓/残し材を同じ前後関係で配置する。外側launcherのcurrentFootだけを変更して完了としない。実current移設が必要ならopen/close/updateの所有focus・ARIA・cleanupと全行の固定予約を確認する。

根拠: captures/reviewer-pose-7/caption-rail-navigation-7-mobile.png, captures/reviewer-pose-7/caption-rail-navigation-7-initial.png

## R662 blueprint-dock-navigation — pass

上治具/索引/下送りの実接触とモバイル接続を維持。固定3合格を継承。

## R663 ribbon-top-navigation — adjust

外枠を廃し、ブランド帯が実側切口へ通る上部の非対称接合と独立一覧へ改善。通常の材の通過は成立。実dialogでは旧下罫headerが残る。

**R663-actual-dialog-material:** 外側frameのdesktop非表示状態には改善があるが、実native dialogを開いた内部にブランド帯と実現在名の交差/切口が存在しない。655/661は通常の選択行、663は24px下罫のheaderで、前回の本体/展開一貫性を解消していない。

改善: 実dialog内のnative情報へブランド帯と実現在名の交差/切口を同じ前後関係で配置する。外側launcherのcurrentFootだけを変更して完了としない。実current移設が必要ならopen/close/updateの所有focus・ARIA・cleanupと全行の固定予約を確認する。

根拠: captures/reviewer-pose-7/ribbon-top-navigation-7-mobile.png, captures/reviewer-pose-7/ribbon-top-navigation-7-initial.png

## R664 ceramic-dock-navigation — adjust

独立L片を廃し96pxの連続湾曲路と実中央楕円開口、ずれた子床への重なりへ改善。通常形の一体性と読字背景は成立。mobile孔の下層を残さない調整が必要。

**R664-mobile-underlayer:** desktopの中央の楕円孔は実背景へ抜けるが、実mobile dialogには全面の不透明backgroundが残る。子の材から抜いた部分はdialogと同じ淡色で埋まり、全層の空隙にならない。

改善: dialog全体の塗りを中央の楕円孔の下に残さず、header/native読む面/子床/閉じる/操作案内だけに不透明な下地を確保する。暗色/明色/背後の文字の上で孔は透過し、native文字は透けないことを実画像確認する。

根拠: captures/reviewer-inline-7/ceramic-dock-navigation-mobile-open.png, snapshot/round-7/source/ceramic-dock-navigation/styles.css

## 実施検査

- 固定7作者100hash一致、CSS10配布一致、作者100は固定6と同一。captures/reviewer-hashes-7.json。
- 6の限定材料像/幾何も証拠として保持。6 sharedのcurrent-row属性欠落を独立再現し報告、7で再設定された実舌/currentRowsを確認。6のnative合格は宣言しない。
- 固定7全10初期/実dialogを独立撮影。実inline親子/long320390768×LTRRTL 24条件、actual mobile detailsも確認。reviewer-pose-7、reviewer-inline-7、reviewer-open-groups-7。
- 655/661 current a/b/child/missing、foot一つ、footer/window/inline切替、focus保持を実操作。幾何の比較は幅/高さ/相対位置を使い、viewport focus scrollによる絶対y変化を不具合と混同しない。reviewer-current-7/checks.json。
- 全10通常hover/leave/reenter文字相対矩形とfont固定、sidebar60幅方向条件、dark/light forced像を採取。reviewer-nav-extra-7。
- reviewer-navigation-7: 5件actual href/controlled/update焦点/group/mobile/Tabtrap/Escape/empty/4layouts×320390768×LTRRTL/44hit/reduced/dead cleanup成功。pageerrors=[]
- reviewer-navigation-B-7: 5件actual href/controlled/update焦点/group/mobile/Tabtrap/Escape/empty/4layouts×320390768×LTRRTL/44hit/reduced/dead cleanup成功。pageerrors=[]

## 範囲と限界

- React4形式/恒久HTTP/他20部品の全既存互換性は作者側検証。独立では今回10のactual portable nativeを操作。
- 6で作者側検出のResizeObserver errorについては7の実pageerror収集で再確認。作者の説明だけで解決としない。
- 合否は提案採用や寸法追従で決めず、実形/文字/接点/状態の整合性で判定。
