# v3.3.1 — GitHub Actions修正

## 原因

v3.3.0の`tests/browser.ts`では、ViteのPreviewServerが公開する
`resolvedUrls`を非nullとして直接参照していました。公式の型はnullableのため、
`typecheck:tools`でTS18047が発生し、Windows/Ubuntuの両方が同じ箇所で停止していました。
アプリ・Reactの型チェックより後、単体テストやブラウザーテストより前の失敗です。

## 修正

- `tests/vite-url.ts`に`requireLocalServerUrl`を追加。`null`、空配列、空文字を検出します。
- 本番プレビュー・開発サーバー・スクロールバーの2種類のテストで同じ取得処理を使用。
- 取得できない場合、架空のURLへの置換やテストのスキップはせず、説明付きで失敗させます。
- サーバーの起動後の検証に失敗した場合も終了処理が走るように配置を整理しました。
- strict設定、React/ツールの型チェック、全verifyコマンドは維持しています。
- ワークフローではverifyの7段階を個別ステップに分け、型チェック・単体テスト・ビルドを
  Chromiumのダウンロードより前に実行します。
- `actions/upload-artifact`はv7.0.1のコミットSHAに固定。
  `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`は`runs.using: node24`の版です。
- 失敗時レポート用の`.test-output/`に限定して隠しファイルの取得を許可します。
  リポジトリ全体や環境設定・秘密情報をアップロードする指定ではありません。
- `ubuntu-latest`と`windows-latest`の2環境を維持しています。
  スクリーンショットのUbuntu更新予告は型エラーとは無関係です。
- 依存パッケージのバージョンは変更していません。setup-nodeのNode.js 22と
  upload-artifactアクション自身のNode.js 24は別の実行環境です。

## 今回の確認

基準: 会話で提供したv3.3.0全体ZIP。
GitHub mainの`tests/browser.ts`・`package.json`・`verify.yml`とも該当内容を照合しました。
参照したmain: `fca893c7e4b4046e18b5feb76df3480872cac3d4`。

- TypeScript 5.8.3 / Node.js 22.16.0 / Linuxで`npm run typecheck:app`が成功。
- 単体テスト61件成功（既存53件＋URL/CI回帰テスト8件）、失敗・スキップともに0。
- Viteが公開するnullableなURLの形を使った限定的な型回帰で、修正前のTS18047を再現し、
  修正後の取得関数では診断が0になることを確認しました。
  これは実Viteパッケージの完全な型チェックを代替したという意味ではありません。
- ワークフローのYAMLを解析し、verifyと同じ7段階・Windows/Linuxの行列・
  アクションのコミットSHA指定を確認しました。
- `src/`の全751ファイルがv3.3.0とバイト単位で一致。72パーツのUIと動作の変更はありません。
- 全体ZIPはCRC/全ファイルSHA-256を照合し、新規フォルダーへの展開も検査します。

## 実施できていない確認

この作業環境ではnpmレジストリの名前解決ができず、指定のVite/React/Playwright一式を
インストールできません。実Viteのビルド・本番プレビュー・全体の公式型定義を使う
`npm run typecheck`・`npm run verify`完走・Windows実機・GitHub Actionsの再実行は未確認です。
実行環境を模した型定義で本来の検証を通す、型チェックを無効にする、
CIでオフラインモードへ自動切り替えする、といった対応は行っていません。
既存のブラウザーテストの結果を今回の実行結果として数え直してもいません。

## 更新と再実行

全体ZIPをバックアップ済みのリポジトリへ配置します。
`.git`、独自変更、既存の`package-lock.json`を保護してください。
今回は依存更新がないため、手元のロックファイルは削除しません。

```powershell
npm install
npm run typecheck
npm test
npx playwright install chromium
npm run verify
```

変更をコミット・pushすると、mainで新しいワークフローが実行されます。
GitHub上の古い失敗実行の「Re-run jobs」は、その古いコミットを再実行するため、
まず修正版コミットを反映してください。この作業からのコミット・pushは行っていません。

## 参照した仕様

- Vite JavaScript API: https://vite.dev/guide/api-javascript#previewserver
- upload-artifact: https://github.com/actions/upload-artifact/releases/tag/v7.0.1
- 固定したアクション: https://github.com/actions/upload-artifact/blob/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a/action.yml
