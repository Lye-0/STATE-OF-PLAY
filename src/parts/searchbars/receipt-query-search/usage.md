# Receipt Query Search

検索を受け付ける丸い上の機械から、実候補の一枚の紙だけが18pxと30pxのずれた余白を残して送り出される。候補の紙の入口を16px機械へ差し込み、10pxの黒い送出口と下端24px間隔の紙の切り目を持たせる。実候補と補足は20px／14pxの等幅で読む。文字やnative入力には送り出しアニメーションを掛けない。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`ReceiptQuerySearch`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

## 動作
入力欄は保持し、IME変換中に候補を確定しない。非同期検索はデバウンス・AbortSignal・世代番号で古い結果を無視する。↑↓で候補へ、Enterで選択または検索、Escapeで閉じる。入力だけで外部へ送信しない。

## 状態とライフサイクル
変更コールバックは要求値を通知します。controlled値を渡した場合は親から新しい値を返してください。通常版は`update()`、`getState()`、`reset()`、`destroy()`を返します。React版はapiRefでも取得できます。取り外すときはイベント・Observer・未完了リクエストを解放します。

## 制約
このパーツはUIで、データの保存・削除・ネットワーク処理は行いません。フォーム、ルーター、実コマンドなどは利用先の実装へ接続してください。

## API
- `items / search` (SearchResult[] / async callback): ローカル候補か、AbortSignal付きの非同期検索を指定。
- `query / defaultQuery` (string): 入力値。queryを渡すと外部制御。
- `filters / filter` (SearchFilter[] / string): 検索対象の切り替え。
- `onSubmit / onResult` (callback): 実際の検索実行と候補選択の接続先。
- `loading / error / disabled` (boolean / string): 読込・失敗・無効の状態。
