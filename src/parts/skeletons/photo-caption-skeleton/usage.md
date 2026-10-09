# Photo Caption Skeleton

写真を212pxの主面として先に見せ、人物・本文・資料をキャプションとして続ける。太い外枠を増やさず、写真の比率と22pxの余白、資料の上下線で全体を整える。待機中と実内容の領域を一致させ、本文14px・人物16pxの読みやすさを維持する。

## 内容と状態の接続
loadingの切り替えは利用先の実際の通信・処理結果に接続します。placeholderはaria-hidden、rootはaria-busy。画面外・非表示・縮小モーションではアニメーションを止めます。childrenを取り外さず保持します。

Reactのpropsは `react/PhotoCaptionSkeleton.tsx` がexportする `PhotoCaptionSkeletonProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
