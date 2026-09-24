# v4.10.0 → v4.11.0

> 以下は受領差分の元の適用説明です。このリポジトリではv4.10.10上へ選択的に統合し、既存の遅延読み込み・独自修正・削除済みローダーを維持しました。実際の適用結果と検証は [SIGNATURE-INTEGRATION-VERIFICATION.md](SIGNATURE-INTEGRATION-VERIFICATION.md) を参照してください。

基点は、このチャットで再送したv4.10.0差分をv4.9.0全体版へ適用したものです。
今回の差分は追加・変更のみで、削除するファイルはありません。依存ライブラリとバージョンは変更していません。

1. 既存リポジトリをバックアップし、独自の変更をcommitまたは退避します。
2. ZIP内のSTATE-OF-PLAYフォルダーの「中身」を、リポジトリのルートへ重ねます。STATE-OF-PLAY/STATE-OF-PLAYと二重に置かないでください。
3. .git、利用先にあるロックファイル、秘密情報、node_modulesは差分の対象外です。削除しないでください。
4. npm install、npx playwright install chromium、npm run verifyで検証し、npm run devで起動します。

初期化済みの旧ファイルを手で複製するのではなく、元ソース・カタログ・生成処理を一緒に更新してください。使用例とAPIはSIGNATURE.mdです。

リポジトリ全体ZIPも用意しますが、Git履歴や依存パッケージ、.test-output/dist/release等の再生成可能なものを含めません。単一HTMLは不要という方針を維持しています。
