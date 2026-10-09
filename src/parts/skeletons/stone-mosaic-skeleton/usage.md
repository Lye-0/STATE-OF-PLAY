# Stone Mosaic Skeleton

実図版の石板と、その説明を担う一続きの石台を、実蟻継ぎで組む。画像の石板の下端には幅104px・深さ32pxの台形の実切欠きが開き、下の人物・本文・資料を持つ台の104×32pxの実舌が隙間なく嵌まる。四つの丸角矩形を廃し、画像と説明の二つの本体の支持関係を主形にする。人物も本文も無変形の平らな領域へ置き、末端だけ斜めに払って台の厚さを示す。

## 内容と状態の接続
loadingの切り替えは利用先の実際の通信・処理結果に接続します。placeholderはaria-hidden、rootはaria-busy。画面外・非表示・縮小モーションではアニメーションを止めます。childrenを取り外さず保持します。

Reactのpropsは `react/StoneMosaicSkeleton.tsx` がexportする `StoneMosaicSkeletonProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
