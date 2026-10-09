# Folded Cover Skeleton

実人物情報を持つカバーフラップと、画像・本文の誌面を実折背でつなぐ。112pxのフラップから6pxの終端材を含めた26pxの背が右の紙へ接触する。狭幅では情報を細列へ押し込まず、人物フラップを上の全幅へ開き、30pxの背を下の誌面へつなぐ。人物名16px・役割14pxを保ち、待機中と読み込み後で同じ列と折背を使う。

## 内容と状態の接続
loadingの切り替えは利用先の実際の通信・処理結果に接続します。placeholderはaria-hidden、rootはaria-busy。画面外・非表示・縮小モーションではアニメーションを止めます。childrenを取り外さず保持します。

Reactのpropsは `react/FoldedCoverSkeleton.tsx` がexportする `FoldedCoverSkeletonProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
