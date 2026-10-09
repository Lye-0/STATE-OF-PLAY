# Book Jacket Skeleton

一枚のジャケットの巻返しを、実本文紙の背面へ通して反対の小口へ戻す。実図版と人物の表紙の右に三資料を載せた68pxの巻面を置き、本文上端の右の32×76pxの実口へ入れる。幅26pxの一続きの帯が本文の裏で対角へ渡り、左下の同寸の実口から現れて下へ32px出る。全周の面取り枠と表紙・本文の24pxの断絶を廃し、隠れる巻返しと二つの実開口でつなぐ。本文は広い固定面、狭幅は細い12pxの巻返しと20pxの口へ切り替えて文字の幅を確保する。

## 内容と状態の接続
loadingの切り替えは利用先の実際の通信・処理結果に接続します。placeholderはaria-hidden、rootはaria-busy。画面外・非表示・縮小モーションではアニメーションを止めます。childrenを取り外さず保持します。

Reactのpropsは `react/BookJacketSkeleton.tsx` がexportする `BookJacketSkeletonProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
