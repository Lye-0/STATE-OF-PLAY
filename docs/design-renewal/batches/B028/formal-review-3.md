# B028 round-3 独立レビュー

**changes_requested：2 pass / 6 adjust / 2 redesign。** 日付R385とページR394は再設計。全7ページにreadOnly＋anchor不具合、R392/R394/R397に大番号の内面/改行問題。正本・snapshot未編集。

## R383 petal-month-calendar — pass

T保持。月の大きい非対称曲面、実月送りと選択日の小さい花弁を同じ対角曲率へ整理。七列と文字を直線に保ち、元の良い外形を過剰な機構へ置換していない。

近似比較：元R383 / R377 orbit T。

## R384 recessed-date-calendar — pass

全高の大きい弧と深い上切断面・内壁が、読む平底を収める一つの掘込みとして読める。標準的な小さい角丸枠を太くするだけでなく、ほぼ全幅に及ぶ上下の湾曲面が外形を決める。R215の口を開いた浅鉢やR371二本の巻取りと支持構造が異なり、全モードでも文字と操作が内面に収まる。

近似比較：元R384 / R215浅鉢 / R359斜め石受面 / R371巻取り暦。

## R385 receipt-date-calendar — redesign

42個の同形紙片の左右へ小さい孔と下小口を付けた標準グリッドが主で、Aの独立した材料構造が弱い。前回R374の小面取りキーと同じ反復の問題が残る。

近似比較：元R385 / 旧R374同形石キー / R396 perforated pages T / R285 stamp。

- **R385-small-ticket-grid / major**：44pxの同形日付ボタンへ2px孔と4px小口を加えた反復が主で、月全体の外形や材料の支持は変わらない。小さい装飾・色・質感の量産から離れたA構造になっていない。
- 証拠：captures/reviewer-dates-3/receipt-date-calendar-initial.png / reviewer-materials-3/receipt-date-calendar-*.png
- 改善：42小票を廃し、全月の一枚紙が大きい斜めの切取り受けと全幅の押えを通る一体構造などへ再設計する。刃の小口・押え・切れた自由端を独立させる。R295出力口/R351挿入口/R371二巻軸/R252送り紙の再現にならないよう、切取り受けと紙の接合を主形にする。

## R391 spine-index-pages — adjust

通常造形は合格。露出した曲面の背へ各実番号の長い紙葉が斜めの根元で接続し、省略記号は葉から分離する。縦の実索引が形を決め、一般的な横番号列から独立する。readOnlyリンクの共有不具合を修正する必要がある。

近似比較：元R391 / R255背と保持腕 / R360環綴じ。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json spine-index-pages：events:[5], data:4, hash:#review-ro-spine-index-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

## R392 track-stop-pages — adjust

通常造形は合格。実停車床と二本の連続レール、現在位置の大きいアーチが機能と結び付く。readOnlyリンク不具合に加え、大総数では現在番号がアーチの内面を越える。

近似比較：元R392 / R382吊り暦 / R239 trough slider。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json track-stop-pages：events:[5], data:4, hash:#review-ro-track-stop-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

- **R392-large-number-arch / major**：大総数12456の4/5桁現在番号は、hit矩形内には入ってもアーチの左右壁を除いた読む内面に入らない。12幅/方向/値条件の実Rangeで最大6.765625px越境し、白い数字が淡い壁へ載る。
- 証拠：captures/reviewer-page-glyphs-3/checks.json とtrack-stop-pages違反画像。320/390/768×LTR/RTL×current6234/12456。
- 改善：総数の桁数に応じて番号窓の列数・最小幅を変えるなどし、現在アーチの壁を除いた内面へ全glyphを一行で収める。固定12ページの造形は保持し、全visible番号・最終5桁も検証する。

## R393 ribbon-ticket-pages — adjust

T保持の通常造形は合格。元の現在リボンと実前後操作の尾・織面を統一し、数字と矢印を固定した。共有readOnlyリンク不具合のみ残る。

近似比較：元R393 / R283大きい布リボン。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json ribbon-ticket-pages：events:[5], data:4, hash:#review-ro-ribbon-ticket-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

## R394 stone-step-pages — redesign

小さい同形の面取りキーを5pxずつずらしただけで、踏面や蹴上げが一つの石へ連続していない。Aとして実石段の支持を構造化する必要があり、大番号の改行とreadOnlyリンクも残る。

近似比較：元R394 / 旧R374同形石キー / R339段差進捗T / R379一体蛇行支持。

- **R394-floating-bevel-keys / major**：7個の同形面取りキーにnth-childの5px刻みmargin-topを与えるだけで、各足場は離れて浮く。石段という説明に対して踏面・蹴上げ・地面が接続せず、標準番号ボタンの位置替えの範囲。
- 証拠：captures/reviewer-page-materials-3/stone-step-pages-1000-7-4.png / -320-7-4.png。source nth-child margin-top 5…30px。
- 改善：個別の小カードを廃し、一体の石梁に各実番号の踏面と蹴上げを切る。省略記号の場所も支持梁を連続させ、狭幅は折返し踊り場で二区間を接続するか、一列の連続断面へ変える。数字・hitは固定し実支持の接合で固有形を作る。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json stone-step-pages：events:[5], data:4, hash:#review-ro-stone-step-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

