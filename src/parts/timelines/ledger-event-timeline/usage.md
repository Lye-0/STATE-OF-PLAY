# Ledger Event Timeline

一本の実日時の控えと、開く記録面を残し橋でつなぐ帳簿。104pxの日時列は全記録を通して連続し、その横の24pxの実空隙を40×36pxの紙橋が渡る。橋の端は控えと本文面へ8pxずつ入り、日付を小札へ分割しない。実日時は18px、見出しはセリフ18px、本文は14pxで読む。狭幅では日時の控えを上へ回し、36×40pxの残し橋を縦へつなぎ替え、全幅の実記録を開く。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/LedgerEventTimeline.tsx` がexportする `LedgerEventTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
