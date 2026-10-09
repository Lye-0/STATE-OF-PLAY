# Ribbon Badge Profile

人物メダルの背を通った一本の帯を、名前の下へ続ける紹介札。濃淡の別々の箱を廃し、実肖像の後の42pxの横の返りと、58pxから下へ続く同じ布の前帯へ揃える。写真は前後の帯の交点へ固定し、名前は前帯の同じ読む面へ置く。下のV字の自由端と9px/12pxの端面で織った帯を示し、選択でも写真と文字は揺らさない。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/RibbonBadgeProfile.tsx` がexportする `RibbonBadgeProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
