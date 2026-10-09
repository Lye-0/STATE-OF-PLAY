# Ceramic Score Rating

一列全体を、一枚の大きく反る陶の自立面で読む評価。小さな丸上キーの反復を廃し、片側で58px/70pxへ大きく巻き込む一つの壁と、その下へ26px重なる52pxの広がる裾を形成する。星は壁の平らな読む面へ固定し、個別の台座や星箱を作らない。選択範囲は実星の塗り、確定位置は3pxの低い刻みで読み、複数行でも同じ一枚の陶面が全評価を支える。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/CeramicScoreRating.tsx` がexportする `CeramicScoreRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
