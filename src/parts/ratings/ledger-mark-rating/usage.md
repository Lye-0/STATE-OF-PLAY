# Ledger Mark Rating

同じ一つの根元から開いた実紙葉を、自由端で選ぶ帳簿の評価。縦綴じの横へ並べた矩形セルを廃し、全葉の実根元を同じ下の28×42pxの綴じへ集め、84×50pxの自由端を56pxずつ離して露出する。星と01〜最大10の実順位は各自由端の同じ平面で読む。紙だけが共通の根元へ長く戻り、nativeラジオの行と印は固定する。色の反復ではなく、一冊の開いた葉/根元/露出した読む端で形を作る。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/LedgerMarkRating.tsx` がexportする `LedgerMarkRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
