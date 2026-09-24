# Velvet Notice

実際の処理結果をnotify({ title, description, tone, duration, actionLabel, onAction })で知らせます。デモの文言や架空の保存処理は配布コンポーネントへ持ち込みません。

## 組み込み

Reactは同梱のVelvetNoticeを読み込み、controllerRefからnotify()・dismiss()・setPaused()を呼びます。通常DOM版はmarkup.htmlとstyles.cssを配置し、init(element, options)から得たコントローラーで同じ操作を行い、不要になったらdestroy()します。
通知の発行元となる通信・保存・検証は利用先で接続してください。Reactが管理する外側とコントローラーが管理する内側のDOMを分けます。

## 通知専用の表現 — v4.13.3

布の上縁がほどけ、文面を覆っていた幕が上がる。通知の見出し・説明・アクションはnotify()へ渡した値だけを表示します。

配布するstyles.cssにはfoundation/resonance/notice-style.css、コントローラーにはnotice-art.tsを含みます。静止見本と実通知は同じ外観です。動きを減らす設定では到着と退出の演出を省きます。

durationは表示の残り時間であり処理の進捗ではありません。hover・focus・非表示タブ・pausedの間は停止し、duration: 0は自動で消えません。閉じた通知は退出演出中も読み上げと操作の対象から外します。
