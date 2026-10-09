# Stone Record Table

石の記録台。見出しを浅い上段、データを明るい平面、ページ操作を下の台座へ整理する。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`StoneRecordTable`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

## 動作
実際のtable・th・tdを使用し、ソートはaria-sortで示す。native checkboxで行を選択する。数値は数値として比較し欠損値は最後へ。列幅はPointerと矢印キーに対応。巨大データはmanualでサーバー処理に接続し、表計算のような編集UIとは区別する。

## 状態とライフサイクル
変更コールバックは要求値を通知します。controlled値を渡した場合は親から新しい値を返してください。通常版は`update()`、`getState()`、`reset()`、`destroy()`を返します。React版はapiRefでも取得できます。取り外すときはイベント・Observer・未完了リクエストを解放します。

## 制約
このパーツはUIで、データの保存・削除・ネットワーク処理は行いません。ローカル一覧のソート・絞り込み・ページ送りが基本です。manualを指定するとサーバー側の処理へ接続できます。セル編集、仮想スクロール、複数列ソートは含みません。

## API
- `rows / columns` (DataRow[] / DataColumn[]): 一意な行IDと列定義。文字・数値・状態・進捗表示。
- `sort / onSortChange` (TableSort | null / callback): 列の昇順・降順・元順を切り替え。
- `selected / onSelectionChange` (string[] / callback): 選択は行IDで保持。全選択は表示ページの対象行。
- `page / pageSize / query` (number / number / string): ページ送りと検索。manualでサーバー側へ委譲可能。
- `resizable / stickyFirst` (boolean): 列幅調整と先頭列固定。列幅は矢印キーでも操作。
- `onRowAction` ((action, row) => void): 各行の操作を利用先へ接続。
- `loading / error` (boolean / string): 読込中・失敗表示。仮想スクロールやセル編集は含みません。

<!-- design-renewal -->
灰白の露頭の全高を大きい傾斜と長い割れで一体に切り出し、その内側に水平な実記録の床を収める。件数・検索・現在ページは同じ露頭の上面へ置き、実表だけが深い16pxの切口を持つ読む床になる。短い隅欠けや丸角板を廃し、長い非対称な断面の外形と実記録の平面を対比する。

実表・列幅・検索・選択・ページ送りを保持します。非選択でも選択情報の領域を同寸予約し、文字とnative押面を動かしません。狭幅の表は専用の横スクロールで読みます。
<!-- /design-renewal -->
