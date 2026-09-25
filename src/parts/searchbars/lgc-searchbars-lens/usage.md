# Lens Search / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Lens Search

透明な検索レンズと個別に浮かぶ候補カード。絞り込みは細い光の線で示します。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`LgcSearchbarsLens`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

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
