# Tide Popover

interactive=falseは説明用tooltip、trueは操作できるpopoverです。表示内容はcontentで変更します。

## 組み込み

Reactは同梱のTidePopoverを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## v4.7.0 / RESONANCE

トリガーの面から情報がほどけ、本文は静止したまま背景が反応します。

interactive:falseはrole=tooltipで、フォーカスはトリガーから動かさない。ホバー領域を通っても消えずEscapeで閉じる。interactive:trueだけがrole=dialogの非モーダルpopoverで内部操作を持つ。切り替え時にARIAと内部tab順を同期する。内容/ラベルを外部設定し、既存のaria-describedbyを破棄しない。

色と寸法は`foundation/resonance/style.css`、変形は`resonance/art.ts`が正本です。表示内容はAPIから変更できます。導入向けのZIPに必要な依存処理は含まれます。背景用SVGは操作を受け取りません。
