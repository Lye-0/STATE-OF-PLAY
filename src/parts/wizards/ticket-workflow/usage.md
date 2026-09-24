# Ticket Workflow

ミシン目で分かれる工程と、紙の乗車券のような操作面。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/TicketWorkflow.tsx` がexportする `TicketWorkflowProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
