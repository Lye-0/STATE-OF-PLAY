# Spine Index Pages

露出した厚い背から、実表示ページごとの索引葉を斜めの紙根で開くページ送り。横の番号札を廃止し、実表示ページを40pxの縦の紙葉へ並べ、18pxの曲面の背と24pxの斜めの根元を連続させる。ページ番号は葉の読む面へ固定し、実前後操作はその下の左右から動かさない。省略記号は紙葉に見立てず余白へ置く。

本の背から現在ページの札が伸びる。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のSpineIndexPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
