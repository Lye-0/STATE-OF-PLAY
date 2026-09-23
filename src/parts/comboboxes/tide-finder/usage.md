# Tide Finder

検索して候補を選択します。候補はitemsから供給します。loading/errorは外部処理に合わせて明示します。IME変換中はEnterを確定操作に使いません。

## 組み込み

Reactは同梱のTideFinderを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## v4.7.0 / RESONANCE

入力すると材料の面が開き、候補の背後の選択面がなめらかに移動します。

入力は実際のinputで、キャレット・Undo・選択を保持する。IME確定前のEnterを確定処理に使わない。候補のhoverはactiveのみで選択値ではない。選択済みcheckとactive面は別。元のoptions/group/description/badgeを差し替え可能。複数選択とフォーム連携を維持。スクロールや画面端でも候補と背景面が一致する。

色と寸法は`foundation/resonance/style.css`、変形は`resonance/art.ts`が正本です。表示内容はAPIから変更できます。導入向けのZIPに必要な依存処理は含まれます。背景用SVGは操作を受け取りません。
