# Compass Notch Range

切欠きのある方位盤を、細い一本の線へ通すスライダー。元の多角形を残し、八つの厚い縁と明るい中央、細い二方向の基準線を明快にする。黄色の台に沈んだ輪郭を濃い小口で分け、盤の中心と主軌道を合わせる。

方位の刻みが現在値まで連続する。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のCompassNotchRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
