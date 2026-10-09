# Ceramic Register Table

磁器の記録トレイ。表の内容を平らな面へ保ち、見出しと操作欄の縁だけを柔らかく仕上げる。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`CeramicRegisterTable`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

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
丸角板と外U取手を廃し、actual row action列を受ける全高の深い陶の側溝と広い平底へ再設計する。40pxの外口縁・16pxの内縁・上80pxと下72pxの一続きの曲面が、実action押面を包んで読む底へ戻る。行ごとの小皿に分割せず、actions無しなら溝も存在しない。溝を含めたactual tableだけが局所scrollする。

実表・列幅・検索・選択・ページ送りを保持します。非選択でも選択情報の領域を同寸予約し、文字とnative押面を動かしません。狭幅の表は専用の横スクロールで読みます。
<!-- /design-renewal -->
