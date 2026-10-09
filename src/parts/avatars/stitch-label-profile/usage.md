# Stitch Label Profile

実肖像を織布の大きい開いた写真ポケットへ差す人物ラベル。短い縦の縫い線を廃し、82pxの肖像の下20pxを保持する幅広い織ったポケット口、斜めの生布端と12pxの折る素材へ変える。本人名/所属も同じ一枚布の下の平らな領域へ記し、写真の周囲へ普通の丸枠や社員カードを足さない。選択では織布の密度を変える。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/StitchLabelProfile.tsx` がexportする `StitchLabelProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
