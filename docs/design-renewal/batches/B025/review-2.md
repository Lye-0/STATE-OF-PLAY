# B025 round-2 独立レビュー

**changes_requested：7 pass / 2 adjust / 1 redesign。** 固定snapshot/round-2のみを検査。正本・snapshot未編集。

## R343 spool-dial-progress — pass

T保持。元の糸巻き状の一環と中央数字窓を残し、競合する同心線を整理した。割合環と固定した読み窓の階層が明確で、0/1/100でも値と描画が対応する。

近似比較：元R343 / R337 二軌道表示 / R180 coin。

## R344 paired-scale-progress — pass

T保持。元の二本の尺度と独立した指標を維持し、両端6px予約で指標が0/100でも切れない。目盛りと実量面の関係が明瞭。

近似比較：元R344 / R135 sliding ruler / R282 datum axis。

## R345 ribbon-end-progress — pass

固定14px巻芯から68px高の燕尾布が実量に応じて伸びる。大きい切尾が外形を決め、数値を機構から分離して安定させた。R333の二片の縫合とは量を示す構造が異なる。1%の細い露出、100%の全長、不定35/40%中立表示も確認。

近似比較：元R345 / R333 二片の布と縫合 / R283 全幅リボン。

## R351 document-slot-upload — pass

58pxの中空挿入口の下唇と、42px位置から出る読む紙の重なりが実寸で読める。上の支持と紙面を分離した外形が元の細線枠から十分変わり、実ファイル選択面とも整合する。

近似比較：元R351 / R295 出力口 / R315 archive drawer。

## R352 cargo-bay-upload — pass

T保持。対向する短い折返し付き支柱と床の接合を保ち、選択行の床への連続が読める。R357の細い二本レールとは元の角形支柱と幅広い床の比率で区別できる。

近似比較：元R352 / R357 rail platform / R143 I断面。

## R353 folded-envelope-upload — pass

T保持。上下の非対称な折返しの向きと広さを残し、本文に折山が侵入しない。狭幅・選択後も紙の上下構造が保たれる。新規Aの封筒量産として評価せず、元監査の保持調整として合格。

近似比較：元R353 / R263 Envelope Letter / R298 封緘。

## R354 ceramic-tray-upload — redesign

操作は成立するが、主形は依然として角丸四辺枠であり、上辺の欠落と小脚が追加記号に留まる。Aの再設計として独立した陶の容器の構造が不足する。

近似比較：元R354 / R215 浅い鉢の曲面と平底 / R319 陶アーチと読む板 / R279 八角トレーと握り輪。

- **R354-A-structure / major**：大きい角丸四辺枠の中央上辺を切り、小脚2本を付けた形が支配的。選択物はその下の独立した角丸行へ並び、陶皿の底と縁が受ける関係になっていない。色・縁の厚み・小脚だけではA再設計の独自性を満たさない。
- 証拠：captures/reviewer-uploads-2/ceramic-tray-upload-initial.png / -selected.png / -narrow-320.png。空状態・実3ファイル選択・320pxを確認。
- 改善方向：単なる枠拡大をやめ、ファイルを載せる独立した広い平底と、手前へ張り出す浅い曲面の受け縁を実接続する。空状態の選択面と追加後のファイルが同じ器の内側へ収まるよう、底・曲面・接合の外形を一体で再設計する。既承認R215の寸法や楕円をそのまま転用せず、アップロード後の内容量に応じた受け方を形の主題にする。

## R355 archive-pocket-upload — adjust

通常造形は合格。全高の左右gussetと中央を低くした前壁に実ファイル行が入り、件数で前壁が延びるため、既存の小さい下ポケットとは構造と用途を区別できる。ただし狭幅のファイル情報を圧迫する。

近似比較：元R355 / R197 下差込ポケット / R263 Envelope Letter / B016旧R222 下ポケット案。

