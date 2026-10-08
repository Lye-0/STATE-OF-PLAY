# Cargo Bay Upload

対向する二つの搬入口の支柱を、下の実床へ接続するファイル選択。元の開いた括弧を保持し、18px幅/6pxの支柱と12pxの床へ寸法を揃える。支柱は床へ4px重なり、選択後のファイル一覧は床の延長へ連続する。文字とnative操作範囲は開閉やドラッグで動かさない。

荷室の床と受領済みの積荷を分ける。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のCargoBayUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
