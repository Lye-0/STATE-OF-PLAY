# Slotted Card Profile

差込み口の片側から実肖像が張り出す人物の厚い紹介板。普通の名簿を廃し、100×104pxの実写真の終端12pxを、板の前の24pxの露出した保持口へ入れる。写真は口の後、16pxの名前は口の先の同じ板の平面へ置き、人物を囲う写真カードを別に作らない。板の斜めの自由端/7pxの上端/10pxの下端と、12pxの重なりで差込みの前後関係を見せる。在席表示は口に隠れない写真の上隅へ置く。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/SlottedCardProfile.tsx` がexportする `SlottedCardProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
