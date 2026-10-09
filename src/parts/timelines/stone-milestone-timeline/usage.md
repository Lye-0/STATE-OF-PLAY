# Stone Milestone Timeline

時系列を一つの露頭の割れ目として読む。92pxの実日時面と記録面の間に30pxの本当の裂け目を通し、各日時とsummaryの高さに54×28pxの残った石の橋を置く。橋は日時側と記録側へ12pxずつ入り、裂け目の上下は背景へ抜ける。各行の面は途切れず全高の岩体へ続き、本文を小さい丸角石へ分割しない。狭幅は日時を上の切口へ移し、34pxの残存橋で下の実記録面へつなぐ。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/StoneMilestoneTimeline.tsx` がexportする `StoneMilestoneTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
