# B026 round-3 独立再レビュー

**changes_requested：9 pass / 1 adjust（R372）。** R372の独立した通常造形は合格、年月ユニットと尺度盤の実接続だけを残件とする。正本・snapshot未編集。

## R358 stitched-pouch-upload — pass

68pxの横長の開口、9pxの返し布、両端へ出る引き紐と袋本体が区別できる。元の角丸カードから外形と口が十分変わり、袋の中へ収める選択一覧とも整合する。 round2から50ファイル不変の5件として通常造形判定を維持し、今回もnative回帰を再実行した。

## R359 stone-recess-upload — pass

round2では外石面z−2/内面z−1、読む子z1となり、本文・記号・形式が実際に見える。34px斜め外形と内側の切込み・上下の大きい肉厚は元の丸角枠から独立した構造を作る。 round2から50ファイル不変の5件として通常造形判定を維持し、今回もnative回帰を再実行した。

## R360 folio-band-upload — pass

再設計の通常造形を合格。28pxの露出背と20pxの空隙、72pxの四つの中空環、実紙面の62px位置の孔が接続する。実ファイル行も独立した紙孔と環を持ち、単なる帯付き矩形から綴じる構造へ変わった。RTLは支持・紙孔・環が同じ側に揃い、前回の二重鏡映も解消。320px長文・複数ファイルでも読む文字と削除を環から分離できている。

## R361 perforated-upload — pass

前回の全層空隙の指摘を解消。liを透明にし、独立した名前紙と削除片の間へ実空隙を作った。狭幅では名前の紙と削除片を上下へ分け、紙の切端と実native削除の関係を維持する。主面と選択後の機構が一致し、名前は全文折返しで読める。

## R362 inspection-pad-upload — pass

24pxの三面支柱と48pxの大きい梁が6px重なり、下の薄い床と非対称な開いた構造を作る。R143の二本のI桁の橋、R282の測定顎とは単一の上梁/支柱/受台の比率が異なる。 round2から50ファイル不変の5件として通常造形判定を維持し、今回もnative回帰を再実行した。

## R363 letter-rack-upload — pass

前柵をroot gridの専用110px領域へ移し、84pxの中空柵・三桟・10pxの底が実ファイル追加後も露出する。名前と削除を覆わず、複数件・長文で伸びる収納の下端を前柵が受ける。前回の一覧による桟の遮蔽を解消。

## R364 stepped-dock-upload — pass

T保持。元の低い二段床を残して全周枠の競合を除き、短いガイドと床の厚みを揃えた。選択物と操作面を広く保ち、狭幅・RTLも読む文字を圧迫しない。 round2から50ファイル不変の5件として通常造形判定を維持し、今回もnative回帰を再実行した。

## R365 canvas-bin-upload — pass

二つの38×112pxの独立中空持ち手が容器に30px入る。持ち手の実開口と本体の折り返しが見え、R358の口/引き紐、R279の横握り輪と異なる支持構造を持つ。 round2から50ファイル不変の5件として通常造形判定を維持し、今回もnative回帰を再実行した。

## R371 desk-blotter-calendar — pass

再設計を合格。四つの角三角を廃止し、革マットの上の一枚の暦紙が上下二本の40px円筒へ連続する。両端面と巻取りの曲面が見え、元の角留めやR218とは異なる外形を作る。R096の織機の糸/杼構造にも寄らない。date/range/time/datetime、LTR/RTL、320pxでも実操作を無地の固定紙へ保つ。

## R372 instrument-date — adjust

通常造形の独立性は改善。七本の曜日軸と実選択日の三面キャリッジ、大きい年月ドラムと実月送りレバーにより、汎用全周枠から離れた。ただし年月ユニットが下の尺度盤へ接続しておらず、支持の精度を残件とする。

- **R372-drum-support-contact / major**：年月ドラムと両月送りレバーが、下の曜日尺度盤の上へ別々に浮いている。レバーは縦軸・握り面・下端輪を持つが、ドラムの横軸や尺度盤へ届かない。選択キャリッジと曜日軸の接続が成立しているだけに、上部の支持欠落が目立つ。
- 証拠：captures/reviewer-r372-contacts-3/checks.json と320/390/768-LTR/RTL画像。全6条件でheader下端→曜日バー26px、drum下端→曜日バー28pxの空白。sourceのheader/button pseudoにこの空白を渡る支持がない。
- 改善：年月ユニットを支える実支脚・軸受と横軸を追加し、ドラム端→月送りレバー→下の曜日バーが物理的につながる位置へ揃える。読む年月、日付、native button hitは固定し、装飾が文字を横切らないことを確認する。time専用で年月headerがない場合は不要な支持を残さない。根本再設計は不要。

## 実確認

- 固定round3正本100hashとreview-input-3.jsonが全一致、portable CSS10一致。前回pass5件は50hash不変。reviewer-extra-3/checks.json。
- 全8uploadsをactual native exportで独立再実行。実chooser/FileList/FormData/required/accept/size/maxFiles/remove focus/reset/drop/depth/dedup/readOnly/disabled/single-multiple/長文320390768/RTL/forced/reduced/objectURL cleanup/destroyすべて成功。reviewer-uploads-3/checks.json。
- 全8uploads×LTR/RTLのnormal hover/dragenter/dragleave/leave/reenterを各2回確認。部品全体基準の文字・input・button・glyph矩形/fontは16条件固定。reviewer-upload-motion-3/checks.json。
- 日付2件を実操作しkeyboard/ARIA/FormData/disabled日/invalid draft/normalize/date/range/time/datetime/readonly/disabled/required/reset/320390768日付hit/RTL/forced/reduced/open destroyすべて成功。reviewer-dates-3/checks.json。
- 日付2件×4モード×LTR/RTLの実画像を確認。R371は時刻専用でも二本の円筒と一枚の紙が本文を支える。R372は日付の選択キャリッジと軸が一致するが上部支持の空白が残る。reviewer-materials-3。
- R372の接点を320/390/768×LTR/RTLで別測定・撮影。全6条件でdrumと曜日バーが28px離れる。reviewer-r372-contacts-3。
- R360環/紙孔とRTL、R361主面とファイル削除片の実空隙、R363初期/複数/長文の前柵を固定実物・ソースで照合。既承認近似と前回の基準を維持。

## 限界

- Chromium Linux、forced-colors/reduced-motionのエミュレーション。実支援技術の読み上げや全OS native chooserまでは未検証。
- React4形式を独立再起動していない。主担当ログを補助参照し、独立したnativeの実操作と区別した。
- 全730件の元監査・近似を参照したが、全730を今回再操作していない。
