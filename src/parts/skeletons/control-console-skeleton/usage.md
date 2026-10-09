# Control Console Skeleton

離れた図版面を、一体の曲がる首で支える読出しコンソール。全周の面取り箱を廃し、200pxの実図版が72pxの本当の空隙の上へ立つ。幅72pxの首は図版下の厚みへ接し、人物と本文を読む別の台へ12px差し込む。三資料はその台の前面へ載り、上面14px・前端18pxの深さを持つ。架空の操作ノブは作らず、実図版・ログ・資料の関係だけで主形を作る。

## 内容と状態の接続
loadingの切り替えは利用先の実際の通信・処理結果に接続します。placeholderはaria-hidden、rootはaria-busy。画面外・非表示・縮小モーションではアニメーションを止めます。childrenを取り外さず保持します。

Reactのpropsは `react/ControlConsoleSkeleton.tsx` がexportする `ControlConsoleSkeletonProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
