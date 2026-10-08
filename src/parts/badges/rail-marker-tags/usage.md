# Rail Marker Tags

両端の短いレールで読む札を受けるタグ。元の左右端の材料の違いを保持し、数値の重複した罫を一本へ減らし、選択面を明るい青の同じ床へ揃える。レールの幅6pxと上/下の面を保持し、選択線や文字拡大を重ねない。長いラベルと大きな件数も同じ内側18pxの領域へ折返す。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

レールの停止点に札を固定する。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のRailMarkerTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
