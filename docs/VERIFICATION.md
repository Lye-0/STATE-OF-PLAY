# v3.8.0 検証記録

検証日: 2026-09-22。基準は前回提供した v3.7.0 の全体ZIPです。GitHubは変更していません。

## 対象

チェックボックス24種類・ポップアップ24種類（各A16/B8）を追加し、12カテゴリ・280種類になりました。
既存232パーツの本体2,320ファイルは前版とバイト単位で一致しています。

チェックボックスは実際のinput[type=checkbox]とlabel、ポップアップはnative dialogのshowModal/closeを使用します。
チェックボックスはcheckedとindeterminateを分け、フォームのネイティブreset処理が終わった後に表示とReactの状態を同期します。
ポップアップは詳細画面の上でも独立したトップレイヤーを保ち、閉じるアニメーション中も背景の操作をロックします。
同じポップアップを閉じても本文は破棄しません（コンポーネントの取り外し時は別）。実保存・送信・外部アクセスは行いません。

## 実行結果

| 対象 | 結果 |
| --- | --- |
| アプリ/Vanilla/共有処理 | TypeScript 5.8.3、tsconfig.jsonのstrictチェック成功 |
| 単体テスト | 100件成功、失敗0、スキップ0 |
| ギャラリー回帰 | 17項目成功。全280種類、操作・詳細・コード・コピー・ZIP・独立デモ・通常JS |
| React全体回帰 | generic fixture修正後、TSX/JSX・両配置の4項目を分離して再実行し成功。全280種類の表示・操作・取り外し |
| チェックボックス/ポップアップ専用 | 通常HTML11項目＋React8項目＝19項目成功。pageerrorなし |
| 配布ソース表示 | 全280×4形式×2配置、16,928ソースの実コードビューと配布内容を照合 |
| ZIP | 全280×4形式×2配置×2保存モード、4,480ケースの本文/CRC/階層/プロンプト/依存情報を単体テストで照合 |
| 独立デモと通常JS | 全280種類。ギャラリーのDOMに依存せず、配布ファイルを初期化 |
| Native checkbox | ラベルクリック、Space、独立した複数選択、FormData、name/value、fieldset disabled、mixed、reset |
| React checkbox | 全24種類×4条件。制御/非制御/変更拒否、mixed、disabled、フォームreset後のDOMと状態の一致 |
| Popupの操作 | 開閉、Escape、背景クリック、内部から外へのドラッグで誤閉鎖しないこと、閉じ方の禁止設定 |
| フォーカスとネスト | ギャラリー詳細画面の上に開き、Tab循環、Escapeで最上位だけ閉じる、起動元への復帰 |
| 複数モーダル | 異なる配布コピー間の共有スクロールロック、最後のcloseでだけ元に戻ること、method=dialog form |
| React popup | 全24種類×4条件。外部制御/非制御/要求拒否、本文inputの保持、子ボタンのstate更新、unmount |
| 開閉競合 | closeアニメーション中の再openで、古いタイマーが新しい表示を閉じないこと |
| 小さい画面 | 幅320/390/768px。新48種、開いた本文のフィット、長いdialogの内部スクロール |
| アクセシビリティ表示 | focus-visible、prefers-reduced-motion、forced-colors。実スクリーンリーダー検査とは別 |
| 移動配置 | 3つの配置先×2構成×280部品＝1,680個体。実ESM、既存ファイル非上書き、操作・取り外し、残留RAFなし |
| 全体ZIP | 別フォルダーへ再展開し、アプリstrictと100件の単体テストが再度成功。最終ZIPのCRC/全ファイルSHA-256も照合 |

## テストで見つけて修正したこと

- フォームのresetイベント中のmicrotaskでは、ブラウザーのreset既定動作より前に値を読み書きする場合があります。
  新しいcheckboxの同期は後続タスクへ移し、controlled/uncontrolled/変更拒否でDOMとReactの値が一致することを検証しました。
  テストは固定の待ち時間で隠すのではなく、全対象の期待状態になるまで待ってから確認します。
- 全カテゴリ共通のReactテストが、checkboxへchildrenを渡してinput内へ子要素を入れていました。
  実際のcheckbox APIに合わせ、labelを使うfixtureへ修正。popupにはtitleを渡しています。
  その後、全280種類×React4条件を分離して再実行し成功しました。
  最初の17項目とReact4項目は別実行です。`test:browser`を先頭から最後まで再度完走したという意味ではありません。

## 実際の検証方法と制約

Linux、Node22.16.0、TypeScript5.8.3、実Chromium144.0.7559.96、環境内のPlaywright1.57.0-betaを使用。
Reactはインストール済みブラウザーバンドルに含まれる本物のReact19.1.1/ReactDOM productionです。代替実装ではありません。
開発版StrictMode特有の二重Effectは未確認です。明示的なmount/unmount反復・クリーンアップは検証しています。

**npmレジストリの名前解決がEAI_AGAINとなり、指定依存一式を取得できないため、実Viteのビルド/HTTP配信、npm audit、公式React/Vite型を揃えた全体型チェックは未実施です。**
ツールのtscはViteモジュール/型が見つからない11件のエラーで停止しました。仮の型定義で成功扱いにはしていません。
ブラウザー確認は実ソースを合成テスト文書・native ESMで実行する明示的なオフライン方式です。Vite/HTTPの成功とは区別します。
agent-browser CLIが環境に存在しないため、Playwrightで確認しました。

新カテゴリ専用のオフラインfixtureは48パーツだけを展示します。50MBを超える全カテゴリ配布データを重複注入しないためです。
全280パーツのカテゴリ/コード/配布/React/移動配置は、別途全体スイートで検証しています。
通常環境では専用テストも実Viteを起動して製品の全ギャラリーを読みます。テスト用fixtureを製品へ同梱する構成ではありません。

Clipboard成功/拒否はテスト用writeTextで検査します。ユーザーのOSクリップボードを書き換えたものではありません。
ファイル保存・パーツZIPはdownloadイベントから取得した実ファイルを比較しています。
Windows、iOS/Safari、実スクリーンリーダー、Windows Explorer/SmartScreen、GitHub Actions実行は未確認です。
CRC/SHA-256は格納・転送の整合性検査で、マルウェア判定や無警告の保証ではありません。

## 再実行

```powershell
npm install
npx playwright install chromium
npm run verify
```

新カテゴリのみは `npm run test:check-popup`。通常のverifyには過去の専用テストも残しています。
今回は旧カテゴリの専用ブラウザースイートを個別には再実行せず、全体回帰・移動配置・単体テストで確認しています。
機械可読の実行記録は `verification.json`、APIは `CHECKBOXES-AND-POPUPS.md` を参照してください。

最終ZIPには再展開検証の結果を追記したため、検証記録の2ファイルだけを更新して再生成しています。src/scripts/tests/configは検証した展開先と全ファイルの本文が一致します。
