# Inspection Pad Upload

左の支柱へ一つの検査梁を接続し、その下の受台で書類を確認するファイル選択。大きい空白面と短線を撤去し、24pxの三面の支柱・48pxの横梁・10pxの受台へ構成する。梁は支柱へ6px重なり、native選択は梁の下に固定する。ファイルの実名前・サイズは同じ受台の延長へ並ぶ。

検査台の照準と受領リストを独立させる。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のInspectionPadUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
