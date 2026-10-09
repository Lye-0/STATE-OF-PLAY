# Ceramic Stage Wizard

上下の二つの大きい肩と、内側へ絞る胴を一つの陶器の外形として作る。全高に沿う本当の輪郭が上・中央・下で変わり、小さな丸番号と角丸箱を廃する。実手順は上の縁、入力紙は胴の平底、操作は下の縁へ載り、字面は72pxの余白の中の平面で読む。狭幅では余白を32pxへ整え、native入力と48pxの操作を輪郭で切らない。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/CeramicStageWizard.tsx` がexportする `CeramicStageWizardProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
