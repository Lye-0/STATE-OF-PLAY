# Letterhead Profile

人物名の大きい活字を、肖像版が下の自由端から張り出す一枚のレターヘッドへ組む紹介。名簿型の小さい二列を廃し、名前は23〜30pxのセリフ体で紙の全幅を使い、所属を同じ上の読む面へ置く。下の右端を100px広く開き、76×90pxの実肖像を8pxだけ前紙の裏へ入れる。52×34pxの裏の返りが版の端へ入り、写真は紙の空いた部分から露出する。狭幅/長い人物名でも同じ切り開いた紙を保持し、文字や写真を変形させない。

## 内容と状態の接続
画像が読み込めないときはイニシャルを表示。氏名や在席状態を外部から渡し、存在しないオンライン状態を捏造しない。ユーザーの選択とプロフィール表示は別の機能です。

Reactのpropsは `react/LetterheadProfile.tsx` がexportする `LetterheadProfileProps`、通常DOMは `init(root, options)` の型を参照してください。
通常DOMの返り値は `getState()`、`update(options)`、`reset()`、`destroy()`、`setPaused(boolean)` を持ちます。
`value`、`current`、`expanded`を渡した場合は外部制御となります。要求値のcallbackを受けたら利用先の状態を更新してください。

## ReactとDOMの担当範囲
Reactは外側とchildrenを所有し、data-sg-owned内部はcontrollerが専有します。同じ入力DOMを両者が書き換える構成にはしません。SSRの初期表示にはエスケープ済みの実マークアップを使います。取り外し時はイベント・Observerを解除します。

## 実装の差し替え
マークアップ内のdata-sg-configは通常HTMLのサンプル値です。initのoptionsで上書きできます。デモの人物・履歴・成功表示を実データと混同しないでください。
