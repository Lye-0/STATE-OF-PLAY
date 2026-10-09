# B045 round 2 独立レビュー

**changes_requested — 5 pass / 1 adjust / 4 redesign。** 操作検証10件成功と造形の合否を分離。

## R615 ledger-command — pass

Tの左罫と実選択の強調へ整理し、グループと行の多重罫を弱めた。元の帳簿の読む順序を保つ改善として合格。

近似比較: R615 original, R621, R601。

## R616 index-drawer-command — pass

Tの紙の積層を保ち、検索口と実選択の小口へ厚みを集約した。通常行が重い箱の連続に戻らず、説明とshortcutの読む幅を維持している。

近似比較: R616 original, R251, R511。

## R617 rail-bank-command — adjust

二本の開いたレールが主形に出たが、実記号とshortcutの滑り子がレールへ接続しない。狭幅では右の滑り子が本文下へ移り、材料の関係自体が変わる。

問題: 通常frame余白40px＋list余白16pxで左滑り子は全体x56、左railはx0〜24なので32px空く。狭幅もx40対rail16で24px離れる。右shortcutもrailを受けず、狭幅は本文の下へ移るため対向レールの滑り子ではなく普通の小矩形に見える。

改善方向: 文字・shortcut・hitは固定し、実行ごとの一枚の横桁で両レールへ接続する等、支持材の責務を分ける。桁の両端が各railへ4〜8px重なり、narrowのshortcut改行にも接合を失わない構造を実描画で確認する。単に二本の線を太くするだけでは不可。

証拠: captures/reviewer-commands-2/rail-bank-command-open.png, captures/reviewer-commands-2/rail-bank-command-long-rtl-320.png, snapshot/round-2/source/rail-bank-command/styles.css

近似比較: R617 original, R619, R154, R063。

## R618 stitch-command — redesign

大きい角欠きの紫の下敷きに白い紙を載せ、外側へ白い短線を並べた像。縫いが材料を保持する主構造になっていない。

問題: 右の10px repeating-gradientは紙の外の布に描かれるだけで、紙と布のどの孔も通らない。左下72pxの切欠きも大きい四辺台紙の一角を落とすだけで、普通の色枠を離れない。

改善方向: 四辺下敷きと孤立した点線を廃止。実queryの布面と実候補の読む紙を、一つの大きい横の縫合帯で接続する等、操作の分かれ目を材料の接合にする。例えば帯高さ40〜48px、双方に対応する実孔を設け、糸が8〜12pxの空隙を渡って同じ孔へ入る。既存R598の片側の縦布背＋各紙穴の単なる拡大は避ける。

証拠: captures/reviewer-commands-2/stitch-command-open.png, captures/reviewer-commands-2/stitch-command-long-rtl-320.png, snapshot/round-2/source/stitch-command/styles.css

近似比較: R618 original, R598, R538, R438。

## R619 open-frame-command — pass

Tの読みやすい余白と大きい項目名を保ち、上下を囲わない高さの異なる二本の外側線へ整理した。新たな材料機構のA合格としてではなく、元の構成を磨くT基準で判定。

近似比較: R619 original, R617, R164。

## R620 bookplate-command — redesign

黄土色の四辺台紙と対角の欠き、太い題字の帯が中心。展開後の大半は普通の矩形一覧であり、元監査の主形不足を解消していない。

問題: 48pxの対角cutと上下面8pxの小口を加えても、内紙を四辺で囲う額装の構成に留まる。題字の帯はその上に置かれ、蔵書票を保持する固有の接合や一枚の材料の通り道になっていない。

改善方向: 四辺台紙を廃止する方向で再構成。実タイトルの票が大きい二本の斜め切口を通り、その同じ一枚の票が実候補の読む面へ続く等、実タイトルと本文の関係を主形にする。切口は少なくとも票の8pxを覆い、紙端と裏側が別の面として見えること。単なる角留め・小栞・既存の綴じ環の転用は避ける。

証拠: captures/reviewer-commands-2/bookplate-command-open.png, captures/reviewer-commands-2/bookplate-command-long-rtl-320.png, snapshot/round-2/source/bookplate-command/styles.css

