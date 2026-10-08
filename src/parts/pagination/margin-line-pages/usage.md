# Margin Line Pages

開いたL断面の組版受けへ、実索引の読む床と大きい現在ノンブルの活字面を載せるページ送り。赤い細罫と大きい数字だけの方式を廃止し、28pxの厚い側受けと14pxの下底、一枚の込め物の床、現在面の14pxの上肩/8pxの側面/12pxの受面で実段差を作る。他の小さい索引は同じ床に固定し、四辺の額縁や独立した箱の列を作らない。番号とnative hitはhoverで動かさない。

余白の罫線を現在の数字の下へ通す。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のMarginLinePagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
