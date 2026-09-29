# 内部構成

## 正本と責務

| 場所 | 責務 |
| --- | --- |
| `src/parts/`・`src/shared/` | 実際に動く部品、共有処理、CSS、使用例、仕様 |
| `src/catalog/registry.json`・`categories.ts` | 登録パスとカテゴリ表示 |
| `src/app/` | 展示、詳細、プレビューの状態 |
| `scripts/catalog.ts` | 登録と依存から配布ソースを生成 |
| `scripts/source-tools.ts`・`layout.ts` | 参照解析、配置、パス更新、形式変換 |
| `src/catalog/delivery.ts` | コード・導入ガイド・プロンプト・ZIPの共通配布モデル |
| `scripts/vite-catalog.ts` | 元実装とブラウザー用カタログをViteへ接続 |

TS / TSXが正本で、JS / JSXは生成時に型を除去します。元ファイルの `sourceName` は形式・配置を跨ぐ識別子です。ファイル選択の維持と `INTEGRATION.json` の対応表に使います。生成済みコピーを正本として編集しません。

## ブラウザーの読み込み

サイト入口は `virtual:sop-browser` の一覧情報を読み、選択したカテゴリの `virtual:sop-category/<category>` を動的に取得します。カテゴリの実装・CSSと、詳細で使う配布ソースJSONを分け、配布ソースは詳細を開いたパーツだけ取得します。

初期カテゴリはトグル。「すべて」は24件ずつ表示します。起動表示はNixie Loader、カテゴリ取得中はOrbital Loomを使います。カテゴリ選択はAurora Selectをサイトへ接続しています。旧 `virtual:sop-catalog` / `mounts` / `styles` は互換・検証用で、通常のサイト入口から全件読み込みしません。

追加や差分の統合では、部品の正本と登録を更新し、この読み込み境界を保ってください。旧版のサイト入口・全件import・生成済みカタログで置き換えると、起動時の負荷が増えます。

## 配布生成

```text
元ソース → 依存の判定 → 配置と参照の更新 → TSX / JSX / TS / JS
                                                    ↓
                             コード・使い方・プロンプト・ZIP
```

portable / originalは同じ元実装を異なる配置へ写します。本体・使用例の依存を区別し、外部依存を明示します。独立デモは生成した配布ソースから作り、実アプリに持ち込む本体とは分けます。TypeScriptコンパイラー・AST解析はNode側だけで使用します。

Liquid Glassの詳細調整は、元カタログを変更せず配布データへ適用します。各面の背景アルファを `基準アルファ × scale + lift` で変換し、濃淡の順序と差の比率を保ちます。透明度50は1 / 0、100は0.12 / 0、0は0.75 / 0.25で中間は線形補間。ぼかしは各面の基準に倍率を掛けます。展示用背景は本体の依存へ含めません。

## 状態と後片付け

ネイティブの入力・スクロール・リンクなどが実際の値と操作を所有し、装飾の動きはその状態に追従します。ReactとDOMコントローラーで同じ値やIDを二重管理しません。イベント、Observer、RAF、タイマーは `destroy()` やeffectの解除で停止します。

CSSは部品ルートに閉じ、隣接する別スキンへ漏らしません。縮小モーション、無効状態、強制配色、狭い幅と長い内容を扱います。部品固有の契約は各 `usage.md` と型定義が正本です。

## 検証と生成物

`tsconfig.json` はアプリとVanilla、`tsconfig.react.json` はReact、`tsconfig.tools.json` はツールとテストを検査します。単体テストは登録・生成・配布契約を、ブラウザーテストは操作・レイアウト・React・持ち出し後の動作を確認します。

GitHub ActionsはUbuntu / Windows × 6グループで `npm run verify` の工程を分担します。ブラウザーを使う各グループは独自の本番ビルドを作ります。フィクスチャーは `tests/`、実行時の生成物は `.test-output/` に置きます。Viteは `.test-output/` の変更を監視対象から外し、別テストの生成によるページ再読み込みを防ぎます。

`dist/` は配信用、`release/` はZIP、`.test-output/` は検証用で、いずれもGit管理対象外です。`npm run package` は正本と設定を収録し、ZIP内の `RELEASE-MANIFEST.json` とCRC・SHA-256を検証します。

## GitHub Pages

`.github/workflows/pages.yml` をmainから手動実行して公開します。`configure-pages` の `base_path` をViteの `--base` へ渡し、型チェック・ビルド・`test:pages` の成功後に `dist/` をPages用アーティファクトとしてデプロイします。初回はSettingsでPagesのSourceをGitHub Actionsへ設定します。

`tests/pages.browser.ts` は本番成果物をサブパスに限定した静的HTTPサーバーで検証します。Viteの開発処理やSPAフォールバックを使わず、カテゴリの遅延読み込み、詳細JSON、クエリ・ハッシュによる再読み込み、ローカルのファイル・ZIP生成を確認します。公開先でサーバー側のAPIやリライトは不要です。
