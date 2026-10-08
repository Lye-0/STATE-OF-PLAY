# Folio Band Upload

露出した厚い背から、四つの中空の綴じ環を実際の紙孔へ通すファイル選択。平たい表紙と細い留め帯を廃止し、28pxの背、20pxの空隙、実紙面へ渡る72pxの環を作る。環の先端は紙面の孔へ入り、選択した実ファイルの行も同じ背へ個別の環で綴じる。文字と削除を綴じる余白から離し、RTLでも背と孔が同じ側へ移る。

冊子を束ねる帯と受領した書類の背を連続させる。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のFolioBandUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
