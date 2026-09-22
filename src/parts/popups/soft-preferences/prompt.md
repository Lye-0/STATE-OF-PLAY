# Soft Preferences — 再現仕様
説明とチェック項目を並べた、柔らかな設定パネル。

styles.css/popup-base.css/popup-content.cssの色・寸法・余白・輪郭・文字組みと、examples内の内容構成を正本にする。ベース#26312d、本文#e7f0e9、アクセント#b8d5be。意図は「好みに、合わせる。」。枠だけではなく内部のsoft / settingsの情報表現も維持する。

body外へinnerHTMLで複製せず、実際のdialogをshowModal()で開く。開いた状態のトップレイヤー、後ろのinert、Escape/Tab/Shift+Tab、閉じた後のフォーカス復帰、スクロールロック解除を確認する。上位の詳細モーダルへEscapeが漏れないこと。タイトルとaccessible nameを関連付ける。ネイティブdialogに手動のaria-modalだけを付けた疑似モーダルへ置き換えない。

本文とフッターは利用先のReactNode/HTMLへ差し替え可能。既存のformを入れる場合はsubmit/typeと処理を確認し、閉じた理由で保存・送信したと誤表示しない。デモの値や選択を永続化しない。開閉は利用者の操作に応じて行い、ブラウザーのwindow.openは使わない。外部制御の拒否、連続開閉、別個体同時表示、取り外し、縮小モーションと狭い画面を確認する。
