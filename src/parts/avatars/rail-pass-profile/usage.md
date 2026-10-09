# Rail Pass Profile

人物の肖像を二本の連続したレールへ載せ、名前の読む面を横の接続片で受けるプロフィール。一般的なIDカードと左の罫線を廃し、5pxの連続レール、肖像の両端の10pxの成形受け、名前面へ渡る8pxの同じ接続片を作る。人物名は16pxの実情報として肖像へ近づけ、長い所属も同じ平らな面へ折返す。値を動く位置の進捗へ捏造せず、選択は本人の受け材の密度へ示す。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/RailPassProfile.tsx` がexportする `RailPassProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
