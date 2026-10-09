# Medallion Seat Profile

円形の人物メダルを、曲がった一つの座へ載せるプロフィール。カメオの卵形とは異なる90pxの正円と4pxの鋳造縁を保持し、下の細い水平線を120×22pxの実切欠きのある受けへ揃える。円形面の下16pxは受けの曲がる口へ入り、本人名は別のカードを足さず座の下の平面で読む。選択はメダルの縁の密度へ示し、本人画像や名前の位置は動かさない。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/MedallionSeatProfile.tsx` がexportする `MedallionSeatProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
