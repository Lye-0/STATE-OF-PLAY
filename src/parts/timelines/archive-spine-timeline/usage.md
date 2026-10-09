# Archive Spine Timeline

保管記録の背と紙面の階層を揃える。72pxの日付列、実記録の本文面、四角い綴じ点を細い背へ接続し、本文面は下の3pxだけで紙の厚みを示す。日付13px・見出し16px・本文14pxへ広げ、狭幅では日付を上へ移して全文を読める幅を確保する。native summaryは64px以上、状態は色と実文字の両方で読める。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/ArchiveSpineTimeline.tsx` がexportする `ArchiveSpineTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
