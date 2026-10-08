# B007 検証

最終正本の型チェック3構成/730件配布契約4テスト、ギャラリー対象10件、React accordion6件の実items4形式・fields4件の実props4形式は成功。native fieldsカテゴリ20件2レイアウトは最終正本で成功。固定版のaccordion6件はround-1からキー/即時ARIA/任意本文/長文/入力保持/RTL/forced＋−/reduced成功、R101の番号重なり順の修正後はギャラリーと最終Reactで再確認。固定round-3 fields4件はnativeフォーム/選択/合成IME/undo/clear/error/入力矩形/disabled/readonly/長文320/RTL/forced/reduced成功。password/reveal/prefix/suffix/textarea成長とStrictMode解除は実Reactで確認。

独立Astra round-2→3でR111再設計・R113調整を完了し10件pass。round-1は自主検証版。残る8件は正本不変の通常造形/前回実操作を引継ぎ、fieldsは4件を再操作。孔の抜きは白/暗色背景、可動唇と紙の接合はinitial/focus/leave/reenterで確認。source hash100件一致。共有runtime/import変更なし、B001 production build成功を参照。Chromium/メディアエミュレーション/合成IMEで、他ブラウザ/実機touch/実OS日本語IME未実施。
