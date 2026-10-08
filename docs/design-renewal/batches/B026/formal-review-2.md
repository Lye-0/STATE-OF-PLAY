# B026 round-2 独立レビュー

**changes_requested。** 5 pass / 2 adjust / 3 redesign。R359遮蔽修正は解消。 正本・snapshot未編集。

## R358 stitched-pouch-upload — pass

68pxの横長の開口、9pxの返し布、両端へ出る引き紐と袋本体が区別できる。元の角丸カードから外形と口が十分変わり、袋の中へ収める選択一覧とも整合する。

近似比較：元R358 / R303二枚布 / R355 gusset pocket / R365布容器。

## R359 stone-recess-upload — pass

round2では外石面z−2/内面z−1、読む子z1となり、本文・記号・形式が実際に見える。34px斜め外形と内側の切込み・上下の大きい肉厚は元の丸角枠から独立した構造を作る。

近似比較：元R359 / R214非対称の石小口 / R174割石 / R324鋳物溝。

## R360 folio-band-upload — redesign

読む矩形へ丸い左端と細い帯を足した構成が主で、綴じる立体的関係が十分に読めない。RTLで丸い背の端と帯の位置も分離する。

近似比較：元R360 / R138旧平たいbook案と現円筒背 / R181 jacket folds / R265帯の実貫通。

- **R360-binding-structure / major**：全幅の矩形と細い18px帯の塗分けが支配的で、帯が実紙を保持する差込み・巻き返し・空隙がない。実ファイルは平たい側帯の横へ並び、表紙の機構を発展させていない。
- 証拠：captures/reviewer-uploads-2/folio-band-upload-initial.png / -selected.png / -narrow-320.png
- 改善：単に帯や色面を増やさず、露出した背と紙余白を実際につなぐ中空の綴じ環などへ根本再構成する。複数の環が全層の紙孔を通り、ファイル名・削除と干渉せず、追加した紙の縁を保持する関係を実描画する。

- **R360-RTL-spine / major**：RTLで帯は右へ移るが、beforeのscaleX(-1)とborder-radius反転を重ねたため、丸い背の角が左に残る。支持と外形が同じ側で接続しない。
- 証拠：captures/reviewer-uploads-2/folio-band-upload-initial.png / -selected.png / -narrow-320.png / source/folio-band-upload/styles.css :dir(rtl)
- 改善：再設計時も輪郭の鏡映と論理位置を一度だけ適用し、背・綴じ具・紙余白を同じ側へ接続する。

## R361 perforated-upload — adjust

主面の対向する穿孔と14pxの実隙間は確認できるが、選択行では削除片と名前面を切り離す空隙が下層に塞がれる。削除に対応する実切離しを成立させてから最終造形を判定する。

近似比較：元R361 / R084 perforated stub / R252旧半券案 / R285 stamp。

- **R361-file-stub-void / major**：li全体が不透明な#fff8edであり、14pxのgapと削除ボタンのmaskの穿孔の下も同じ紙で埋まる。主面では実空隙なのに、選択行は紙に貼った色片となり、説明の切離し機構と不一致。
- 証拠：captures/reviewer-uploads-2/perforated-upload-initial.png / -selected.png / -narrow-320.png / source/perforated-upload/styles.css li背景とbutton mask
- 改善：行の下層を透明にし、名前面と削除片へ独立した背景を置く。全層を通った空隙・対向する端・実削除hitを確保し、狭幅の別段配置とRTLでも接続を確認する。

## R362 inspection-pad-upload — pass

24pxの三面支柱と48pxの大きい梁が6px重なり、下の薄い床と非対称な開いた構造を作る。R143の二本のI桁の橋、R282の測定顎とは単一の上梁/支柱/受台の比率が異なる。

近似比較：元R362 / R143 I断面橋 / R282基準軸と顎 / R320 L bookend。

## R363 letter-rack-upload — adjust

空状態の中空前柵・三桟は特徴的だが、実ファイル追加後に一覧の不透明背景で隠れ、保持構造が消える。接続の修正が必要。

近似比較：元R363 / R251 cabinet fronts / R355 pocket / R352 cargo bay。

- **R363-rack-loaded / major**：filesがz1の不透明面、前柵と三桟がdropzone内z0のため、実ファイルを追加すると桟の大半と下の接点が隠れる。空時の中空ラックが、使用中には普通の外枠と一覧へ戻る。
- 証拠：captures/reviewer-uploads-2/letter-rack-upload-initial.png / -selected.png / -narrow-320.png
- 改善：前柵・底・実ファイルを別の予約領域へ分け、桟の上下の接点と空隙を追加後も露出する。前柵をただ文字の上へ重ねず、名前・削除の読む面を避けて保持関係を作る。

