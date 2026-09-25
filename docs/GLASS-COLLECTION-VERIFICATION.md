# v4.16.0 — Glass Collection 統合検証

## 統合範囲

v4.15.0の825種へ33カテゴリのA/B各1種、計66種を追加した。全37カテゴリにガラス版A/Bが1種ずつあり、ガラス版は74種、全体は891種。提供差分の登録892種には現行リポジトリで削除済みのStitch CometとPaper Loaderが含まれ、Hero Asteriskが含まれていなかった。これらの履歴と既存817種、先行ガラス8種を維持し、新66種だけを登録した。

新作は通常のカテゴリ、A/Bフィルター、カード、詳細画面、コード・プロンプト・パーツZIPに接続した。ガラスの見え方を確認する背景は残し、色ドットは外枠を暗いまま内側の風景だけを切り替える。既存のカテゴリ別遅延読み込みと詳細ソースの要求時読み込みを維持している。

## このリポジトリで確認したこと

| 検証 | 結果 |
| --- | --- |
| `npm run typecheck` | アプリ、React、ツールの3構成すべて成功 |
| `npm test` | 257件成功。歴史的825種の検査と全891種のcore/delivery、新66種の構造検査5件を含む |
| 日時選択修正後の `tests/glass-collection.test.ts` | 6件成功。新66種の依存・配布構成、通常展示と日時選択の現行マークアップを確認 |
| `npm run build` | 現行Viteによる891種の本番ビルド成功 |
| 開発サーバーの全カテゴリ走査 | 37カテゴリの登録件数と初期化を確認。ページ例外なし |
| 開発サーバーの詳細走査 | 先行8種と新作の代表9件を開き、通常詳細と背景の初期化を確認 |
| `npm run test:glass-collection:gallery` | 全891種の本番プレビューで37カテゴリのA/B配置、展示背景、代表詳細のコード・プロンプト、320/390/768pxの収まりを確認 |
| `npm run test:glass-collection:react` | 新66種を実ReactのStrictModeで表示し、入力と開閉、SSR出力、hydration、取り外しを確認 |
| `SOP_LAZY_MODE=production npm run test:lazy-loading` | 本番HTTPで全37カテゴリの遅延読み込み、CSS順序、詳細ソースとZIP、再試行・画面遷移を確認 |
| `npm run test:browser` | 実Vite HTTPの回帰23項目が成功。全891種のカード、A/Bフィルター、代表7,004ファイルのコード表示・配布、React/Vanillaの持ち出しと本番プレビューを確認 |

全体単体テストの後、提供元の日時選択2件に現行カレンダー処理が要求する要素が欠けていると分かった。現行レンダラーからマークアップを生成し直し、その後に構造検査、開発サーバーの37カテゴリ走査、詳細の日時選択、本番ビルドと本番ギャラリーを再確認した。単体テスト257件をその修正後に再実行したとは主張しない。

提供元の検証記録はオフライン文書と変換したVanillaコードによる範囲だった。本統合では、インストール済みのVite・Reactと実Chromeを使い、本番ビルド、HTTP配信、Reactの実行を追加で確認した。提供元のログを本統合の成功証拠として再利用していない。

## 未確認事項

GitHub Actions上のWindows/Ubuntuランナー、Safari/iOS・Firefox・Edge実機、スクリーンリーダーと実OSの透明度低減設定、あらゆる背景でのコントラスト、`npm audit` は未確認。透明度が高い面は導入先の背景で確認し、必要に応じて不透明な素材を指定する。

## 再実行

```sh
npm run typecheck
npm test
npm run build
npm run test:glass-collection:gallery
npm run test:glass-collection:react
npm run test:browser
SOP_LAZY_MODE=production npm run test:lazy-loading
npm run package
```

全カテゴリの既存ブラウザー回帰を通す場合は `npm run verify` を使用する。
