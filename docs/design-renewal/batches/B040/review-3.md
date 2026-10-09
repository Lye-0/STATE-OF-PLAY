# B040 round-3 独立検査

7件 pass、3件 redesign。UI protocol成功と新規Aの主形評価を分離した。

## R545 letterpress-layout-skeleton — redesign

待機／実内容の対応と本文14pxは成立。元の離れた小図版は改善したが、四つの独立した面取り矩形と外周枠が主像で、活版の組まれた面には至らない。

実内容で四つの本文がそれぞれ小さい額縁になり、図版と人物も同じ外枠の内部に並ぶ。角の面取りと茶色だけでは新規Aの固有性が弱い。

改善方向：四本文を2–3pxの組版の隙間で一つの塊へ詰め、一側に24–32px程度の共通の活字小口を露出する。実題字を大きい版、実図版を別の版として同じ塊へ接続する。各本文の四辺枠を撤去し、R531の図版左／本文右やR401のL型組版台を再利用しない。偽の活字や番号は追加しない。

証拠：docs/design-renewal/batches/B040/captures/reviewer-skeletons-3/letterpress-layout-skeleton-loaded.png

近似比較：元R545, R531, R401, R505

## R551 archive-spine-timeline — pass

Tの細い背、四角い綴じ点、日時と読む紙の比率を保持。紙の下端の厚みと文字の整列が明瞭。全展開と狭幅でも履歴順を保つ。

近似比較：元R551, R109

## R552 railway-log-timeline — pass

Tの二本の軌道と枕木、三状態の丸い停車点を保持。実背景があり、日付と本文を結ぶ経路が全展開でも途切れない。

近似比較：元R552, R422, R382

## R553 folded-memory-timeline — redesign

日時、本文、接続片の実接触は確認した。しかし大きい折面ではなく二つの矩形を小片で結ぶ像が支配する。

92pxの日付面と右の紙の間の28×40pxの斜片が小さく、全体は日付カード＋本文カードの反復。折り返す紙が主形を決めず、近隣の二面構成との差も弱い。

改善方向：実日時を全幅の大きい折面に置き、本文の一枚紙へ32px前後重ねる44px程度の折返しで表裏を読ませる。日時／本文の操作上の位置から再構成し、短い橋を足すだけにしない。自由端と空隙を確保し、文字は変形させない。

証拠：docs/design-renewal/batches/B040/captures/reviewer-materials-3/folded-memory-timeline-1000-ltr-true.png

近似比較：元R553, R555, R275, R222

## R554 stone-milestone-timeline — pass

各行の石キーを繰り返すのではなく、全履歴を貫く一つの割れ目と残る石橋で日時側／記録側を接続。狭幅では切断端の間の縦橋が両面へ接し、読む数字を覆わない。

近似比較：元R554, R394, R494, R174

## R555 ledger-event-timeline — pass

全高で連続する日時の控えと記録紙を、大きい切取り空隙に残した紙橋で接続。独立した二枚札や見開きではなく、全記録の共通控えという読み順が形を決める。狭幅の上下接続も保持。

近似比較：元R555, R084, R275, R391

## R556 margin-note-timeline — pass

Tの余白線、斜体日時、セリフ見出しと本文の静かな階層を維持。読字を邪魔する重い枠を増やさず、全展開でも十分な行間を確保。

近似比較：元R556, R415

## R557 console-log-timeline — redesign

操作と読みは成立するが、左の着色した日時列と右のログの二列表が主像。開いた金属チャンネルの断面が形として弱い。

24pxの接続面と小さい欠きは二列表の装飾に留まり、外形を決める開放端／大きい折面になっていない。機器名の説明を除くと通常の色付き履歴表に近い。

改善方向：日時を各ログの直上へ移し、一つの全高側壁と48px程度の前端折面で連続する開放チャンネルへ。実日時／本文を同じ床で読む関係と断面を大きくする。偽の計器、操作、R537の首付きコンソールは追加しない。

証拠：docs/design-renewal/batches/B040/captures/reviewer-materials-3/console-log-timeline-1000-ltr-true.png

近似比較：元R557, R553, R282, R537

## R558 stitched-history-timeline — pass

大きい縦ループが前の記録から次の実孔へ到達し、短い前糸が重なる鎖の関係を確認。拡大したLTR／RTLの接点で孔背景、ループ端、手前糸が分離して見える。単なる離れたU列ではない。

近似比較：元R558, R378, R538, R157

## R559 open-plinth-timeline — pass

Tの開いた経路と紙の厚い下端を保ち、暗い展示背景の上でも日時、状態、本文が読める。余分な全周ケースを加えていない。

近似比較：元R559, R551

## 検証範囲

- 固定100 author hash一致、10配布CSS一致（captures/reviewer-hashes-3.json）。
- 独立 Chromium actual portable native：タイムライン9件、skeleton1件の全protocol成功。タイムライン実click/Enter、ARIA、制御受入／拒否、disabled、日時、実リンク、構造更新時の焦点、reset、destroy後無作用を検証。
- 長文320/390/768px×LTR/RTL、summary44px以上、本文14px、hover/leave/reenterで文字とhit矩形固定。強制色dark、reduced motionを検証。
- 全9履歴×1000/320×LTR/RTL×全閉／全展開の72条件を独立撮影・normal motionで操作。captures/reviewer-materials-3/checks.json。
- R558接点をdeviceScaleFactor3で拡大。次の孔中心と前ループ終端が一致、短い前糸も孔をまたぐ。captures/reviewer-chain-3。
- Skeleton待機と実内容、長い人物／役割／本文、入力DOM・値・選択範囲の保持、loadingのfocus移動／復帰／no-steal、inert、cleanupを実操作。
- 元baseline0実像・監査理由、承認済み近似部品と比較。共有timeline変更は100ファイル外としてprovenanceを分離。主担当のReact4形式／Signature23／gallery／typeログは補助証拠で、美的合格の代用としない。

## 限界

- 独立ブラウザはChromium。別エンジン・スクリーンリーダーの実読み上げは未検証。
- React4形式の全実操作は主担当ログを参照し、独立操作は固定portable nativeへ限定。
- 物理素材の評価は描画された前後・接点の視覚的整合であり、実物の工学的強度を証明しない。
