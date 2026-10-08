# B033 round-6 最終限定再検査

**全10件合格。** R456の中間幅での長い負数表示を再確認し、他9件は不変hashでround-5の判定を継承した。実装・snapshotは編集していない。

合格、T保持。糸巻きの木のフランジ・側部だけの巻き線・無地の数値窓と丸い実操作を維持し、font上限26px/字間0、下段キーへの切替をcontainer340px以下へ調整。-12345.678は320/390/768×LTR/RTL、および本文318/334/339/340/341/344/364pxの切替境界で全桁表示。最も厳しい本文341pxの横並びでも字幅156.533203125pxが入力内幅161pxへ収まり、4.466796875pxの余裕を保つ。長い単位も巻き線へ重ならず、同じ素材の形で下段へ切り替わる。

## 全10件判定

- R453 folded-tally-number: pass
- R454 stone-block-number: pass
- R456 spool-count-number: pass
- R458 stitched-count-number: pass
- R459 open-jaw-number: pass
- R460 bookend-counter: pass
- R462 rail-stop-number: pass
- R463 ribbon-count-number: pass
- R464 ceramic-count-number: pass
- R465 perforated-counter: pass

## 今回の実施範囲

- 固定round-6正本100 SHA-256がreview-input-6と一致、実portable CSS10もimport除去後全一致。5→6は99正本不変、spool-count-number/styles.cssのみ変更。captures/reviewer-spool-6/checks.json。
- R456を固定native実配布で独立再操作。全protocol（キー/上下限/小数step/draft/invalid/Escape/IME/selection/readOnly/disabled/controlled拒否/実FormData/reset）・長負数/長単位320/390/768×LTR/RTL・font/矩形固定・forced/reduced/destroyを再実行し成功。logs/reviewer-numbers-r6.log、captures/reviewer-numbers-6。
- 追加の20状態を撮影/測定。viewport320/390/768と、実root外幅354/370/375/376/377/380/400を各LTR/RTL。実fontのCanvas字幅<=native input content幅、方向LTR、root overflowなしを確認。reviewer-spool-6。
- container本文339/340pxでは同じ巻き芯の下に操作を置き、341pxでは左右の丸い操作へ切替。両側で巻き線/フランジ/無地の数字・単位を維持することを画像で確認。最小の字幅余裕4.466796875px。
- 他9件の通常造形/独立native/接合/途中状態はround-5から正本不変のため正式5の結果を継承。今回それら9件の操作を再実行したとは扱わない。

## 限界

- 独立操作はChromiumの固定native実配布。React4形式と共有基盤回帰は今回独立再実行しておらず主担当の成功報告と区別する。
- 730件全体を今回再操作したわけではない。元監査と対象/近似の画像・固定CSS・前回判定を用いた比較。
- 普通の文字列・選択/入力APIのテスト成功は、美的独立性や素材の接続の合格理由とは分離している。