- **R355-narrow-file-copy / major**：短いsingle.txtもs…となり、補足がほぼ縦積みになる。左右26pxの前壁余白・プレビュー・削除ボタンが読む領域を奪う。横overflowがないことだけでは実ファイルの識別性を保証できない。
- 証拠：captures/reviewer-uploads-2/archive-pocket-upload-narrow-320.png / captures/reviewer-upload-motion-2/checks.json。viewport320、実部品幅222、LTR/RTLともファイル文字幅22px、補足高さ102px。
- 改善方向：狭いcontainerで行のプレビューを省く、内側余白を減らす、または名前を上段の広い領域へ置き補足と削除を別段へ分ける。支持の通常造形と削除hitは保持し、短い名前と補足が読めることを320pxのLTR/RTL実選択画像で再確認する。

## R356 open-corner-upload — pass

T保持。対角の開いた角の長さ・厚みを揃え、中央の読む面とhitを固定した。元の軽い開放感を保っており、大きい支持を足す再設計は不要。

近似比較：元R356 / R316 opposed L / R164 open corner。

## R357 rail-platform-upload — adjust

通常造形はT保持として合格。二本の細い縦レールと床の接点は明瞭で、元の上向きの開放形を保つ。ただし選択行の左右予約が狭幅でファイル名を圧迫する。

近似比較：元R357 / R352 cargo bay / R322 二本の横レール。

- **R357-narrow-file-copy / major**：短いsingle.txtもsin…まで省略され、補足が4行へ分断される。左右の支持予約とプレビュー・削除ボタンが読む領域を奪う。横overflowがないことだけでは実ファイルの識別性を保証できない。
- 証拠：captures/reviewer-uploads-2/rail-platform-upload-narrow-320.png / captures/reviewer-upload-motion-2/checks.json。viewport320、実部品幅222、LTR/RTLともファイル文字幅36px、補足高さ68px。
- 改善方向：狭いcontainerで行のプレビューを省く、内側余白を減らす、または名前を上段の広い領域へ置き補足と削除を別段へ分ける。支持の通常造形と削除hitは保持し、短い名前と補足が読めることを320pxのLTR/RTL実選択画像で再確認する。

## 実施した検査

- 固定source100ファイルのSHA-256がreview-input-2.jsonと全一致。配布CSS10件が正本と一致（import文除外）。captures/reviewer-extra-2/checks.json。
- 固定actual native exportをChromiumで独立実行。進捗3件の0/1/25/50/72/99/100、min/max/clamp、native progress値と表示、不定、長文320/390/768、RTL、forced/reduced、destroy。reviewer-progress-2/checks.json、独立ログ全3PASS。
- 通常motionで進捗3件の途中遷移、hover/leave/reenter、表示文字・font固定、不定を16時点採取。3件ともroot横overflow0。reviewer-motion-2/checks.json。
- アップロード7件で実Enter→native chooser→実FileList/FormData、required/accept/size/maxFiles、削除後focus、form reset、DataTransfer drop/depth/dedup、readOnly/disabled、single/multiple、長文320/390/768、RTL、forced/reduced、preview/objectURL revoke/destroyを独立実行。全7API検証PASS。reviewer-uploads-2/checks.json。
- 追加の通常hover/dragenter/dragleave/leave/reenterを各2回、LTR/RTLで実行。input/button/strong/svg/small/dropzoneの矩形・fontを部品全体基準で比較し7件14条件すべて固定。狭幅の実文字幅も別測定。reviewer-upload-motion-2/checks.json。
- 原版round0と最終round2の実描画、元監査のT/R区分、近似する既承認の支持・素材・外形を照合。初期、選択後、狭幅、RTL、強制色の画像を確認。reviewer-contact-0.jpg / reviewer-contact-2.jpg / reviewer-small-forced-2.jpg。
- 主担当React4形式ログは補助資料として確認。独立レビューのnative操作結果と区別した。

## 検査の限界

- Chromium Linuxとforced-colors/reduced-motionエミュレーションでの検査。全OSのnative chooserや実支援技術の読み上げまでは確認していない。
- 全730件の元監査と近似候補を比較したが、730件すべてを再操作したものではない。
- React4配布形式をこの独立レビューでは再起動していない。主担当ログを補助参照。
- 狭幅API自動検査のPASSは横あふれ・操作契約の成功を意味し、R355/R357の可読性の合格を意味しない。
