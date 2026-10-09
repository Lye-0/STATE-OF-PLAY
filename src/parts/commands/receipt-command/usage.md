# Receipt Command

実queryの平らな送り面と、実候補件数を読む88pxの端面を一体の送り部材にする。候補紙は40pxの深い開口へ16px入り、20pxの前唇が紙の上32pxを覆う。native読字は開口の下へ48px離して守る。切断紙を丸い検索欄へ載せる構成から、実query・件数・差込みの断面が役割を持つ主形へ変える。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`ReceiptCommand`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

## 動作
native dialogを使う。open時に検索入力へ、Escapeで閉じて開いた要素へ戻る。矢印で候補、Enterで実行、Backspaceで上の階層へ。hotkeyのグローバル登録は明示指定のみ。非同期処理と取り外しの競合を保護する。

## 状態とライフサイクル
変更コールバックは要求値を通知します。controlled値を渡した場合は親から新しい値を返してください。通常版は`update()`、`getState()`、`reset()`、`destroy()`を返します。React版はapiRefでも取得できます。取り外すときはイベント・Observer・未完了リクエストを解放します。

## 制約
このパーツはUIで、データの保存・削除・ネットワーク処理は行いません。フォーム、ルーター、実コマンドなどは利用先の実装へ接続してください。

## API
- `items` (CommandItem[]): コマンド、グループ、ショートカット、子階層を指定。
- `open / onOpenChange` (boolean / callback): 表示を外部制御。
- `onExecute` ((item, signal) => void | false | Promise): 処理中の重複を抑止。falseなら開いたまま。例外はエラー表示。
- `hotkey` (boolean): trueでCtrl/Cmd+Kを登録。ギャラリーではfalse。
- `apiRef` (Ref<WorkbenchAPI>): Reactからopen()/close()を呼べる参照。
