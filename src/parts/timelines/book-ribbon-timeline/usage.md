# Book Ribbon Timeline

日付の実しおりと本文を、余白と同じ基準へ揃える。84pxのしおりの実日付を14pxへ広げ、下の16pxの自由端は背景へ抜く。本文は紙の箱へ囲わず、しおりに隣る一つの記録面として読む。黄土色の面積を日時だけへ絞り、実見出し16px・本文14pxと18pxの余白を確保する。狭幅は日付を上へ移し、切欠きの位置を読む面の外へ残す。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/BookRibbonTimeline.tsx` がexportする `BookRibbonTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
