# Blueprint Score Rating

三つの折れた放射翼が、中央の実星の接合面へ収束する製図折片の評価。連続する壁と脚の型を廃し、長さの違う三枚の実翼とその間の本当の空隙へ再設計する。44pxの中央の接合面は全翼へ重なり、28pxの実星を固定した平面で読む。翼の面の密度で選択範囲を示し、確定した接合面だけの上端を濃くする。偽の目盛りや自転は加えず、nativeの当たりは116pxの位置を保つ。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/BlueprintScoreRating.tsx` がexportする `BlueprintScoreRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
