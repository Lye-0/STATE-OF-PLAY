# Ink Menu

太い活字と細い下線。選んだ行を、インクの一本線が追いかける。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`InkContext`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

## 動作
右クリックは明示した対象だけに適用する。通常ページのメニューやタッチ長押しは奪わない。表示ボタンとShift+F10でも開く。↑↓/Home/End/文字キー、→で子階層、←で親へ。非同期アクションの重複を防ぐ。

## 状態とライフサイクル
変更コールバックは要求値を通知します。controlled値を渡した場合は親から新しい値を返してください。通常版は`update()`、`getState()`、`reset()`、`destroy()`を返します。React版はapiRefでも取得できます。取り外すときはイベント・Observer・未完了リクエストを解放します。

## 制約
このパーツはUIで、データの保存・削除・ネットワーク処理は行いません。フォーム、ルーター、実コマンドなどは利用先の実装へ接続してください。

## API
- `items` (ContextAction[]): 操作、子階層、区切り、チェック、無効状態を指定。
- `onAction` ((item, signal) => void | false | Promise): 実行先の接続。勝手な保存や削除はしません。
- `checked / onCheckedChange` (Record<string, boolean> / callback): メニュー内チェック項目の状態を制御。
- `targetLabel / targetDescription` (string): 操作対象の見出しと説明。
- `disabled` (boolean): コンポーネントの操作を無効にする。

## 既存要素への接続
`targetElement` に既存の行・カード等のHTMLElementを渡すと、展示用の対象枠を隠してその要素へ接続します。内部コンテンツは変更しません。対象はキーボードからも到達できるようにし、タッチ用のボタンからはAPIの`open()`を使ってください。`update({targetElement: null})`で標準表示へ戻せます。
