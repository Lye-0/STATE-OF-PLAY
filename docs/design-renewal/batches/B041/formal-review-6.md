# B041 round-6 限定再検査

8 pass、R561／R574はadjust。R573/R574のエラー遮蔽は解消。R574の長い章名の実行高への追随と、R561の窓の小口描画が残る。

## R560 book-ribbon-timeline — pass

通常形と10authorファイルはround-2から不変。Tの実日時しおり／開いた記録面の合格を継承し、今回native回帰も成功。 round-5から対象10ファイル不変を確認して合格を継承。

## R561 index-tab-timeline — adjust

20pxの後帯の露出により、一枚の背面が履歴全体へ続くことは改善した。実窓と日時は維持。ただし追加したdrop-shadowはclip-pathと同じ疑似面へ掛かり、切口に4pxの小口を描いていない。3倍の実撮影でも窓は平坦な二色の境界のまま。残る前後の視認だけを限定調整する。

**R561-window-lip-not-rendered**

後帯の連続面は見えたが、窓の小口は描画されていない。同じ::beforeのdrop-shadow(4px 4px)とclip-pathでは切口に沿う影が残らず、六角の青い面と前紙が平坦に接する。小口があるという説明と実像が一致しない。

改善方向：同じ切口を持つ暗い別の下層を前紙から4px程度ずらす等、窓内部へ実際に見える小口を描く。前紙のclipを保ち、日時の本文を覆わない。後帯20pxと現在の主構造は維持し、LTR/RTLの拡大像で縁の描画を確認する。

証拠：docs/design-renewal/batches/B041/captures/reviewer-window-6/window-ltr.png, docs/design-renewal/batches/B041/captures/reviewer-window-6/computed.json, docs/design-renewal/batches/B041/captures/reviewer-materials-6/index-tab-timeline-1000-ltr-true.png

## R562 blueprint-route-timeline — pass

独立円＋矢印を廃し、幅40pxの一つの曲がる経路が全日時の角を交互に回る。実日時120×72pxの節、12px内側へ重なる本文、次の節へ渡る面が連続。時間差を偽の長さへ変換せず、読む順序を図形にした。R552の二レール、R282の定規軸、R379の週床とはネイティブ情報の配置と交互の角の構造が異なりA合格。 round-5から対象10ファイル不変を確認して合格を継承。

## R563 loop-history-timeline — pass

通常形と10authorファイルはround-2から不変。Tの日時輪／セリフ見出し／線の調整の合格を継承。今回native長文・RTL・強制色も成功。 round-5から対象10ファイル不変を確認して合格を継承。

## R564 recessed-record-timeline — pass

四辺の角丸囲いを撤去し、内容全高へ伸縮する外形をSVG maskで実際に切り、曲面から平底と露出した右・下の小口へ続く一体の面に変更。20件でも角だけの飾りではなく全長で輪郭が変わる。本文は曲面の最大幅より内側へ予約される。全幅楕円のR384、両直壁のR424、直線チャンネルR557との構造差が見え、A合格。 round-5から対象10ファイル不変を確認して合格を継承。

## R565 letterpress-history-timeline — pass

単なる同じ左揃えの縦積みから、右の72px実日時、左の26px実summary、96px掛け込んだ本文の三つの基線へ再編。日時が大きい空白と横の重みを作り、見出しと本文がそれに応答する非対称な編集面になった。実時刻・出来事・説明だけで構成し、偽の文字や額縁を増やしていない。狭幅48px／24px掛け込みでも全文と階層を保つ。物理機構の模倣ではなく、この実情報の組版としてA合格。 round-5から対象10ファイル不変を確認して合格を継承。

## R571 folio-chapter-wizard — pass

Tの章番号・題字・入力紙の合格形を保持。5件以上は縦並びへ変わり、7件の短名も一行の実幅を確保。通常nextの焦点も改善し、調整指摘は解消。 round-5から対象10ファイル不変を確認して合格を継承。

## R572 station-route-wizard — pass

