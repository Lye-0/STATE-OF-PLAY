# B045 round 5 独立レビュー

**changes_requested — 8 pass / 2 adjust。** R620切口は合格。R618孔の描画範囲とR622操作案内の重なりが残件。

## R615 ledger-command — pass

Tの左罫と実選択の強調へ整理し、グループと行の多重罫を弱めた。元の帳簿の読む順序を保つ改善として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。

## R616 index-drawer-command — pass

Tの紙の積層を保ち、検索口と実選択の小口へ厚みを集約した。通常行が重い箱の連続に戻らず、説明とshortcutの読む幅を維持している。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。

## R617 rail-bank-command — pass

各実行の16px横桁が両レールへ8px入り、狭幅でshortcutが本文下へ移っても桁が支持を担う。字面を背面桁から分離し、前版の接合不足を解消した。 round5でも正本10ファイル不変を確認し、合格を継承。

## R618 stitch-command — adjust

launcherを一列へ明示し、見出し・孔面・実起動buttonが本来の縦配置へ戻った。最後のはみ出す糸は止まったが、孔は旧repeat範囲のままで、端の未使用孔・半孔が残る。

問題: 糸だけinline-end36pxへ制限し、上下孔のrepeat幅を揃えていない。展開幅600で上孔中心568pxが残り、下紙右端564pxにはその孔の一部だけが欠けて見える。初期幅414でも最後の下孔が自由端で切れる。全孔と糸が対応する縫合に未達。

改善: 上下孔と糸に共通の有効幅/同じ本数を使う。最終孔中心が双方の紙端から半径6px以上内側に収まる個数へ丸め、端の部分孔と単独上孔を描かない。単に糸の終端を切る修正で済ませない。LTR/RTL・初期/展開・320/390/768で確認。

証拠: captures/reviewer-commands-5/stitch-command-initial.png, captures/reviewer-commands-5/stitch-command-open.png, captures/reviewer-diagnostic-5/measure.json

## R619 open-frame-command — pass

Tの読みやすい余白と大きい項目名を保ち、上下を囲わない高さの異なる二本の外側線へ整理した。新たな材料機構のA合格としてではなく、元の構成を磨くT基準で判定。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。

## R620 bookplate-command — pass

外角cutを廃し、横材の内部に二本の実mask切口を開けた。切口越しに中央の縦の読む紙と外の空間が区別でき、実題字から候補へ続く一枚の票を横材が保持する関係が成立した。狭幅12px切口・RTL反転・glyph下地を確認。

## R621 caption-command — pass

Tの分類名を候補名と同じ読む起点へ揃え、往復する視線を減らした。細い説明罫と選択面を分け、元の可読性整理として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。

## R622 blueprint-command — adjust

実件数面はqueryと同じ行で接続し、浮く札を解消した。しかし二つの操作案内spanを同一セルへ置いて互いに重なり、第一案内が見えなくなった。

問題: 両footer spanにgrid-column:2/grid-row:6を指定したため同じ矩形へ重なる。独立実測は両方x304,y775.8,width496,height88.4で完全一致。後の「↵ 実行」の背景が「↑↓ 選択」を遮蔽する。

改善: 実操作案内を一つのflex wrapperへまとめる、又は各spanへ別のrow/columnを割り当てる。二つのTEXT_NODE実Rangeを交差検査し、通常/forced/長文/RTLで双方を読めることを確認。

証拠: captures/reviewer-commands-5/blueprint-command-open.png, captures/reviewer-diagnostic-5/measure.json, snapshot/round-5/source/blueprint-command/styles.css

## R623 ribbon-command — pass

Tの分類札と選択の強さを整理。実groupを52pxの広い帯として読み、20pxの返端と薄い候補紙へ分けた。分類と選択が競わず、groupなしに偽の帯を作らない。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。 round5でも正本10ファイル不変を確認し、合格を継承。

## R624 ceramic-command — pass

丸角カード＋台形脚を廃し、短い実検索面から76pxの全幅の曲面を経て72pxずれた長い候補底へ連続する形になった。候補底が曲面に24px重なり、一枚の陶の表裏として接合を実像で読める。R604の片側首と大きい空隙で分ける皿とは異なる。 round5でも正本10ファイル不変を確認し、合格を継承。

## 検査

- 固定5正本100 SHA256一致/配布CSS10一致。round3から7ファイル変更、7合格部品70ファイル不変。captures/reviewer-hashes-5.json。
- 独立fixed portable native Command10全成功。API/disabled/semantic id/live label/DOM/caret/Undo/focus/path/Enter/Escape/controlled/async/IME/cleanupを再検証。captures/reviewer-commands-5/checks.json。
- 長い実候補17件、320/390/768 LTR/RTL、横overflow/画面内/44px hit、forced dark/reducedを実操作・撮影。
- 追加全10の実group/深さ3祖先jump/current aria/復帰focus/groupなし、dark・light forced、320/768 LTR/RTL、通常hover→leave→reenterの相対矩形/fontを確認。captures/reviewer-extra-5/checks.json。
- R618の孔/糸の実幅、R622の二つのfooter実矩形を独立browserで診断。captures/reviewer-diagnostic-5/measure.json。
- R620のmask内部切口を通常・長文RTL320・forced画像と固定CSSで確認。

## 限界

- native総合helperはAPI・root幅・hitを検査するが、今回のfooter同士の遮蔽を検出しない。成功を見た目/UI合格へ読み替えない。
- React4形式/親galleryは独立再実行の対象外。
- 対象は不変round5。今後の修正を遡及適用せず、既合格通常造形は不変hashで継承した。
