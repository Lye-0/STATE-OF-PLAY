# Folded Id Profile

肖像の面と名前の面が、大きい一つの折れを境に向きを変える人物紙。上の小さいタブと折角カードを廃し、172pxの斜めの写真面、32pxずれて下へ続く氏名面、両方の実端へ接する幅全体の40pxの折面を作る。100pxの写真は上の面を実際に使い、16pxの本人名と所属は下の別方向の面で全行を読む。上の面の斜め下端と下の面の斜め上端を、四点の一つの折面へ直接つなぐ。写真・文字・native押面を変形させず、狭幅/RTLも同じ折れと読む二領域を保持する。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/FoldedIdProfile.tsx` がexportする `FoldedIdProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
