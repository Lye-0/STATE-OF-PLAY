# Open Bracket Rating

片側が開いた実金具に、星の読み札を差し込む評価。細い四隅の括弧を廃し、48pxのC形の支持、そこから札を12px覆う二つの前の保持爪、右へ張り出す64px高の本当の星札へ組む。金具の上と下には札との間の実空隙が残り、星は札の固定平面へ読む。選択範囲は札の密度、確定位置は札の上端で示す。RTLでも金具と爪を同時に鏡映し、実ラジオの全112pxの当たりと星の大きさは保つ。

## 内容と状態の接続
実際のradioとlabelを用います。Space・矢印キーとフォーム値を維持。ホバーはプレビューであり値の変更ではありません。未評価は0。

Reactのpropsは `react/OpenBracketRating.tsx` がexportする `OpenBracketRatingProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
