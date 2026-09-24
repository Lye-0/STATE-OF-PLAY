# Essential Header

行き先が分かる、整理されたナビゲーション。リンクの標準操作を維持。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`EssentialHeader`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

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
