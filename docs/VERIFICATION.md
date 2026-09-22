# v3.0.0 検証記録

検証日: 2026-09-22（日本時間）。基準: 提供済みv2.3.0。
GitHubのmain上のsrc・scripts・testsのGit tree hashが、基準ZIPの同じディレクトリと一致することを確認して作業しました。

## 今回実行したもの

| 検証 | 結果 |
| --- | --- |
| ギャラリー・Vanilla・共有処理のstrict型チェック | `tsconfig.json`、実TypeScript 5.8.3で成功 |
| カタログ生成 | 16パーツ、4形式、452ソース。srcやpackagesへ生成物を書き込まない |
| 元パーツのCSS／HTML | 16CSS＋16markup、計32ファイルがv2.3.0とバイト一致 |
| 単体テスト | 24件成功 |
| 配布形式 | TS→JS、TSX→JSXを実TypeScriptで変換。全形式のローカル参照を照合 |
| ZIP | 16×4×2＝128パッケージについて本文・CRC・明示的ディレクトリを検査 |
| ブラウザー | 実Chromium 144.0.7559.96、16項目成功、pageerrorなし |
| 詳細画面 | デスクトップ、幅320/390/768、ツリー、コード、全452ソースの表示一致 |
| コピー | 成功表示・対象文字列の一致、拒否時の手動コピー・フォーカス復帰 |
| ファイル保存 | 実際のdownloadイベントと出力ファイルを取得し、ソースと一致確認 |
| ZIPのUI | 通常／テキスト形式を生成して、展開後の内容と階層を検証 |
| 操作 | トグルクリック・実ドラッグ、詳細を誤開閉しないこと、Tab/Escape/復帰、無効・減少モーション |
| 独立デモ | 全16種類の分離HTML/CSS/JSをギャラリーなしで表示・操作 |
| Vanilla JS | 全16種類。実ES moduleのコードをメモリ内URLで実行。相対参照は別途ファイル構造に対して検査 |
| React TSX／JSX | 実React 19.1.1 productionランタイムで全16種類。外部／内部制御、更新拒否、無効、複数配置、mount/unmount、RAF残留なし |

`verification.json`は今回の実行結果をまとめた記録です。
画面比較は実ブラウザーのスクリーンショットで確認しています。スクリーンショット一式はリポジトリの標準ZIPへ常時同梱しません。

## 実行できなかったものを区別

この環境にはViteと公式React型定義の完全なnpm依存がありません。
`npm install`を試みましたが、`registry.npmjs.org`の名前解決が`EAI_AGAIN`で失敗しました。
また、Chromiumの管理ポリシーによりlocalhostへの通常ナビゲーションがブロックされています。
保護設定の無効化や別ホスト名による回避は行っていません。

そのため、**実Viteのインストール・本番ビルド・HMR・HTTPサブディレクトリ配信、公式React型定義とVite型定義を含む完全な静的型チェック、npm audit、依存ロックの実生成は未実行です。**
Vite用ソースと通常用検証コードを実装したことと、これらをこの環境で実行済みであることは区別します。

今回のブラウザー検証は`SOP_TEST_MODE=offline`の明示的アダプターを使用しました。
ギャラリーを実TypeScriptで変換し、同じCSSとコードデータをブラウザーのテスト文書に投入しています。
これはViteビルドの成功を示すテストではなく、UI・部品・コード・配布の回帰検証です。
Reactは環境に実在する公式ランタイムを利用し、代替Reactやダミーの型定義は作っていません。
productionランタイムのため、development StrictModeのeffect二重実行までは今回の実行対象ではありません。
Clipboardの成功と拒否はテスト用API差し替えで再現しました。ユーザーのOSクリップボードを直接操作したわけではありません。

Windows Explorer/MOTW/Defender、iOS Safari実機、実際のGitHub Pagesへの配信は未検証です。

## 通常の環境での完全な検証

```powershell
npm install
npx playwright install chromium
npm run verify
```

通常のverifyは、アプリ・React・ツールすべてのstrict型チェック、単体テスト、実Viteビルド、ブラウザー検証を行います。
ブラウザー検証は実ViteのHTTP配信、カタログ編集の反映、`/STATE-OF-PLAY/`配下でのproduction表示も対象にします。
公式React developmentランタイムのStrictModeで、TSX/JSXの配布ソースから作ったfixtureを検証します。
型定義やViteがない場合に成功扱いでスキップする仕組みはありません。

GitHub ActionsにもWindowsとUbuntuのverifyを設定しました。設定ファイルをZIPに含めただけで、今回こちらからpushやCI起動は行っていません。

## 全体ZIP

通常のDEFLATE、明示的ディレクトリ、元ソースの階層を保持。
生成後はJSZipによるCRCとSHA-256の照合に加えて、別実装のPython zipfileでも再読込します。
ZIPの整合性は、安全性判定やWindowsで無警告の保証ではありません。
