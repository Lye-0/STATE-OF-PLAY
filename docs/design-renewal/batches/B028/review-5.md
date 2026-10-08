# B028 round-5 独立最終検査

**全10件 pass。** R397の中間幅における5桁の内壁侵入は解消した。通常造形の合格判断は維持する。

## R383 petal-month-calendar — pass

通常造形はround-3の合格基準を維持。T保持。月の大きい非対称曲面、実月送りと選択日の小さい花弁を同じ対角曲率へ整理。七列と文字を直線に保ち、元の良い外形を過剰な機構へ置換していない。

## R384 recessed-date-calendar — pass

通常造形はround-3の合格基準を維持。全高の大きい弧と深い上切断面・内壁が、読む平底を収める一つの掘込みとして読める。標準的な小さい角丸枠を太くするだけでなく、ほぼ全幅に及ぶ上下の湾曲面が外形を決める。R215の口を開いた浅鉢やR371二本の巻取りと支持構造が異なり、全モードでも文字と操作が内面に収まる。

## R385 receipt-date-calendar — pass

合格。42枚の同形小票を廃し、一枚の月紙が全幅の斜め押えと鋸刃の下を通り、下端を自由な切断端として露出する構造へ変わった。斜めの厚い押え面・刃・平らな読む紙の役割が分離し、年月と曜日の間の予約領域で接触する。320pxとRTLでも曜日へ侵入せず、日付・範囲・日時は同じ紙面として整合する。時刻のみでは月送りと刃を外し、紙の切断輪郭を保持する。R295の横向き出力装置、R351の中空挿入口、R371の二円筒とは支持と自由端の関係が異なる。

## R391 spine-index-pages — pass

通常造形はround-3の合格基準を維持。通常造形は合格。露出した曲面の背へ各実番号の長い紙葉が斜めの根元で接続し、省略記号は葉から分離する。縦の実索引が形を決め、一般的な横番号列から独立する。 round-4では固定native exportのreadOnly/disabled＋href実クリックでURL・値・通知が不変、解除後はリンク機能が戻ることを確認。

## R392 track-stop-pages — pass

通常造形はround-3の合格基準を維持。通常造形は合格。実停車床と二本の連続レール、現在位置の大きいアーチが機能と結び付く。 round-4では固定native exportのreadOnly/disabled＋href実クリックでURL・値・通知が不変、解除後はリンク機能が戻ることを確認。 内壁2pxと数値12px/nowrapへの修正で、検査した全番号は一行かつアーチ内面に収まった。

## R393 ribbon-ticket-pages — pass

通常造形はround-3の合格基準を維持。T保持の通常造形は合格。元の現在リボンと実前後操作の尾・織面を統一し、数字と矢印を固定した。 round-4では固定native exportのreadOnly/disabled＋href実クリックでURL・値・通知が不変、解除後はリンク機能が戻ることを確認。

## R394 stone-step-pages — pass

合格。離れた同形石キーの段差反復から、一体の石梁を切り込んだ連続階段へ再設計された。52pxの踏面と12pxの蹴上げが隙間なく接し、14pxの全高側壁と下底が各段を受ける。省略記号も同材の区間を維持し、総数1・7・12、現在先頭/末尾、320px RTLで支持が途切れない。数字は実踏面へ固定。R174の独立割石、R374の平日/週末二面とは選択順を刻む一続きの外形が異なる。

## R395 ledger-page-tabs — pass

通常造形はround-3の合格基準を維持。通常造形は合格。長い実ページ札の紙先が共通の厚い閉じ口へ入り、狭幅上段の延長も受けに届く。総数1/7/12、先頭/末尾、省略を含む実像で孤立した上段札へ戻らない。 round-4では固定native exportのreadOnly/disabled＋href実クリックでURL・値・通知が不変、解除後はリンク機能が戻ることを確認。

## R396 perforated-pages — pass

通常造形はround-3の合格基準を維持。T保持の通常造形は合格。元の切離し票の番号と実前後操作の孔・小口を揃えた。新規Rの42小票とは評価基準を分け、元のidentityを保持する。 round-4では固定native exportのreadOnly/disabled＋href実クリックでURL・値・通知が不変、解除後はリンク機能が戻ることを確認。

## R397 console-pages — pass

合格。通常造形を保持し、本文340px以下を4列、240px以下を3列とした修正で中間幅の内面不足を解消。固定nativeで外幅275/276/277、354/370、375/376/377/380pxをLTR/RTL・現在6234/12456（総数12456）で確認し、全表示番号が一行で読む内面に収まる。旧不具合の外幅354では最小余白14.234375px、7列へ戻る外幅377でも0.34375pxを確保。斜めケース・実番号キー・前後レバーの接合、通常hover/leave/reenterで文字とhitの固定も維持。

## 今回の検証範囲

round-5正本100ファイルとreview-input-5 SHA-256は全一致、10件native配布CSSもimport除去後一致。reviewer-extra-5/checks.json。

round-4→5の正本100ファイルをバイト比較。変更はconsole-pages/styles.cssの1件のみ、99件同一。他9部品90ファイルは不変。reviewer-extra-5/inheritance.json。

7固定native export内のshared foundation/navigation.jsはround-4とバイト同一。round-4のreadOnly/disabled実クリック63組・復帰の結果を引継ぎ。reviewer-extra-5/shared-runtime-inheritance.json。

固定native全7pagination×外幅275/276/277/354/370/375/376/377/380×LTR/RTL×現在6234/12456（総数12456）の252状態を独立検査。全visible番号1386個が一行、全て文字Rangeが内面以内。reviewer-page-embedded-5/checks.json。

R397の本文240px境界は外幅275/276/277、本文340px境界は375/376/377として前後検査。既不具合外幅354と370も適合。R397最小内面余白は外幅377で0.34375px。数字の字体/寸法は変更せず列切替で解消。

R397外幅354/376/377×LTRRTL×2現在値の12状態を撮影。4列/7列、selected末尾、全5桁の実視認と内壁接触の解消を画像でも照合。reviewer-console-boundary-5。

R397通常1000pxLTR/320pxRTL×総数1・7・12/現在4・12の8画像、normal motion hover/leave/reenterで全体相対の字・hit・font固定を再検査。読むキーとnativeレバーのケース接合/上下予約は保持。reviewer-page-materials-5。

他9件は不変hashを根拠にformal-review-4の通常造形・操作・date4モード・長文320390768・RTL・forced/reducedの独立合格を引継ぎ。R385一枚紙と斜め刃、R394一体石梁の合格判断も維持。

## 限界

今回の新規実操作は固定portable nativeのページ番号内面/列境界とR397通常状態に限定。他9件・共有runtimeの全面操作はround-4の実検査を不変hashに基づき継承。

React7×4・基盤26試験・配布契約の成功は主担当ログによる補助情報であり、今回の独立再実行とは扱わない。

Chromiumでの評価。他ブラウザ/実OS全環境、無制限の数値桁数・任意props組合せの保証ではない。既承認造形・近似判断はformal-review-4を引継ぎ、730件の全面再監査は行っていない。