近似比較: R620 original, R611 before redesign, R218, R431。

## R621 caption-command — pass

Tの分類名を候補名と同じ読む起点へ揃え、往復する視線を減らした。細い説明罫と選択面を分け、元の可読性整理として合格。

近似比較: R621 original, R615, R599。

## R622 blueprint-command — redesign

濃紺の通常パネル内に検索の矩形と候補一覧の矩形を置き、実件数を右上の小枠へ移した構成。色面の組み分け以上の主形がない。

問題: 92pxの件数欄は実値である点は正しいが、件数を移すだけではAの独立性にならない。二つの白い面と外の青い矩形は普通のアプリパネルと同じ外形・接合で、設計面という説明に依存している。

改善方向: 外の青い矩形を撤去し、実queryの入力面と候補の図面を直交する作業面として組む等、明確な開口と接合を持つ主形へ。実件数を横材の端の読む面へ置き、実候補紙がその横材に12px入るなど、実情報の位置が材料を決めること。偽目盛り・偽操作の追加、板の隅だけを面取りする案は避ける。

証拠: captures/reviewer-commands-2/blueprint-command-open.png, captures/reviewer-commands-2/blueprint-command-long-rtl-320.png, snapshot/round-2/source/blueprint-command/styles.css

近似比較: R622 original, R532, R582 before redesign, R537 before redesign。

## R623 ribbon-command — pass

Tの分類札と選択の強さを整理。実groupを52pxの広い帯として読み、20pxの返端と薄い候補紙へ分けた。分類と選択が競わず、groupなしに偽の帯を作らない。

近似比較: R623 original, R283, R611。

## R624 ceramic-command — redesign

普通の丸角の青い一覧パネルの下へ台形脚を付けた像。丸い検索口と白い丸アイコンは元形の拡大に留まり、Aの主形に足りない。

問題: 主な読む面は通常の丸角カードのまま、下の脚は広い台形の装飾追加として見える。陶板そのものの断面や開口が実query・候補の配置と結び付かない。

改善方向: 丸角カード＋別脚を廃止し、一枚の陶の折れ・深い開口・断面が実検索と候補の位置を決める構造へ。例えば実queryを上の短い折れ面、候補を幅の異なる長い平底へ置き、間に全幅の明瞭な陶の折返しが入る構図から検討する。小脚や丸いアイコンだけで差を作らない。直前承認R604の口→片側首→浅皿は再利用しない。

証拠: captures/reviewer-commands-2/ceramic-command-open.png, captures/reviewer-commands-2/ceramic-command-long-rtl-320.png, snapshot/round-2/source/ceramic-command/styles.css

近似比較: R624 original, R504 before redesign, R215, R604。

## 実施した検査

- 固定100正本SHA256と配布CSS10一致。captures/reviewer-hashes-2.json。
- 独立Chromium/portable native Command10件全成功：disabled skip、semantic id保持、label/trigger更新、native DOM/caret/focus/Undo、Enter実行、階層drill/更新後path/Backspace、Escape復帰、controlled open、disabled、async二重抑止/error、IME、empty、cleanup。captures/reviewer-commands-2/checks.json。
- 同native protocolで長い実候補17件×320/390/768 LTR/RTL、dialog画面内・横overflow無し・44px操作、forced dark/reducedを確認し実画像保存。
- 追加全10で実role=group、深さ3、aria-current、実祖先jump/input focus、groupなし偽見出し無しを確認。depth3 dark/light forced、groupなし320/768 LTR/RTLを撮影。captures/reviewer-extra-2/checks.json。
- 追加全10、通常motionのhover→leave→reenterで候補文字のdialog相対矩形とfont固定を確認。同extra helper。
- 全10の初期/展開実像を元監査理由・原版sheet0と比較し、近似の既承認構造を参照。Tの改善とRの主形再設計の合格理由を分けた。

## 限界

- React4形式と主担当galleryは別検証。本レビューで独立再実行したのは固定native実配布であり、React成功として取り扱わない。
- 全730件を今回再撮影していない。元監査と保存画像・既承認近似を比較した。
- 改善案は形の候補と満たす条件であり、指定寸法や名称だけで次回の合格を保証しない。