Tの44px駅／共通経路を保持。5件以上の縦並びにより7件の「Step 1」分断を解消。通常next／controlled拒否の焦点を独立再確認。造形とUI合格。 round-5から対象10ファイル不変を確認して合格を継承。

## R573 folded-step-wizard — pass

round-5で合格した現在章→実空隙→入力紙→逆の返面を保持。errorをフォーム後／footer前の独立grid行へ移し、長いserver errorが実3fieldsを覆う問題を解消。320/768×LTR/RTLの4条件で全入力との交差0、文字とcaretへ戻って訂正できる。全現在位置・7手順・空状態・native protocolも成功。

## R574 stone-path-wizard — adjust

長いエラーの遮蔽と、短い7章名で約600px生じた入力下の空床は解消。通常の橋と自然高の床は保持。ただし広幅の絶対配置navの実行高を104pxと仮定し、フォームをcurrentIndex×104pxで置いたため、長い章名が行高を増やすと現在章との対応とroot寸法が崩れる。

**R574-long-row-fixed-offset**

768pxで全7章を長名にすると各nav行は168.375pxだが、入力床の上端はindex×104pxのまま。第7章の床は現在章より386.25px上へずれ、橋が本文でなくfooter付近へ接する。nav末尾はroot外へ80.39px、第1章を現在にした場合は450.63pxはみ出す。短いStep 1のcount試験では検出できない。

改善方向：固定104pxの累積と絶対配置navを廃し、実行高を共有するgridへ現在の自然高panel／error／footerを置く。あるいは実行高を正確に投影し、文字・幅・font変更にも追随させる。短名だけでなく全7章が長名、全current、LTR/RTLで橋の接点・navのroot内収納・入力とNextの近接を同時確認する。

証拠：docs/design-renewal/batches/B041/captures/reviewer-long-bridge-6/checks.json, docs/design-renewal/batches/B041/captures/reviewer-long-bridge-6/s6-ltr.png, docs/design-renewal/batches/B041/captures/reviewer-long-bridge-6/s6-rtl.png, docs/design-renewal/tools/review-b041-long-bridge-r6.mjs

## 検証範囲

- 固定round-6の100author hash／10actual portable CSS一致。round-5から97ファイル不変、変更はR561/R573/R574のCSS各1ファイルのみ。reviewer-hashes-6.json。
- 変更3件の独立native全protocol成功。R561 timelineは長文／click／Enter／制御／focus／reset／強制色等。R573/R574は実form検証／DOM・Undo・caret／制御／完了／empty／disabled／forced/reduced等。
- 全4 Wizard×1/2/4/7章×全current×320/768×LTR/RTLの224条件を再実行。短名一行／読字幅／ARIA list／current input／幅収まり成功。reviewer-wizard-counts-6。
- 長いserver error＋3実fields（最後textarea）の全4×320/768×LTR/RTL=16条件、全入力との矩形交差0。R573/R574の実像でも入力→error→footerの順を確認。reviewer-errors-6。
- R574追加：768px、7章全て長名、current第1/4/7×LTR/RTL。実行高168.375px、固定104pxとの差によるずれとroot外突出を記録。reviewer-long-bridge-6。
- R561全閉／全展開×1000/320×LTR/RTLの8条件を独立撮影・normal hover/leave/reenterで矩形／font固定確認。窓をdeviceScaleFactor3で拡大しcomputed filter/clipも保存。reviewer-materials-6、reviewer-window-6。
- その他7件の通常形とauthor70ファイルは不変として正式5の独立判断を継承。共有Wizard runtimeの新規変更は本修正版にない。

## 限界

- 独立操作はChromium native。React4形式と主担当の全基盤回帰は補助ログ参照。
- 長い全章名の追加試験は広幅768pxの第1/4/7で再現。将来修正の検証では全currentと幅変更を含める必要がある。
- 既合格7件の全native protocolは本roundで再実行せず不変hashで継承（Wizard count/errorのT2回帰は再実行）。
