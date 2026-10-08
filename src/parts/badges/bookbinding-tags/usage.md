# Bookbinding Tags

各実タグの読む表紙と裏の紙葉を、一筆の露出した綴糸で結ぶ。片丸札の小さな製本記号を廃し、表紙と8pxの裏紙の間に10pxの真の空隙を作る。幅16pxのC形の糸が一つの表紙孔から外へ回り、空隙を越えて裏紙の孔へ戻る。孔の端29pxに対し全文・アイコンは40px内側へ確保する。糸を小さい記号として貼らず、二つの読む素材の連結が札の外形を決める。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

綴じ糸が選択した札を束ねる。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のBookbindingTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
