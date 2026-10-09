# B045 round 3 独立レビュー

**changes_requested — 7 pass / 3 adjust。** R617接合とR624主形を合格。R618/R620/R622に具体的な未解決点。

## R615 ledger-command — pass

Tの左罫と実選択の強調へ整理し、グループと行の多重罫を弱めた。元の帳簿の読む順序を保つ改善として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。

## R616 index-drawer-command — pass

Tの紙の積層を保ち、検索口と実選択の小口へ厚みを集約した。通常行が重い箱の連続に戻らず、説明とshortcutの読む幅を維持している。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。

## R617 rail-bank-command — pass

各実行の16px横桁が両レールへ8px入り、狭幅でshortcutが本文下へ移っても桁が支持を担う。字面を背面桁から分離し、前版の接合不足を解消した。

## R618 stitch-command — adjust

queryの布と候補紙の水平縫合に主形を改め、四辺台紙＋孤立点線を廃した。展開形の方向は成立するが、起動画面のimplicit列と、端の対応しない糸が残る。

問題: launcherの実buttonとseam pseudoを同じgrid-rowへ置いたが、button等のgrid-columnが未指定。固定3初期像で見出し面が幅140pxへ潰れ、起動buttonは右の別列へ飛び、紙の孔面から離れた。

改善: symbol/copy/buttonを本来の一列へ明示配置し、pseudoだけ別列を作らないようにする。初期320/390/768 LTR/RTLの実文字幅とbutton接合を確認。

証拠: captures/reviewer-commands-3/stitch-command-initial.png, snapshot/round-3/source/stitch-command/styles.css

問題: 幅600の実frameで糸の最後の中心x568に対し下紙右端は564。最後の糸が紙外へ垂れ、対応する下孔へ入らない。上は全幅repeat、下は左右24/36を引いた幅のrepeatで、描く本数が一致しない。

改善: 上下孔と糸を同じ有効内幅・同じ本数へ制限する。両端に少なくとも孔半径6pxの余白を持たせ、partial孔や片端だけの糸を生成しない。RTL/任意幅でも同じ対応を保つ。

証拠: captures/reviewer-commands-3/stitch-command-open.png, captures/reviewer-diagnostic-3/measure.json

## R619 open-frame-command — pass

Tの読みやすい余白と大きい項目名を保ち、上下を囲わない高さの異なる二本の外側線へ整理した。新たな材料機構のA合格としてではなく、元の構成を磨くT基準で判定。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。

## R620 bookplate-command — adjust

四辺台紙を廃し、実題字から候補へ続く縦の一枚紙と横のquery面へ再構成。外形の変更は認めるが、説明の実斜め切口がなく、通し機構の実装が未完。

問題: queryのbeforeにあるpolygonは横面の外周の二角を落とすだけ。前紙はframe::beforeで連続し、紙にも横面内部にも実切口がない。実像は幅広の帯が縦紙へ重なるだけで、説明の「二つの大きい斜め切口へ通す」構造になっていない。

改善: 本当に紙を通す口を全層に作るか、異なる支持構造へ置き換える。斜め外形の角だけを切口と呼ばない。口の前唇が紙端を8px程度覆い、紙が前後へ切り替わる位置を実描画で見せる。文字の下へ孔を持ち込まない。

証拠: captures/reviewer-commands-3/bookplate-command-open.png, snapshot/round-3/source/bookplate-command/styles.css

## R621 caption-command — pass

Tの分類名を候補名と同じ読む起点へ揃え、往復する視線を減らした。細い説明罫と選択面を分け、元の可読性整理として合格。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。

## R622 blueprint-command — adjust

大きい青い外囲いを廃し、query横材と候補縦面を96pxの折口で繋ぐ構図に変更した。ただしfooterの自動配置と独立して浮く実件数の面が、読順と支持の一貫性を損なう。

問題: footerをdisplay:contentsにした子spanにgrid-rowがなく、第一案内「↑↓ 選択」がheaderとqueryの間の空rowへ自動配置される。実測では第一案内y197.6、queryy262で、一覧の後の操作案内でなくなっている。

改善: 操作案内の各子を候補一覧・errorの後の明示行へまとめる。currentgroup/ancestor/empty/errorで空行への自動配置が起きないよう確認する。

証拠: captures/reviewer-commands-3/blueprint-command-open.png, captures/reviewer-diagnostic-3/measure.json

問題: 実件数は80pxの独立矩形で、候補面との間24pxが空き、上のqueryからも44px離れる。説明の「軸」や接合としては浮く小札に見える。狭幅ではCOMMANDSもCOMMA/NDSへ分かれ、長い一文字列の折返しが設計情報のまとまりを弱める。

改善: 実件数を現在の横材か折口に接合する読む面へ移す、または独立面を実梁で保持する。小さな数値札を足すだけにしない。英字ラベルはまとまる内幅を確保し、native countを保持する。

証拠: captures/reviewer-commands-3/blueprint-command-open.png, captures/reviewer-commands-3/blueprint-command-long-rtl-320.png, captures/reviewer-diagnostic-3/measure.json

## R623 ribbon-command — pass

Tの分類札と選択の強さを整理。実groupを52pxの広い帯として読み、20pxの返端と薄い候補紙へ分けた。分類と選択が競わず、groupなしに偽の帯を作らない。 round2との正本10ファイル不変を照合し、通常形は継承。固定3実native回帰を再実行。

## R624 ceramic-command — pass

丸角カード＋台形脚を廃し、短い実検索面から76pxの全幅の曲面を経て72pxずれた長い候補底へ連続する形になった。候補底が曲面に24px重なり、一枚の陶の表裏として接合を実像で読める。R604の片側首と大きい空隙で分ける皿とは異なる。

## 実検査

- 固定3正本100hashと配布CSS10一致。round2から25ファイル変更、既合格T5件50ファイル不変。captures/reviewer-hashes-3.json。
- 独立portable native Command全10を固定3で再実行し成功。disabled skip/semantic id/live labels/DOM/caret/Undo/focus/execute/path/Backspace/Escape/controlled/async duplicate/error/IME/empty/cleanupを確認。captures/reviewer-commands-3/checks.json。
- 同protocolで長文17候補×320/390/768 LTR/RTL、画面内/横overflow/44px hit、dark forced/reducedを実操作・撮影。
- 追加10件で実group、3階層/current aria、祖先jump/input focus、group無し、dark/light forced、320/768 LTR/RTL、通常hover→leave→reenterの文字相対矩形/font固定を確認。captures/reviewer-extra-3/checks.json。
- R618 launcherと孔/糸の端、R622 footerと件数の実座標を別browserで再測定。captures/reviewer-diagnostic-3/measure.json とlauncher forced画像。
- 主担当の4変更予定は固定3へ遡及せず、今回の判定は不変round3だけに基づく。

## 限界

- native総合helperはroot幅・hit/APIを確認するが、R618のimplicit列やR622の意味順の自動配置を検出しなかった。成功を造形/UI合格へ読み替えていない。
- React4形式・主担当galleryは独立実行していない。
- round4以降の修正は本報告の対象外。元730全件の再撮影はせず、保存元監査と近似承認形を比較した。
