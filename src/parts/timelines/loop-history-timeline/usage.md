# Loop History Timeline

輪の日付と本文の重みを揃える。実日時の88pxの輪郭、記録の下線と状態の線を同じ材へまとめ、選択だけが強い丸札を廃する。日時14px・セリフ見出し18px・本文14pxへ広げ、実本文面を輪の横の余白へ開く。狭幅は輪を全幅へ広げ、長い日時を省略せず、その下で記録を読む。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/LoopHistoryTimeline.tsx` がexportする `LoopHistoryTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
