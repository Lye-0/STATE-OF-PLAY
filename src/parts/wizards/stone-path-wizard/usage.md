# Stone Path Wizard

実手順を一つの地形の縁へ並べ、現在の場所だけから入力床へ渡る石の道。24pxの後ろの連続道が全てのnative章を結び、四辺の小石箱は廃する。現在の実章の切口から64pxの渡り石が32pxの背景を渡り、両端16pxずつで地形と入力床へ接する。現在が変われば渡り石も実章へ移り、固定中央や最後の未来章を接続しない。狭幅は現在の行の直後へ入力床と実操作を開き、後ろの道とnative章順は続く。任意の手順数でも実名の読む幅を確保し、入力の字面・caret・hitは平らに保つ。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/StonePathWizard.tsx` がexportする `StonePathWizardProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
