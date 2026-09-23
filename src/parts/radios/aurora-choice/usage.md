# Aurora Choice

本物のradioとlabelです。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のAuroraChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## v4.7.0 / RESONANCE

選択カードの背景面と状態表示が切り替わります。ラベルとネイティブradio自体は動かしません。

入力値は実際のラジオボタンから確定します。選択しないhoverだけで値を変更しない。複数配置、required/name/FormData/reset、controlledでの更新拒否、disabled/readOnly、2項目以上への差し替えを保持する。

色と寸法は`foundation/resonance/style.css`、変形は`resonance/art.ts`が正本です。表示内容はAPIから変更できます。導入向けのZIPに必要な依存処理は含まれます。背景用SVGは操作を受け取りません。
