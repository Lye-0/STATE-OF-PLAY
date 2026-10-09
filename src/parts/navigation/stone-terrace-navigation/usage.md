# Stone Terrace Navigation

一つの採掘面へ上の112pxの切欠き、右下の56pxの凹み、左下の64pxの欠けを作り、不均一な断面を露出させる。実ブランド・行先・現在地の文字とnative hitを切欠きの外へ保ち、選択を平面の8pxの深さだけで表す。狭幅と実モバイル欄にも別板を足さず同じ採掘面を続ける。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`StoneTerraceNavigation`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

## 動作
リンクは実際のhrefを保ち、中クリック・Ctrl/Cmdクリックを妨げない。一般のナビゲーションにはrole=menuを付けない。階層はdisclosure。モバイルはdialogで開き、Escape・閉じる・フォーカス復帰を支援する。

## 状態とライフサイクル
変更コールバックは要求値を通知します。controlled値を渡した場合は親から新しい値を返してください。通常版は`update()`、`getState()`、`reset()`、`destroy()`を返します。React版はapiRefでも取得できます。取り外すときはイベント・Observer・未完了リクエストを解放します。

## 制約
このパーツはUIで、データの保存・削除・ネットワーク処理は行いません。フォーム、ルーター、実コマンドなどは利用先の実装へ接続してください。

## API
- `items` (NavigationItem[]): ラベル・href・子リンク・アイコン・バッジ。
- `layout` (header | sidebar | dock | mobile): 置き場所に合うレイアウトを指定。
- `active / onActiveChange` (string / callback): 現在地のID。リンクを移動して外部状態から反映可能。
- `onNavigate` ((item, event) => void | false): 通常はネイティブリンク。falseで既定移動を止めルーターへ接続。
- `open / onOpenChange` (boolean / callback): モバイルナビゲーションの表示を制御。

## 子階層の選択と展開（v4.12.5）

「もっと見る」の子リンクを選ぶと、非制御時は現在地の名前・`aria-current`・親の展開ボタンの選択状態が更新されます。`active` を指定して制御する場合は、`onActiveChange` を受けて親から新しい値を渡してください。子一覧の内部だけをスクロールしている間は開いたままです。ページや周囲の領域をスクロールすると閉じます。リンク先URLと中クリック・修飾キー操作は導入先の通常のリンクとして維持します。
