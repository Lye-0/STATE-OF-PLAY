# Rail Platform Upload

二本の縦レールから、下の搬送床とファイル一覧へ接続するファイル選択。元のレールを保持し、5pxのレール端を30pxの床へ接地させ、下の選択済み一覧の側へ幅を揃える。無関係な長い線を減らし、床・レール・実ファイルの関係を一つの搬送面として読めるようにする。

ホームの線の上に受領したファイルを停める。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のRailPlatformUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
