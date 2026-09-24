# v4.11.0 → v4.12.0

> 以下は受領差分の元の適用説明です。このリポジトリではv4.11.0の独自修正を保って選択的に統合し、全787パーツになります。単純な上書きは行っていません。詳細は [NAVIGATOR-INTEGRATION-VERIFICATION.md](NAVIGATOR-INTEGRATION-VERIFICATION.md) を参照してください。

検索バー20、コマンドパレット16、コンテキストメニュー16、ナビゲーション20、テーブル16を追加した差分です。削除対象はありません。

1. 作業中の変更をコミットするか、フォルダーをバックアップします。
2. ZIP内の `STATE-OF-PLAY/` **の中身**を、v4.11.0のリポジトリルートへ重ねます。`.git`、独自変更、ロックファイルを保護してください。
3. `package.json` と `.github/workflows/verify.yml` に独自の編集があれば、上書きではなく差分を取り込んでください。
4. 依存バージョンは変更していません。`npm install` → `npx playwright install chromium` → `npm run verify` → `npm run dev`で確認します。

全体版は開発用リポジトリの完全なソースです。`node_modules/`・`.git/`・`dist/`・展開済みの全配布物は含めません。パーツの配布用データは元ソースから生成します。

新しいAPIは `NAVIGATOR.md`、実行した検証の範囲は `NAVIGATOR-VERIFICATION.md`を参照してください。GitHubへのcommit/pushは行っていません。
