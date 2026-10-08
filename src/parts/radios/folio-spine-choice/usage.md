# Folio Spine Choice

一つの厚い背へ、紙束の三項を二つの綴じ輪で収める単一選択。左一本の線をやめ、22pxの共通の背と各項の上下の4pxの綴じ腕を実接続する。読む紙には上/下/小口の三つの厚みを作り、文字とnative丸印を綴じ腕の内側へ固定する。

冊子の背を選択した項目へ開く。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のFolioSpineChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
