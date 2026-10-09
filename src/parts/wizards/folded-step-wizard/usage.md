# Folded Step Wizard

現在の実章の面が、直下の入力紙へ折り返される手順紙。native章は全て104px以上の同じ字面位置を保ち、現在の章だけから64×56pxの斜めの返しが32pxの実空隙を渡る。現在の入力紙と実戻る・次へはその章の直後に開き、他の章は同じ紙の後ろの端として順序を保つ。現在が変われば実接続と開く位置も変わり、最後の未来章へ誤接続しない。本文紙40pxの掛け込みと45pxの逆の返面を持ち、狭幅は掛け込み24pxへ縮める。chapterの数字やタイトル、native入力・hitはhoverで移動しない。

## 内容と状態の接続
手順のサンプル値は保存・送信しません。beforeNextはPromiseに対応し多重操作を防ぎます。入力中のDOMをステップ移動ごとに作り直しません。外部でcurrentを更新する場合、その判断は利用先が行います。fieldsはtext/email/textareaに対応。

Reactのpropsは `react/FoldedStepWizard.tsx` がexportする `FoldedStepWizardProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
