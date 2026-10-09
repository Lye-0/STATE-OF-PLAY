# Loop Handle Profile

大きく開いた輪の上で写真を支え、下の実氏名を輪の握りへ置く人物紹介。通常の写真穴のアーチ札を廃し、左右16px/上9pxの連続した輪と、128pxから始まる一体の名前の握りへ組む。写真は空隙の中央へ固定し、左右の8pxの受けが実写真の中心から輪の内壁まで直接届く。1人を全幅で表示した場合も、輪の内側は写真以外が大きく開き、同じ16pxの側材を保つ。名前と写真は輪の別々の実領域を使い、native画像/字/押面は動かさない。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/LoopHandleProfile.tsx` がexportする `LoopHandleProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