## R364 stepped-dock-upload — pass

T保持。元の低い二段床を残して全周枠の競合を除き、短いガイドと床の厚みを揃えた。選択物と操作面を広く保ち、狭幅・RTLも読む文字を圧迫しない。

近似比較：元R364 / R304三段通知 / R352 cargo floor。

## R365 canvas-bin-upload — pass

二つの38×112pxの独立中空持ち手が容器に30px入る。持ち手の実開口と本体の折り返しが見え、R358の口/引き紐、R279の横握り輪と異なる支持構造を持つ。

近似比較：元R365 / R358引き紐袋 / R279横握り輪 / R224 U handle。

## R371 desk-blotter-calendar — redesign

四つの大きい三角は月の紙面上の色面に留まり、外のマットと読む紙をまたぐ角袋の実接合がない。角留めの反復から離れたAの独自構造も不足。

近似比較：元R371 / R218対角の布角と外マット / R086角帽子 / R164 open corners。

- **R371-corner-repeat / major**：62/46pxの三角は同じ紙面の四角に描いた色面で、独立した外マットの縁や紙の端を跨がない。R218が持つ外マット/紙/布角の接合にも届かず、角数と大きさだけでは構造の独立性が弱い。
- 証拠：captures/reviewer-dates-2/desk-blotter-calendar-initial.png / reviewer-materials-2/desk-blotter-calendar-*.png
- 改善：角留め方式を離れ、暦紙が上下の全幅の巻取り円筒の接線へ連続する構造などへ再設計する。一枚の実読む紙の支持として描き、既承認の織機の桁・糸・杼の再現にはしない。月送り・日付・timeモードの実操作は無地の固定領域に保持する。

## R372 instrument-date — redesign

実操作は明瞭だが、面取りした全周ケースの中へ小さい面取り年月窓と日付盤を置く構成は汎用の計器パネルの範囲。A再設計の固有の機構がまだ不足する。

近似比較：元R372 / R158 instrument tabs / R331 meter window / R324旧面取り枠。

- **R372-generic-instrument / major**：ケースと年月窓を二重に面取りし等幅数字を置いた構成が中心で、元の青いヘッダーを厚くした汎用パネルの域を出ない。日付選択と結び付く固有の支持や機構がない。
- 証拠：captures/reviewer-dates-2/instrument-date-initial.png / reviewer-materials-2/instrument-date-*.png
- 改善：全周ケースを主役にせず、曜日の実尺度軸と選択日のキャリッジ、固定年月ドラムと実月送りの支持などへ構造を再編する。偽操作を加えず、選択した日/実年月だけに機構を対応させ、range/timeでも成立する読む面を確保する。

## 確認範囲

- 固定round2正本100hashがreview-input-2.jsonと一致、正本/portable CSS10一致。round1→2は8upload CSSのみ変更、残り92hash（date20を含む）不変。reviewer-extra-2/checks.json。
- 全8uploadsのactual native exportを独立再実行。実Enter/chooser/FileList/FormData/required/accept/size/maxFiles/remove focus/reset/DataTransfer/drop/depth/dedup/readonly/disabled/single-multiple/長文320390768/RTL/forced/reduced/objectURL revoke/destroyすべてPASS。reviewer-uploads-2/checks.json。
- 全8uploadsのnormal hover/dragenter/dragleave/leave/reenterを各2回、LTR/RTLで確認。部品全体基準のinput/button/strong/svg/small/dropzone矩形とfontは16条件固定。reviewer-upload-motion-2/checks.json。
- 日付2件をactual nativeで独立操作。Alt+Down/日送り/disabled日skip/Enter/Escape/ARIA/focus復帰/FormData/invalid draft/正規化/readOnly/disabled/required/date/range/time/datetime/reset/open destroy。320390768のpanel fitと日付hit、RTL/forced/reducedも全PASS。reviewer-dates-2/checks.json。
- 日付2件×LTR/RTL×date/range/time/datetimeを実表示して撮影。triggerをviewportへ入れた後showし、背景が不透明で実文字が読めることを確認。reviewer-materials-2。
- round0原版・元監査のR/T・既承認近似と最終実像を比較。自動API成功とA造形合否を分けた。主担当React実4形式ログは補助資料であり独立再起動ではない。

## 限界

- Chromium Linux、forced-colors/reduced-motionのエミュレーション。実支援技術の読み上げや全OS native chooserまでは未検証。
- React4形式を独立再起動していない。主担当ログを補助参照し、独立したnativeの実操作と区別した。
- 全730件の元監査・近似を参照したが、全730を今回再操作していない。