- **R394-large-number-wrap / major**：大総数12456で番号が改行する。R394は5桁を中心に12回の可視番号測定で複数行を検出。Range幅がhit以内という旧検査では、番号そのものの読みやすさを保証しない。
- 証拠：captures/reviewer-page-glyphs-3/checks.json / stone-step-pages-320-*-12456.png
- 改善：総数の桁数に基づいて列数/幅/内部余白を調整し、全番号を一行で表示する。過度に字を縮めず、枠を除く読む内面と実Range、最終5桁、RTLを確認する。

## R395 ledger-page-tabs — adjust

通常造形は合格。長い実ページ札の紙先が共通の厚い閉じ口へ入り、狭幅上段の延長も受けに届く。総数1/7/12、先頭/末尾、省略を含む実像で孤立した上段札へ戻らない。共有readOnlyリンク不具合のみ残る。

近似比較：元R395 / R351挿入口 / R111紙の口 / R375組み継ぎ背。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json ledger-page-tabs：events:[5], data:4, hash:#review-ro-ledger-page-tabs-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

## R396 perforated-pages — adjust

T保持の通常造形は合格。元の切離し票の番号と実前後操作の孔・小口を揃えた。新規Rの42小票とは評価基準を分け、元のidentityを保持する。共有readOnlyリンク不具合のみ残る。

近似比較：元R396 / R385新規42票 / R361実切離し削除。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json perforated-pages：events:[5], data:4, hash:#review-ro-perforated-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

## R397 console-pages — adjust

通常造形は合格。切れた肩の筐体上で実番号キーと前後のレバー・軸受が接続する。R372の年月ドラム/曜日軸とは全体構造と操作の関係が異なる。大番号の改行とreadOnlyリンク不具合が残る。

近似比較：元R397 / R297二面console / R372計器暦。

- **PAGES-readonly-native-anchor / major**：readOnly:trueとhrefForPageを同時指定し、ページ5の実リンクをクリックするとonDataChange(5)が発火しURL hashも移動する。getDataだけ4に留まる。buttonのc.sendが持つreadOnlyガードをanchor分岐が経由しないため、読み取り専用の契約が揃わない。
- 証拠：captures/reviewer-page-materials-3/checks.json console-pages：events:[5], data:4, hash:#review-ro-console-pages-5。固定exportsのshared navigation anchor分岐。
- 改善：readOnly時はリンクのhrefを除きaria-disabledを付け、クリックのnative navigationとcallback双方を抑止する。readonly/disabled×button/anchor×通常/修飾clickの組合せをnativeとReactへ追加し、readonly解除後の実リンク復帰も確認する。

- **R397-large-number-wrap / major**：大総数12456で番号が改行する。R397は320pxで6234が623/4、12456が124/56となり、30回の可視番号測定で複数行を検出。Range幅がhit以内という旧検査では、番号そのものの読みやすさを保証しない。
- 証拠：captures/reviewer-page-glyphs-3/checks.json / console-pages-320-*-12456.png
- 改善：総数の桁数に基づいて列数/幅/内部余白を調整し、全番号を一行で表示する。過度に字を縮めず、枠を除く読む内面と実Range、最終5桁、RTLを確認する。

## 確認範囲

- 固定正本100hashとreview-input-3.jsonが一致、portable CSS10一致。reviewer-extra-3/checks.json。
- 日付3件をactual nativeで独立操作。keyboard/ARIA/FormData/invalid draft/normalize/disabled日/required/readonly/disabled/date/range/time/datetime/reset/長文320390768/day hit/RTL/forced/reduced/open cleanupすべてPASS。reviewer-dates-3/checks.json。
- 日付3×4モード×LTR/RTLの24実表示とnormal hover/leave/reenter 350ms後の文字/操作矩形・font固定を確認。reviewer-materials-3、reviewer-motion-3。
- ページ7件の既定anchored構成を独立操作。Enter/Space/実page click/ARIA current/focus/boundaries/clamp/total1/large totals/readOnly button/disabled/native href/modified click/forced/reduced/destroyが基本検査ではPASS。reviewer-pages-3/checks.json。
- ページ7件で1000/320幅×総数1/7/12・先頭/末尾/省略状態の56実画像を追加、normal hover/leave/reenter各2回後の全button/anchor/strongとglyph矩形/font固定を確認。reviewer-page-materials-3。
- 追加のreadOnly＋native anchor組合せを全7件で実クリックし、callback発火とURL遷移を再現。基本検査PASSとこの不具合を区別した。
- ページ7件×320390768×LTR/RTL×current6234/12456で全visible番号のRange/行数/内面を検査。R392越境、R394/R397改行を発見。reviewer-page-glyphs-3/checks.json。
- 元監査のR/Tとsnapshot0実像、既承認近似を比較。R385は新規R、R393/396はT保持として別基準。主担当Reactログは補助参照で、独立再実行ではない。

## 限界

- Chromium Linux、forced-colors/reduced-motionエミュレーション。実支援技術や全ブラウザまでは未確認。
- React4形式を独立再起動していない。主担当ログ参照と独立nativeを区別。
- paginationの造形・操作は既定anchoredを中心に検査。非既定inlineの造形を承認したものではない。
- 全730件の元監査・近似を参照したが、全730を再操作したものではない。
