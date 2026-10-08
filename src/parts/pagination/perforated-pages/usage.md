# Perforated Pages

番号の穿孔紙片と実前後操作を、同じ小口と孔のピッチへ揃えるページ送り。元の切離し票を保持し、矢印の矩形枠と競合する点線を撤去する。すべての実票は3pxの紙小口と18pxピッチの2px孔を持ち、現在票だけがその同じ面で濃く変わる。

切取線の区画で現在ページを囲む。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のPerforatedPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
