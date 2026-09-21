# STATE OF PLAY — UI & Motion Library

触って選び、コードと意図を次の開発へ持ち出すUIパーツライブラリです。
トグル10種類とブロック6種類を収録しています。

## このZIPについて

**差分ではなく、リポジトリの作業ファイル一式です。**
ダウンロードできなかった `app.js` / `catalog.js` / `prism.js` / `jszip.js` も含め、
表示用のサイト、編集用ソース、生成処理、テスト、各パーツの配布ソースを同梱しています。

v2.3.0ではPlaywrightを1.63.0へ更新し、パーツZIPと全体ZIPが内部のフォルダー階層を維持するように修正しました。
画面のデザインと既存の機能を保持しています。新しい単一HTMLプレビューは作成しません。

## v2.3.0 の変更

- Playwrightの開発依存を `1.63.0` に固定しました（旧1.55.0から更新）。
- パーツのソースは `src/parts/<カテゴリ>/<ID>/`、共有処理は `src/shared/` の元の階層で配布します。
- 詳細欄のファイル表示を開閉できるディレクトリツリーにし、コード欄には現在のパスも表示します。
- パーツZIPの保存前に、実際に展開されるディレクトリツリーを確認できます。
- 全体ZIPもフォルダーのエントリーを明示的に記録し、空フォルダーと同名の別階層ファイルを保持します。
- 個別の「ファイルを保存」は1ファイルのみです。階層ごと取り込むときはZIPを使ってください。

## 既存のGitリポジトリを置き換える

1. 未コミットの変更を確認し、現在の作業フォルダーを別の場所へバックアップしてください。
2. ZIPを一度、新しい場所へ展開してください。中に `STATE-OF-PLAY/` があります。
3. 既存のリポジトリの **`.git/` はそのまま残してください。** `.env` や自身で追加した設定・素材も別途保管してください。
4. 古い作業ファイルを整理し、展開した `STATE-OF-PLAY/` の**中身**をリポジトリ直下に配置してください。
5. Gitの差分と未追跡ファイルを確認してから、通常どおりコミット・pushしてください。

Git履歴・接続情報が入る `.git/`、依存パッケージの `node_modules/`、秘密情報、
一時ビルド・テストの作業フォルダーはZIPに含めません。
このZIPを作った段階でGitHubへのコミット・push・設定変更は行っていません。

旧版の `css/`、`js/`、旧ビルドスクリプトはこの構成では使用しません。
「新旧のファイルを単に重ねて残す」のではなく、バックアップ後にこのZIPの構成へ揃えてください。
`.git/` の削除や `git init` のやり直しは不要です。

## まずサイトを見る

ルートの `index.html` と `assets/` はビルド済みです。依存パッケージをまだインストールしていなくても、
Node.js 22以降があれば次のコマンドでローカル表示用サーバーを起動できます。

```sh
npm run dev
```

ブラウザーで `http://127.0.0.1:5173` を開きます。終了はターミナルで Ctrl+C です。
ポートを変える場合は環境変数 `PORT` を指定します。サーバーはデフォルトで自分のPCだけに公開します。

## 更新後の依存パッケージ

既存の依存パッケージも更新してください。古いnode_modulesだけを使い続けると、古いPlaywrightが残ります。

```powershell
npm install
npm audit
npx playwright install chromium
npm run verify
```

`npm install` でローカルの `package-lock.json` も更新または作成されます。差分を確認してGitで管理してください。
`npm audit fix --force` やWindowsの保護を無効化する操作は、この更新に必要ありません。
この配布環境ではnpmレジストリへの接続が制限されているため、Playwright 1.63.0の実インストールとオンライン監査は再実行していません。
実際に使った検証環境は `docs/VERIFICATION.md` に区別して記載しています。

## ソースを編集・再ビルドする

```sh
npm install
npm run build
npm run dev
```

`npm run build` は次を生成します。

- ルートの `index.html` / `assets/`（そのまま配信できる静的サイト）
- `packages/`（16パーツ × TSX / JSX / TS / JSの配布ソースと分離デモ）
- `dist/`（静的ホスティング向けのサイトのみの出力）

`assets/`、`packages/`、`src/catalog/registry.generated.js` は生成物です。
直接編集するのではなく `src/` を変更してください。編集の自動監視は行わないため、変更後は再度ビルドします。
`packages/` と `dist/` はビルドの際に作り直されます。独自のデータを置かないでください。

## フォルダー構成

