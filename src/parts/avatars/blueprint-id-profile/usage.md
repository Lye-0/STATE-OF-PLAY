# Blueprint Id Profile

人物の写真版を、開いた三角支持の製図台へ載せる紹介。角形アバターへL字の罫線を足す方式を廃し、実肖像82px、そこへ4px入る120pxの台面、下へ58px広がる二股の実支持を一続きに組む。支点の下には真の三角の空隙があり、名前はその下へ全幅の16pxで読む。定規の文字や偽の測定値を足さず、実写真版と開いた支持形で設計の性格を出す。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/BlueprintIdProfile.tsx` がexportする `BlueprintIdProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
