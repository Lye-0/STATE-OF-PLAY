# Transit Notice

notify({title, description, tone, duration, actionLabel, onAction})から実際の結果を通知します。架空の保存処理はありません。

## 組み込み

Reactは同梱のTransitNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## v4.7.0 / RESONANCE

通知の面が素材ごとに開き、閉じると静かに退きます。

通知本文は実際のnotify()引数のみ。見せかけの成功や擬似保存を持ち込まない。durationは表示時間であり処理進捗ではない。hover/focus/非表示タブ/pausedで残り時間を保持して停止する。duration:0は自動消去しない。dismiss後は退出中でも操作/読み上げ対象から外す。上限、action、取り外し時のtimer/animation解除を維持。

色と寸法は`foundation/resonance/style.css`、変形は`resonance/art.ts`が正本です。表示内容はAPIから変更できます。導入向けのZIPに必要な依存処理は含まれます。背景用SVGは操作を受け取りません。
