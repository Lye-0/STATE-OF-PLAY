# B045 round 6 独立レビュー

**pass — 全10件合格。** R618の4孔・4糸とR622操作案内の残件を解消。

## R615 ledger-command — pass

Tの左罫と実選択の強調へ整理し、グループと行の多重罫を弱めた。元の帳簿の読む順序を保つ改善として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R616 index-drawer-command — pass

Tの紙の積層を保ち、検索口と実選択の小口へ厚みを集約した。通常行が重い箱の連続に戻らず、説明とshortcutの読む幅を維持している。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R617 rail-bank-command — pass

各実行の16px横桁が両レールへ8px入り、狭幅でshortcutが本文下へ移っても桁が支持を担う。字面を背面桁から分離し、前版の接合不足を解消した。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R618 stitch-command — pass

上下の孔と糸を対応する4座標へ統一。幅Wの上中心は20%+12/40%/60%−12/80%−24、下紙のglobal中心24+(W−60)×20/40/60/80%と一致する。実320/390/768 LTR/RTLで端から6px以上の孔余白と4本の接続を確認。launcher一列、展開後の布と紙の水平縫合が成立した。

## R619 open-frame-command — pass

Tの読みやすい余白と大きい項目名を保ち、上下を囲わない高さの異なる二本の外側線へ整理した。新たな材料機構のA合格としてではなく、元の構成を磨くT基準で判定。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R620 bookplate-command — pass

外角cutを廃し、横材の内部に二本の実mask切口を開けた。切口越しに中央の縦の読む紙と外の空間が区別でき、実題字から候補へ続く一枚の票を横材が保持する関係が成立した。狭幅12px切口・RTL反転・glyph下地を確認。 round6では正本10ファイル不変を照合して合格を継承。

## R621 caption-command — pass

Tの分類名を候補名と同じ読む起点へ揃え、往復する視線を減らした。細い説明罫と選択面を分け、元の可読性整理として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R622 blueprint-command — pass

操作案内をDOM順のrow6/row7へ分離し、両span矩形と実文字Rangeが交差しないことを320/390/768 LTR/RTLで確認。実件数とqueryの同じ横材、96px接合と下の縦の読む面を保持し、浮く件数と読順の不整合を解消した。

## R623 ribbon-command — pass

Tの分類札と選択の強さを整理。実groupを52pxの広い帯として読み、20pxの返端と薄い候補紙へ分けた。分類と選択が競わず、groupなしに偽の帯を作らない。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## R624 ceramic-command — pass

丸角カード＋台形脚を廃し、短い実検索面から76pxの全幅の曲面を経て72pxずれた長い候補底へ連続する形になった。候補底が曲面に24px重なり、一枚の陶の表裏として接合を実像で読める。R604の片側首と大きい空隙で分ける皿とは異なる。 round5でも正本10ファイル不変を確認し、合格を継承。 round6では正本10ファイル不変を照合して合格を継承。

## 検査範囲

- 固定6の正本100 SHA256一致/配布CSS10一致。round5との差はR618/R622 styles.cssだけ、98ファイル不変。他8部品80ファイル不変。captures/reviewer-hashes-6.json。
- 変更2件を固定portable nativeで独立再実行：API/disabled/semantic id/live label/DOM/caret/Undo/focus/execute/path/Escape/controlled/async/IME/empty/cleanup全成功。長文17候補320/390/768 LTR/RTL、44px hit、overflow/viewport、forced/reduced含む。captures/reviewer-commands-6/checks.json。
- 変更2件で実group/深さ3/current aria/祖先jump/focus/no fake group、通常hover→leave→reenter相対矩形/font、dark・light forcedを追加確認。captures/reviewer-extra-6/checks.json。
- 変更2件×320/390/768×LTR/RTL=12条件で初期/展開の追加撮影。R618の上下中心一致/孔端6px余白と有効mask、R622の両footer矩形と文字Range非交差をassert。captures/reviewer-contact-6/checks.json。
- 残る8件はround5独立native/追加操作成功と不変hashを継承し、今回の限定検査を全10再実行と扱わない。通常造形と近似比較は承認済み判定を維持。

## 限界

- 今回独立実操作は変更2件への限定検査。他8は不変hashと前回の独立操作を継承。
- React4形式/主担当gallery/恒久テストは本レビューの独立実行ではない。
- 無制限の階層や幅は保証せず、指定幅とLTR/RTL・深さ3を実検証した。
