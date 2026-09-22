# v3.1.0 検証記録

検証日: 2026-09-22（日本時間）。基準: 提供済みv3.0.0のリポジトリ全体ZIP。
バージョンと開発構成はGitHub main上のpackage.jsonでも確認して作業しました。GitHubへの書き込みは行っていません。

## 実行結果

| 検証 | 結果 |
| --- | --- |
| アプリ・Vanilla・共有処理のstrict型チェック | `tsconfig.json`、実TypeScript 5.8.3で成功 |
| 生成処理のstrict型チェック | catalog/layout/source-tools/export-parts/package/zip、core/delivery/relocationテストを実Node型で確認。Vite依存部分を含む全ツールチェックとは区別 |
| 単体テスト | **38件成功、失敗0** |
| 元パーツのCSS・HTML | 16CSS＋16markup、計32ファイルがv3.0.0とバイト一致 |
| 生成データ | 16パーツ × 4形式 × 2配置、計904ソース。`src/`や`packages/`に生成コピーを書き込まない |
| 依存と配置 | import/export/type import/dynamic import/URL、CSS/HTML/SVG参照、コメント・文字列の非改変、エスケープ、未解決参照・衝突の拒否 |
| 本体と参考例 | 本体は使用例に依存しない。例専用の依存はexamples側に分離。各パーツのinternalは独立 |
| ZIP全組み合わせ | 16 × 4形式 × 2配置 × 2保存形式 = **256パッケージ**。本文・CRC・階層・PROMPT・INTEGRATION.jsonを照合 |
| CLI実行 | Chrome TSXの2配置とLiquid JSテキスト版、計3ZIPを実出力し、Python zipfileでもCRCを確認 |
| ブラウザー | 実Chromium、**18項目成功、pageerrorなし** |
| コード表示 | 両配置の全904ファイルについて画面と配布内容が一致。選択が元ソースIDで引き継がれる |
| コピー・保存 | 成功UI・拒否時の手動コピー、文字列、保存ファイルの本文・名前、フォーカス復帰を検証 |
| ZIP UI | 画面・CLI共通関数のソース、README、PROMPT、INTEGRATION.jsonが両配置・保存形式で一致 |
| 使い方・プロンプト | 各実装形式で表示・コピー。固定階層の強制を除去し、対象アプリ調査・非上書き・未確認の明示を統一 |
| 表示・操作 | 幅320/390/768、詳細画面、ツリー、保存操作、Tab/Escape、クリック・実ドラッグ、無効・縮小モーション |
| 独立デモ | 全16種類をギャラリーのCSS/JSに依存せず表示・操作 |
| 通常JS | 両配置の実配布ソースをネイティブES Modulesで実行 |
| React TSX / JSX | 両配置、全16パーツ。実React productionで外部制御・内部制御・拒否・無効・複数配置・取り外しを検証 |
| 配置変更 | **3つの配置先 × 2構成 × 16パーツ = 96個体**。本体ファイルのみをコピーして実行し、既存の共有ヘルパーとアプリ入口を保持。取り外し後のRAF残留なし |

機械可読な要約は`verification.json`に記録しています。
スクリーンショットは実ブラウザーで確認し、標準の全体ZIPには同梱しません。

## 環境と制約

Linux、Node.js 22.16.0、TypeScript 5.8.3、Chromium 144.0.7559.96。
検証環境に実在するPlaywright 1.57.0-beta-1764944708000とReact 19.1.1 productionランタイムを使用しました。
プロジェクトの依存バージョンは変更していません。特にPlaywright指定は1.63.0のままです。

npmレジストリは名前解決が`EAI_AGAIN`で失敗しました。
また、配置変更のHTTPテストでlocalhostへの実ナビゲーションを試したところ、`ERR_BLOCKED_BY_ADMINISTRATOR`になりました。
保護設定・ポリシーを変更したり、別ホスト名で回避したりする操作は行っていません。

そのためブラウザー実行は`SOP_TEST_MODE=offline`を明示した合成文書による検証です。
UIでは同じソースを実TypeScriptで変換し、同じCSS・カタログを投入しています。
独立JSと配置変更では、実ファイルに対する参照解決を検査したうえで、Blob URLとimport mapでネイティブES Modulesを読み込みます。
**Viteのビルド成功、実HTTP配信、外部ネットワークからの取得成功を意味するものではありません。**
Reactは実ランタイムであり、ダミーReactや代用の型定義は使っていません。
productionランタイムのため、development StrictModeの二重Effectまでは今回実行していません。
コピーの成功・拒否はテスト用API差し替えで再現しています。ユーザーのOSクリップボードを操作したわけではありません。

## この環境では未実行

- npm経由の指定バージョンの実インストール、`npm audit`、ロックファイルの生成。
- 実Viteビルド・HMR・HTTP/subpathの配信確認。
- 公式React型定義とVite型定義を含む完全な`npm run typecheck`。
- Windows Explorer/MOTW/Defender、iOS Safari実機、GitHub Actions実行、実際の本番配信。

これらは未確認のまま成功とみなしていません。依存をインストールできる環境では次のコマンドで実行します。

```powershell
npm install
npx playwright install chromium
npm run verify
```

通常のverifyはアプリ・React・全ツールのstrict型チェック、単体テスト、実Viteビルド、ブラウザー検証、実HTTPの配置変更テストを実行します。
通常のテストはオフラインアダプターに自動的に切り替わりません。Viteや型定義がないまま成功扱いでスキップする処理もありません。

## 全体ZIP

全体ZIPは元ソースの構造を完全保持し、導入向けのパーツ構成に変更しません。
通常のDEFLATE、明示的ディレクトリ、CRCおよびファイルごとのSHA-256を使用します。
`.git`・`node_modules`・`dist`・`release`・検証用の生成物・秘密情報は含めません。
生成後に別フォルダーへ展開し、アプリstrict型チェックと38件の単体テストを再実行しました。
Python zipfileでもCRCとマニフェスト全ファイルのSHA-256を照合しました。
これらは転送・格納の整合性検証であり、マルウェア判定やWindowsで無警告の保証ではありません。
