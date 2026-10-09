# Folded Memory Timeline

実日時を全幅の大きい折面へ載せ、記録紙をその手前へ折り返す。142px以上の日時面は48pxの斜めの自由端と44pxの折り耳を持ち、本文紙が下の42pxへ実際に重なる。44×84pxの戻りが日時面から手前の記録紙へ続き、紙の外は背景へ開く。独立した小さい日付札を横に並べず、日時・折返し・本文が一枚の紙の前後を担う。狭幅は折端28px・重なり32pxへ調整し、実文字は無変形で全文を読む。

## 内容と状態の接続
日付、状態、本文は提示された値の表示。閲覧によってstatusをdoneへ変更しません。詳細はdetails/summary。本文は文字列で、任意HTMLを解釈しません。

Reactのpropsは `react/FoldedMemoryTimeline.tsx` がexportする `FoldedMemoryTimelineProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
