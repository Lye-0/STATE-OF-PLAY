# Contour Popover

interactive=falseは説明用tooltip、trueは操作できるpopoverです。表示内容はcontentで変更します。

## 組み込み

Reactは同梱のContourPopoverを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## v4.7.0 / RESONANCE

トリガーの面から情報がほどけ、本文は静止したまま背景が反応します。

interactive:falseはrole=tooltipで、フォーカスはトリガーから動かさない。ホバー領域を通っても消えずEscapeで閉じる。interactive:trueだけがrole=dialogの非モーダルpopoverで内部操作を持つ。切り替え時にARIAと内部tab順を同期する。内容/ラベルを外部設定し、既存のaria-describedbyを破棄しない。

色と寸法は`foundation/resonance/style.css`と`hint-style.css`、出現の動きは`hint-art.ts`が正本です。ApertureとPrismの既存の幾何学的な場面には`art.ts`も使います。表示内容はAPIから変更でき、導入向けZIPに必要な依存処理を含めます。

## 展開面と長い内容（v4.13.2）

パネルの外枠は装飾のはみ出しをクリップし、表示した瞬間に余分なスクロールバーを出しません。長い本文・操作面は内側だけを縦にスクロールできます。ページや周囲の領域をスクロールしたらパネルは閉じます。

等高線が端から広がり、注釈の本文へ視線を集める。 動きを減らす設定では出現演出を停止します。

## v4.13.4 / 配置とトリガー

開く途中も完成後もパネルは「詳しく見る」の上に重ならず、画面端では上下を切り替えます。
