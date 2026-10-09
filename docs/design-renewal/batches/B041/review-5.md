# B041 round-5 独立再検査

7 pass、3 adjust（R561／R573／R574）。主構造の再設計は進んだ。入力を覆うエラーと、多手順の過大な床を残したまま合格にはしない。

## R560 book-ribbon-timeline — pass

通常形と10authorファイルはround-2から不変。Tの実日時しおり／開いた記録面の合格を継承し、今回native回帰も成功。

近似比較：元R560, R300, R420

## R561 index-tab-timeline — adjust

正のフォルダタブを廃し、一つの後帯を前紙の140pxの実切口から読む構造へ変更。clip-pathの実穴とnative日時の位置は一致。ただし通常像では後帯の外縁が全て隠れ、六角の色札を貼ったように見える。構造の再設計は成立したが、前後と連続性を読ませる限定調整が必要。

**R561-negative-index-depth**

穴は実際に抜けているが、共通の後帯の外側が前紙に完全に覆われるため、三つの独立した六角の青い色札に見える。負の索引という主構造の前後と連続性が通常像で読めない。

改善方向：後帯を一側へ16–24px程度露出して一枚の連続した背面を示す。前紙の窓縁に3–5px程度の小口を設け、native日時が背面にあり前紙が覆う関係を明示する。正の小タブへ戻さず、文字と押面は固定する。

証拠：docs/design-renewal/batches/B041/captures/reviewer-materials-5/index-tab-timeline-1000-ltr-true.png, docs/design-renewal/batches/B041/snapshot/round-5/source/index-tab-timeline/styles.css

近似比較：元R561, R259, 旧R263, R163

## R562 blueprint-route-timeline — pass

独立円＋矢印を廃し、幅40pxの一つの曲がる経路が全日時の角を交互に回る。実日時120×72pxの節、12px内側へ重なる本文、次の節へ渡る面が連続。時間差を偽の長さへ変換せず、読む順序を図形にした。R552の二レール、R282の定規軸、R379の週床とはネイティブ情報の配置と交互の角の構造が異なりA合格。

近似比較：元R562, R563, R552, R282

## R563 loop-history-timeline — pass

通常形と10authorファイルはround-2から不変。Tの日時輪／セリフ見出し／線の調整の合格を継承。今回native長文・RTL・強制色も成功。

近似比較：元R563, R562

## R564 recessed-record-timeline — pass

四辺の角丸囲いを撤去し、内容全高へ伸縮する外形をSVG maskで実際に切り、曲面から平底と露出した右・下の小口へ続く一体の面に変更。20件でも角だけの飾りではなく全長で輪郭が変わる。本文は曲面の最大幅より内側へ予約される。全幅楕円のR384、両直壁のR424、直線チャンネルR557との構造差が見え、A合格。

近似比較：元R564, R384, R424, R557

## R565 letterpress-history-timeline — pass

単なる同じ左揃えの縦積みから、右の72px実日時、左の26px実summary、96px掛け込んだ本文の三つの基線へ再編。日時が大きい空白と横の重みを作り、見出しと本文がそれに応答する非対称な編集面になった。実時刻・出来事・説明だけで構成し、偽の文字や額縁を増やしていない。狭幅48px／24px掛け込みでも全文と階層を保つ。物理機構の模倣ではなく、この実情報の組版としてA合格。

近似比較：元R565, 旧R401, R545, R555

## R571 folio-chapter-wizard — pass

Tの章番号・題字・入力紙の合格形を保持。5件以上は縦並びへ変わり、7件の短名も一行の実幅を確保。通常nextの焦点も改善し、調整指摘は解消。

近似比較：元R571, R531

## R572 station-route-wizard — pass

Tの44px駅／共通経路を保持。5件以上の縦並びにより7件の「Step 1」分断を解消。通常next／controlled拒否の焦点を独立再確認。造形とUI合格。

近似比較：元R572, R552, R422

## R573 folded-step-wizard — adjust

独立chevron札を廃し、現在の大きい章から斜めの返しが32pxの実空隙を渡り、実フォームと下の返面が現在章の直後へ開く。将来章はその後へ続き、任意の現在位置に接続する。R553の日時紙やR513の固定スタンドとは、操作する章と入力領域が対応する構成が異なる。基本のA造形と多手順読字は合格。長いエラーの遮蔽だけを修正する必要がある。

**R573-error-overlays-fields**

実3fields（最後textarea）と長いbeforeNextエラーで、errorがpanelと同じgrid-rowにalign-self:end/z2で重なる。320pxでは全3入力が覆われ、768pxでもtextarea等が覆われる。エラーを読んで値を直す操作が遮られる。

改善方向：errorをフォームの後／footerの前の独立した通常flow行へ置き、その高さで全体を押し広げる。現在章・将来章のgrid-row投影も同じ規則で予約し、エラー長やfields数に依存する絶対位置・同一セルの重ね合わせを廃する。LTR/RTL、3入力＋textarea、長い非同期エラーで実矩形の非交差を検証する。

