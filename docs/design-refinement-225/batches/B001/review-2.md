# B001 / round 2 独立再検査

**pass：10件すべて。**

R089 のactive面 #314556 に対して主ラベル #e5edf5 は8.39:1、10px補助文 #a8b7c5 は4.84:1。凍結portableと実gallery双方で同値を実測し、round1の指摘は解消した。

R089は通常、hover入口・解除・再進入、320px、長ラベル、keyboard選択・閉じる、reduced、forcedを再確認。操作位置と暗い候補面の構造に回帰なし。measurements-2.json と evidence-2/ に証拠を保存。

他9件はround1でのpassを引き継ぐ。manifest間の差はR089 styles.cssのみで、9件の全ファイルhashが一致することを確認。現在の著者ソースとround2 manifestも全件一致。著者ファイルは編集していない。

これは実測した状態と対象についての判定であり、全入力・全ブラウザの無欠陥保証ではない。React固有の実行経路は今回未実行。