```text
STATE-OF-PLAY/
├─ index.html                  # ビルド済みの入口
├─ assets/                     # ビルド済みのJS・CSS・ブラウザー用ライブラリ
├─ src/
│  ├─ index.html               # ページの元HTML
│  ├─ app/                     # 一覧・詳細・コード表示・コピー・ZIP UI
│  ├─ catalog/                 # カテゴリとパーツ登録一覧
│  ├─ shared/                  # ばね、描画、トグル、背景、Reactフックなど
│  └─ parts/
│     ├─ toggles/              # 10種類のパーツ本体
│     └─ blocks/               # 6種類の背景ブロック
├─ packages/                   # すべての配布形式の生成済みコード
├─ vendor/                     # ライセンス付きのブラウザー用依存ライブラリ
├─ scripts/                    # ビルド、開発用サーバー、全体ZIPの生成
├─ tests/                      # コア・整合性・ブラウザーテスト
├─ docs/                       # 追加方法、検証記録
├─ licenses/                   # 外部ライブラリのライセンス
├─ package.json
├─ tsconfig.json
├─ tsconfig.react.json
├─ .gitignore
├─ .gitattributes
└─ .nojekyll
```

サイトのUIはJavaScript、パーツのコントローラーはTypeScript、React向けパーツはTSXです。
JSX / JavaScript向け配布ファイルはTypeScriptの正本から生成します。
サイトを動かすだけならReactのランタイムは不要です。

## 操作

パーツ本体をクリック／ドラッグして動きを試せます。
カードの余白・見出し・CODEボタンは詳細画面を開きます。
詳細画面には動く実物、行番号・構文色付きのコード、使用例、AI用プロンプトがあります。
「ファイルを保存」は現在選択しているファイルだけを取得し、右隣の「コピー」はそのコードをコピーします。
成功時は「コピー済み」と通知を表示し、自動コピーが拒否された場合は手動コピーへ切り替えます。

パーツZIPは通常のソース形式とテキスト保管形式を選べます。
テキスト保管形式は末尾に `.txt` を付けた内容確認用で、そのまま実行するものではありません。
詳細のWindows向け案内は、OSの保護を無効化する処理ではありません。

## パーツを自分の開発へ導入する

`packages/<パーツID>/<形式>/` に必要ファイルがあります。
Reactは `tsx/` または `jsx/`、通常のサイトは `ts/` または `js/` を使います。
各フォルダーの `README.md` と使用例、`PROMPT.md` を参照してください。
配布形式フォルダーの中にも `src/` があり、その下の `parts/` と `shared/` の位置関係を保って導入します。
例えばChromeのReact TSX版は次の構成です。

```text
chrome-tsx/
├─ src/
│  ├─ parts/toggles/chrome/
│  │  ├─ react/ChromeToggle.tsx
│  │  ├─ react/Example.tsx
│  │  ├─ styles.css
│  │  └─ markup.html
│  └─ shared/
│     ├─ use-toggle.ts
│     ├─ toggle-controller.ts
│     ├─ motion.ts
│     └─ renderer.ts
├─ preview/
├─ README.md
├─ PROMPT.md
└─ WINDOWS-README.txt
```

ZIPを通常の「すべて展開」で展開するとこの構成になります。フォルダーの中身だけをすべて1か所に集めないでください。
既存プロジェクトの `src/` と直接合わせるほか、専用のフォルダーへ `src/` ごとコピーしても使えます。
後者の場合、外側のアプリからのimportだけを合わせ、パーツ内部の相対位置は保ってください。
ZIPをブラウザーから既存プロジェクトへ自動的に書き込む機能ではありません。展開してフォルダーごとコピーする方式です。

`packages/<パーツID>/preview/` はギャラリーと独立した **HTML / CSS / JSの分離デモ**です。
通常のJavaScript版はES Modulesなので、開発用サーバーから開いてください。
TypeScriptとReact版は利用先プロジェクトのビルド環境へ組み込みます。

## パーツを追加する

`docs/ADDING-PARTS.md` を参照してください。
サイト上での追加・編集機能やデータベースはありません。ソースと登録定義を編集して拡張します。

## テスト

```sh
npm run typecheck
npm test
npx playwright install chromium
npm run test:browser
```

まとめて実行する場合:

```sh
npm run verify
```

Reactの型定義もインストールした通常の開発環境では:

```sh
npm run typecheck:react
```

今回の実行環境・結果・未検証範囲は `docs/VERIFICATION.md` に記録しています。
環境の制限によって実行していないものを、成功したものとして扱わないでください。

## 全体ZIPを作り直す

```sh
npm run package
```

`release/STATE-OF-PLAY-v2.3.0-full-repository.zip` を生成します。
差分ではなく、再びリポジトリ全体を交換できるZIPです。
生成後、CRCと全ファイルのSHA-256を確認します。`.git/`、`node_modules/`、秘密情報は除外します。
これらの検査は整合性の検証であって、Windowsの無警告やマルウェア不在の保証ではありません。

## GitHubで管理・配信する

ルートの `index.html` と `assets/` は静的配信できます。
ビルド済みファイルも含めてコミットする運用では、`npm run build` 後に差分を確認してください。
`dist/` を使うホスティングにも対応していますが、自動デプロイのワークフローやGitHub側の設定はこのZIPから変更しません。

コミットメッセージの例:

```text
chore: UIパーツライブラリの全体配布とビルド構成を整備
```

## 外部ライブラリ

`THIRD-PARTY-NOTICES.md` と `licenses/` を参照してください。
