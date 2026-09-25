# Mist Commands / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Mist Commands

検索、グループ、ショートカットを静かに整理したコマンド一覧。

## 組み込み
本体フォルダーを既存のコンポーネント置き場へ配置してください。Reactは`LgcCommandsMist`、通常サイトは`init(root, options)`を使用します。CSSとinternalの必要ファイルを一緒に配置してください。デモ文言やデータは変更できます。examplesとpreviewは実行時に不要です。

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
