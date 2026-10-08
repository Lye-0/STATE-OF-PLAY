# Open File Choice

番号の見出し札と二つの紙の層が連続する、開いたファイルの単一選択。元の上の番号を保持し、55pxの背の見出しが10px下の本文面へ続く実輪郭を作る。中の読む紙を右上の曲面と下の小口へ重ね、重なりの方向を一致させる。文字とnative丸印は固定する。

綴じ穴の列が選択したファイルの軸になる。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のOpenFileChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
