# Folded Tab Pages

一枚の紙を前後へZ状に折り、24pxずれた三つの紙面で実索引を示すページ送り。閉じた左右の側壁と対称の額縁を廃止し、上の紙は奥から読む面へ進み、下の紙は読む面から奥へ戻る異なる折る方向にする。側端は開き、44pxの上下返しと8pxの折目が中央の読む紙へ連続する。実番号とnative hitは中央面へ固定し、RTLでは折紙全体の向きだけを鏡映する。

折った札の頭で現在位置を明示。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のFoldedTabPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
