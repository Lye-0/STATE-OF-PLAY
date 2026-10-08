# Embossed Label Tags

実名称を上の読む橋、実件数と削除を下の鋳弓へ置く、一体の鋳造の弓形タグ。厚い角丸チップを廃し、左右16pxの支柱と丸く返る64pxの下の鋳面へ、名称の平らな橋が接する。二つの読む位置の間には30px以上の本当の空隙を開ける。任意の長い名称が上の橋を伸ばし、実件数と削除は下の素材面に固定する。選択で輪郭/文字位置は動かない。

浮彫りの札が選択時に沈む。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のEmbossedLabelTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
