# B025 round-3 独立再レビュー

**全10件 pass。** 固定snapshot/round-3を検査。正本・snapshot未編集。R354再設計、R355/R357可読性の指摘を解消。

## R343 spool-dial-progress — pass

T保持。元の糸巻き状の一環と中央数字窓を残し、競合する同心線を整理した。割合環と固定した読み窓の階層が明確で、0/1/100でも値と描画が対応する。 round2から正本30ファイル不変をハッシュ照合し、同じ操作・造形判定を引き継ぐ。

近似比較：元R343 / R337 二軌道表示 / R180 coin。

## R344 paired-scale-progress — pass

T保持。元の二本の尺度と独立した指標を維持し、両端6px予約で指標が0/100でも切れない。目盛りと実量面の関係が明瞭。 round2から正本30ファイル不変をハッシュ照合し、同じ操作・造形判定を引き継ぐ。

近似比較：元R344 / R135 sliding ruler / R282 datum axis。

## R345 ribbon-end-progress — pass

固定14px巻芯から68px高の燕尾布が実量に応じて伸びる。大きい切尾が外形を決め、数値を機構から分離して安定させた。R333の二片の縫合とは量を示す構造が異なる。1%の細い露出、100%の全長、不定35/40%中立表示も確認。 round2から正本30ファイル不変をハッシュ照合し、同じ操作・造形判定を引き継ぐ。

近似比較：元R345 / R333 二片の布と縫合 / R283 全幅リボン。

## R351 document-slot-upload — pass

58pxの中空挿入口の下唇と、42px位置から出る読む紙の重なりが実寸で読める。上の支持と紙面を分離した外形が元の細線枠から十分変わり、実ファイル選択面とも整合する。 今回の全7件共通の選択行折返し・狭幅二段配置も実選択して確認し、通常支持面を損なう回帰なし。

近似比較：元R351 / R295 出力口 / R315 archive drawer。

## R352 cargo-bay-upload — pass

T保持。対向する短い折返し付き支柱と床の接合を保ち、選択行の床への連続が読める。R357の細い二本レールとは元の角形支柱と幅広い床の比率で区別できる。 今回の全7件共通の選択行折返し・狭幅二段配置も実選択して確認し、通常支持面を損なう回帰なし。

近似比較：元R352 / R357 rail platform / R143 I断面。

## R353 folded-envelope-upload — pass

T保持。上下の非対称な折返しの向きと広さを残し、本文に折山が侵入しない。狭幅・選択後も紙の上下構造が保たれる。新規Aの封筒量産として評価せず、元監査の保持調整として合格。 今回の全7件共通の選択行折返し・狭幅二段配置も実選択して確認し、通常支持面を損なう回帰なし。

近似比較：元R353 / R263 Envelope Letter / R298 封緘。

## R354 ceramic-tray-upload — pass

再設計を合格。四辺枠と小脚を撤去し、投入面と実ファイル一覧が同じ広い平底に載る。手前64pxの曲面と10px接地面が下端を決め、件数に応じて器全体が伸びる。空・2/3件・長文320px・RTLで受け面と前曲面の接合を確認した。R215の固定した楕円の口へ読む平底を載せる鉢とは、実一覧全体を受けて伸びる縦長平底と端の曲面の比率・機能が異なる。通常hover/dragでも読む文字とnative hitは固定。

近似比較：元R354 / R215 浅い鉢の曲面と平底 / R319 陶アーチと読む板 / R279 八角トレーと握り輪。

## R355 archive-pocket-upload — pass

全高gusset・低い中央口・ファイル数に応じて伸びる前壁の造形を保持。狭幅でpreviewを省き、名前・補足を上段全幅、削除を下段に分離した。320px/実部品幅222pxの本文は22pxから118pxへ広がり、補足17px一行、single.txtの全文と長い名前の折返しをLTR/RTLとも確認。前回の可読性指摘を解消。

近似比較：元R355 / R197 下差込ポケット / R263 Envelope Letter / B016旧R222 下ポケット案。

## R356 open-corner-upload — pass

T保持。対角の開いた角の長さ・厚みを揃え、中央の読む面とhitを固定した。元の軽い開放感を保っており、大きい支持を足す再設計は不要。 今回の全7件共通の選択行折返し・狭幅二段配置も実選択して確認し、通常支持面を損なう回帰なし。

近似比較：元R356 / R316 opposed L / R164 open corner。

## R357 rail-platform-upload — pass

元の二本の細い縦レールと床・選択行への支持を保持。狭幅でpreviewを省き、名前・補足を上段全幅、削除を下段に分離した。320px/実部品幅222pxの本文は36pxから132pxへ広がり、補足17px一行、single.txtの全文と長い名前の折返しをLTR/RTLとも確認。前回の可読性指摘を解消。

近似比較：元R357 / R352 cargo bay / R322 二本の横レール。

## 今回の確認範囲

- 固定round3正本100ファイルのSHA-256とreview-input-3.jsonが全一致。CSS配布10件一致。進捗3件30ファイルはround2から不変。captures/reviewer-extra-3/checks.json。
- 全7uploadsの固定native exportを独立再実行。実Enter native chooser、FileList/FormData、required/accept/size/max、削除focus、reset、実DataTransfer drop/depth/dedup、readonly/disabled、single/multiple、長いファイル名320/390/768、RTL、forced/reduced、preview URL revoke/destroyすべて成功。reviewer-uploads-3/checks.json。
- 全7件LTR/RTLでnormal hover/dragenter/dragleave/leave/reenterを2回ずつ実行。部品全体基準のinput/button/strong/svg/small/dropzone矩形とfontは14条件すべて固定。reviewer-upload-motion-3/checks.json。
- R354の初期・実複数ファイル・長文狭幅・RTL・forced画像を目視。空状態から実一覧まで同じ平底へ乗り、前曲面が下端を受けることを確認。reviewer-uploads-3/ceramic-tray-upload-*.png、reviewer-upload-motion-3/ceramic-tray-upload-ltr.png。
- R355狭幅本文22→118px、R357は36→132px、R354は122px。いずれも補足17px一行。LTR/RTLとも確認。短い名前が読め、長い名前は全文折返し、削除hit34pxを維持。
- 進捗3件の実量・不定・normal motion・forced/reducedは正本不変のためround2の独立検査を引継ぎ。round3で再操作したとは扱わない。
- 既承認近似の比較と元監査T保持基準はround2から継続。R354のみ新しい実物でA造形を再評価。

## 限界

- Chromium Linuxとforced-colors/reduced-motionエミュレーション。実OSすべてのnative chooserや支援技術読み上げまでは確認していない。
- React4形式を今回の独立検査では再起動していない。native actual exportsを独立検査し、主担当Reactログと区別した。
- 変更のない進捗3件は100hash照合の上でround2の実操作証拠を引き継ぐ。全730件すべてを今回再操作したものではない。
