# Stone Pip Rating

星を彫った一枚の石壁を、開いた尖頭アーチで支える評価。個々の楕円石と受け、石の階段を使わず、122pxの石の列廊、各12pxの側柱、58pxの頂点から下へ抜ける実空隙へ組む。隣の石は上の同じ壁面と柱の面へ直接続き、星は空隙の上の平らな石面へ固定して読む。選択範囲だけ同じ石の密度が変わり、星の位置とnative122px押面は動かない。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/StonePipRating.tsx` がexportする `StonePipRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
