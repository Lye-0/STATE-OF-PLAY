# B041 round-7 最終独立検査

全10件 pass。R561の窓小口、R574の長い章名と実行高の残件を解消。

## R560 book-ribbon-timeline — pass

通常形と10authorファイルはround-2から不変。Tの実日時しおり／開いた記録面の合格を継承し、今回native回帰も成功。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R560, R300, R420

## R561 index-tab-timeline — pass

20px露出する共通の後帯を保持し、窓の下へ別の暗い紙面を実clipで4pxずらして配置。3倍実撮影で右・下の切口に小口が見え、単なる六角の色札ではなく前紙から後帯の日時を読む前後関係が成立した。native日時を覆わず、長文・RTL・強制色でも読む領域を保持。残件解消、A合格。

近似比較：元R561, R259, 旧R263, R163

## R562 blueprint-route-timeline — pass

独立円＋矢印を廃し、幅40pxの一つの曲がる経路が全日時の角を交互に回る。実日時120×72pxの節、12px内側へ重なる本文、次の節へ渡る面が連続。時間差を偽の長さへ変換せず、読む順序を図形にした。R552の二レール、R282の定規軸、R379の週床とはネイティブ情報の配置と交互の角の構造が異なりA合格。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R562, R563, R552, R282

## R563 loop-history-timeline — pass

通常形と10authorファイルはround-2から不変。Tの日時輪／セリフ見出し／線の調整の合格を継承。今回native長文・RTL・強制色も成功。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R563, R562

## R564 recessed-record-timeline — pass

四辺の角丸囲いを撤去し、内容全高へ伸縮する外形をSVG maskで実際に切り、曲面から平底と露出した右・下の小口へ続く一体の面に変更。20件でも角だけの飾りではなく全長で輪郭が変わる。本文は曲面の最大幅より内側へ予約される。全幅楕円のR384、両直壁のR424、直線チャンネルR557との構造差が見え、A合格。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R564, R384, R424, R557

## R565 letterpress-history-timeline — pass

単なる同じ左揃えの縦積みから、右の72px実日時、左の26px実summary、96px掛け込んだ本文の三つの基線へ再編。日時が大きい空白と横の重みを作り、見出しと本文がそれに応答する非対称な編集面になった。実時刻・出来事・説明だけで構成し、偽の文字や額縁を増やしていない。狭幅48px／24px掛け込みでも全文と階層を保つ。物理機構の模倣ではなく、この実情報の組版としてA合格。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R565, 旧R401, R545, R555

## R571 folio-chapter-wizard — pass

Tの章番号・題字・入力紙の合格形を保持。5件以上は縦並びへ変わり、7件の短名も一行の実幅を確保。通常nextの焦点も改善し、調整指摘は解消。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R571, R531

## R572 station-route-wizard — pass

Tの44px駅／共通経路を保持。5件以上の縦並びにより7件の「Step 1」分断を解消。通常next／controlled拒否の焦点を独立再確認。造形とUI合格。 round-5から対象10ファイル不変を確認して合格を継承。 round-6から10authorファイル同一として判定を継承。

近似比較：元R572, R552, R422

## R573 folded-step-wizard — pass

round-5で合格した現在章→実空隙→入力紙→逆の返面を保持。errorをフォーム後／footer前の独立grid行へ移し、長いserver errorが実3fieldsを覆う問題を解消。320/768×LTR/RTLの4条件で全入力との交差0、文字とcaretへ戻って訂正できる。全現在位置・7手順・空状態・native protocolも成功。 round-6から10authorファイル同一として判定を継承。

近似比較：元R573, R403, R513, R553

## R574 stone-path-wizard — pass

104pxの固定累積と絶対配置を廃し、実grid行を共有する現在章と入力島へ変更。現在章がh3・説明・fields・error・footerの自然高5行を持ち、過去／未来章も実際の高さでflowする。7章全てが長名でも第1／4／7の見出し上端と現在章が一致し、navはroot内へ収まる。Nextは最後の入力の近くに残り、長いerrorも入力を覆わない。狭幅の現在行直後へ開く配置、実橋の接点、native DOMとUndoも保持。残件解消、A／UI合格。

近似比較：元R574, 旧R394, R554, R374

## 検証範囲

- 固定round-7の100author hash／10actual portable CSS一致。round-6から98ファイル同一、変更はR561/R574のCSS各1ファイル。他8件80ファイル不変。reviewer-hashes-7.json。
- R561の窓をdeviceScaleFactor3で独立撮影。別下層による4pxの実小口が見える。reviewer-window-7/window-ltr.png。
- 変更R561 timeline／R574 Wizardの独立native全protocol成功。click/Enter、実入力検証、制御受入／拒否、DOM・caret・native Undo、焦点、戻る値、完了、empty、disabled、long320/390/768×LTR/RTL、forced dark/reduced、cleanupを確認。
- 全4 Wizardの1/2/4/7章×全current×320/768×LTR/RTL=224条件に加え、R574の長名7章第1/4/7×LTR/RTL=6条件、計230条件を独立実行。ARIA list、current input、短名一行・読字幅・幅収まり、長名でのroot収納・見出し整列・Next距離150px以内を確認。reviewer-wizard-counts-7/checks.json。
- display:contentsのpanelは自身のbboxが0になるため、検査helperを実h3／説明／fieldsの集合矩形へ修正。旧helperのbbox>0失敗を本体の欠陥として扱っていない。
- 長いserver error＋3実fields（最後textarea）：全4×320/768×LTR/RTL=16条件で全入力との交差0。入力→error→footerの実像も確認。reviewer-errors-7。
- R574全7章長名のLTR／RTL画像を確認。橋が現在章から実入力床へ接し、過去／未来章がフォームの高さに応じて自然に続く。長文のroot外突出と固定累積の位置ずれは解消。
- 合格済み8件の通常造形は80authorファイル不変で正式6から継承。共有Wizard runtimeは本roundで変更されず、既確認の通常next焦点改善を維持。

## 限界

- 独立ブラウザはChromiumの固定portable native。React全4形式と共有全回帰は主担当ログの補助確認。
- 既合格8件の全native protocolは再実行せず不変hashで継承。ただしWizard4件のcount／長いerror回帰は再実行。
- CSS display:contentsのlistはChromiumのアクセシビリティスナップショットで確認。別エンジンや実スクリーンリーダーは未検証。