証拠：docs/design-renewal/batches/B041/captures/reviewer-errors-5/folded-step-wizard-320-ltr.png, docs/design-renewal/batches/B041/captures/reviewer-errors-5/checks.json, docs/design-renewal/tools/review-b041-error-r5.mjs

近似比較：元R573, R403, R513, R553

## R574 stone-path-wizard — adjust

同じ小石の反復と固定中央橋を廃し、24pxの連続する地形を実章の背へ通し、現在章の切口だけから渡り石が入力床へ入る。広幅は横接続、狭幅は現在行の直後へ開き、7件でも接続先を取り違えない。読字幅の指摘も解消。基本構造はA合格だが、エラー遮蔽と広幅多手順の過大な空床を調整する。

**R574-error-overlays-fields**

実3fields（最後textarea）と長いbeforeNextエラーで、errorがpanelと同じgrid-rowにalign-self:end/z2で重なる。320pxでは全3入力が覆われ、768pxでもtextarea等が覆われる。エラーを読んで値を直す操作が遮られる。

改善方向：errorをフォームの後／footerの前の独立した通常flow行へ置き、その高さで全体を押し広げる。現在章・将来章のgrid-row投影も同じ規則で予約し、エラー長やfields数に依存する絶対位置・同一セルの重ね合わせを廃する。LTR/RTL、3入力＋textarea、長い非同期エラーで実矩形の非交差を検証する。

証拠：docs/design-renewal/batches/B041/captures/reviewer-errors-5/stone-path-wizard-320-ltr.png, docs/design-renewal/batches/B041/captures/reviewer-errors-5/checks.json, docs/design-renewal/tools/review-b041-error-r5.mjs

**R574-wide-empty-floor**

広幅ではpanelが全手順行をspanするため、7件×128pxの約896px高の床になる。1つの入力の下に約600pxの空白が生じ、対応するNextが遠く離れる。手順が増えるほどフォームの操作距離が情報量と無関係に増える。

改善方向：広幅でも現在行に自然高のフォーム島を合わせ、footerをその直後へ置く。非現在の履歴を表示するために入力床を全行へ引き伸ばさない。現在章の横の橋の接点を保ち、7件・1fieldでも最後の入力からfooterまでが通常の余白に収まるようにする。

証拠：docs/design-renewal/batches/B041/captures/reviewer-wizard-counts-5/stone-path-wizard-7-current4-ltr-768.png, docs/design-renewal/batches/B041/snapshot/round-5/source/stone-path-wizard/styles.css

近似比較：元R574, 旧R394, R554, R374

## 検証範囲

- 固定round-5の100author hash／10actual portable CSS一致。round-2から68ファイル同一、T560/563の20ファイルは不変。reviewer-hashes-5.json。
- 独立native全10の既存protocol成功。Timeline6はclick/Enter/実dateTime/link/制御/disabled/focus/reset/cleanup、Wizard4は実必須・email検証/完了/戻る値/制御/allowJump/async error/empty/DOM identity/caret/native Undoを検証。
- 320/390/768px×LTR/RTL長文、native44以上・実font、通常hover/leave、forced dark/reduced。ページエラーなし。reviewer-timelines-5/checks.json、reviewer-wizards-5/checks.json。
- 全Timeline6×1000/320×LTR/RTL×全閉／全展開48条件を独立撮影し、normal hover/leave/reenter2回で日時・見出し・状態・summary矩形/fontが固定。reviewer-materials-5。
- Wizard4×手順数1/2/4/7×全現在位置×320/768×LTR/RTLの224条件で、listのARIA露出、実current input、短名一行、読字幅72px以上、横幅収まりを独立実行。reviewer-wizard-counts-5。
- 追加独立エラー試験：全4×320/768×LTR/RTL、3実fieldsと長いserver error。T2は入力との交差0、R573/R574は入力矩形との交差を再現。reviewer-errors-5。
- 共有通常next修正を固定5で限定追確認：全4の実Enter後は新input、controlled拒否の実click後は元Next button。reviewer-wizard-extra-5。
- R564は20件全展開320/768×LTR/RTLを再撮影し、全文と幅収まり、全高曲面を確認。reviewer-dense-5。
- fixtureはsection[data-part]へ限定済みで、前版の白い偽panel枠は今回存在しない。元baseline0／正式2／既承認近似を比較し、案の説明だけでなく実輪郭・接点・読字で判定した。
- 主担当React4形式とSignature25のログは補助資料。独立評価ではnative追加試験で見つけたエラー遮蔽と過大な空床を成功ログと分離した。

## 限界

- 独立実操作はChromiumの固定portable native。React4形式と全共有回帰の再実行は主担当ログ参照。
- 非同期中に外部へ自発移動した焦点のno-steal全組合せは独立再実行していない。基本Enter／controlled拒否は独立確認済み。
- 別エンジン・スクリーンリーダーの実読み上げは未検証。CSS display:contentsのlistはChromiumアクセシビリティスナップショットで確認した。
