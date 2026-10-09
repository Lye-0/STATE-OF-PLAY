# Blueprint Stage Wizard

現在の実章を載せる後方立面と、実フォームの薄い紙を、二本の非対称な斜め支持で組む。二面の32pxの本当の空隙へ18度と22度の幅20pxの支持を差し込み、両端がそれぞれの実面へ重なる。作業紙は片側に開き、実戻る・次へは同じ紙の自由端に置く。現在の行の自然高を共有し、長い章名・fields・errorでも二本の支持が章面と書く面へ接する。狭幅は二つの支持を現在章と入力紙の間の上側へ収め、nativeの順序と字面は変形しない。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/BlueprintStageWizard.tsx` がexportする `BlueprintStageWizardProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
