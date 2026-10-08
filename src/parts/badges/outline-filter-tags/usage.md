# Outline Filter Tags

選択をnativeチェックと明るい青の面で一目で確認できる実用タグ。薄い緑枠と淡い状態差を、同じ寸法の灰青の輪郭、選択時の青い読む面、実checkboxの確定状態へ揃える。装飾を増やさず、名称・実件数・削除の操作が導入先でも使えるBに整える。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。


輪郭で選択を示す小さな分類。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のOutlineFilterTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
