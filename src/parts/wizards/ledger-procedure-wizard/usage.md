# Ledger Procedure Wizard

実章の一枚の前面が、下の56pxの連続曲面を回り、現在の入力紙の背面へ入る巻帳。上側だけに一つの大きい巻き返しを持ち、入力紙はその曲面へ16px重なって自由端へ伸びる。実戻る・次へは同じ紙の自由端に置き、下の独立した丸いキャップは廃する。曲面の両端12pxの小口と明るい上の8pxの面を露出し、nativeの実章→入力→操作の一枚の紙の順序を読む。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/LedgerProcedureWizard.tsx` がexportする `LedgerProcedureWizardProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
