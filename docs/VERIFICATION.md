# v3.2.0 検証記録

検証日: 2026-09-22。基準は提供済みv3.1.0全体ZIPです。GitHub mainのpackage.jsonでもv3.1.0を確認しました。GitHubへのコミット・pushは行っていません。

## 今回の範囲

トグル24種類＋ブロック24種類、合計48パーツ。A（表現重視）33種類、B（実用重視）15種類。
既存16種類を残し、32種類を追加。Liquid / Fold / Prismの状態表示を改善しました。

| 検証 | 結果 |
| --- | --- |
| アプリ・Vanilla・共有処理のstrict型チェック | `tsconfig.json`、実TypeScript 5.8.3で成功。React専用フックは別のReact設定でチェックする構成 |
| 生成処理のstrict型チェック | catalog / layout / source-tools / export-parts / package / zip、core / delivery / expansion / relocationを実Node型で確認。Vite依存部分を含む全ツール検証とは区別 |
| 単体テスト | **46件成功、失敗0** |
| カタログ | 各カテゴリ20種類以上、A/B双方、Aが過半数、ID・名前・順序の一意性、非同一のCSS |
| Bの軽量実装 | 新Bトグル6種類にCanvas/RAF/rendererの配布依存なし。新Bブロック8種類のReact実装にeffect・イベント監視の依存なし |
| 配布データ | 48 × 4形式 × 2配置。**2,464ソース表示**を元データと照合。生成物をsrc/packagesへ書き込まない |
| ZIP | 48 × 4形式 × 2配置 × 2保存形式 = **768通り**。本文・CRC・階層・PROMPT・INTEGRATION.jsonを照合 |
| ブラウザー | 実Chromium、**21項目成功、pageerrorなし** |
| A/B表示 | カテゴリと方向性の交差、各件数、検索、空結果からの復帰、既存パーツの操作を確認 |
| 状態表示 | Liquid/Fold/PrismはON/OFFテキストの可視性と光学的な差を確認。6状態を実画面でも比較 |
| 新Bトグル | 実寸・44px以上の高さ、クリック・Enter・Space・矢印キー・実マウスドラッグ。ドラッグで詳細が開かない |
| コード・コピー・保存 | 両配置の全ファイル表示、選択の引き継ぎ、コピー成功・拒否時のUI、保存した本文と名前 |
| ZIP画面 | 画面とCLIの共通生成関数が、両配置・保存形式で一致 |
| キーボード | 詳細・子ダイアログのフォーカス保持、Escape、閉じた後の復帰 |
| モバイル相当 | 幅320/390/768のコード・ファイル選択・保存。追加で全48個の部品がカード内に収まること、18ケースの詳細表示を確認 |
| 独立デモ | 全48種類をギャラリーのCSS/JSなしで表示・操作 |
| 通常JS | 全48種類・両配置の実配布ファイルをネイティブES Modulesとして実行 |
| React TSX / JSX | 両配置、全48種類。実Reactで外部制御・内部制御・更新拒否・無効・複数配置を確認 |
| 後片付け | Reactの表示/取り外しを反復し、取り外し後のrequestAnimationFrame残留なし |
| 配置変更 | **3つの配置先 × 2構成 × 48パーツ = 288個体**。専用ファイルを移設し、既存の共有処理・アプリ入口を保持 |

コード表示テストは登録された全パーツを反復しています。テスト名に残っていた前版の固定件数を、現カタログから計算する表示へ修正しました。
スクリーンショットは検証用です。標準の全体ZIPへ展開済みデモや大量の画像は含めません。

## 環境・制約

Linux、Node.js 22.16.0、TypeScript 5.8.3、Chromium 144.0.7559.96。
テストには実在するPlaywright 1.57.0-beta-1764944708000と、インストール済みJupyterLabに含まれる**実React / ReactDOM 18.2.0 production**を使用しました。これはテスト専用で、配布ZIPにReactランタイムやテスト用ラッパーは含めていません。Reactの代替実装やダミー型定義は作っていません。
プロジェクトの固定依存バージョンは前版から変更していません。

npmレジストリは名前解決できませんでした。また、実HTTPの配置変更テストを試したところ、localhostへのナビゲーションが `ERR_BLOCKED_BY_ADMINISTRATOR` になりました。管理ポリシーを変更したり、別のホスト名で回避したりする操作は行っていません。

したがってブラウザー検証は `SOP_TEST_MODE=offline` を明示したテスト文書で実施しました。UIは同じTypeScriptソースとCSSから作り、独立JSと移設テストでは実ファイルの依存を検査してから、Blob URL / import mapでネイティブES Modulesを読み込みます。これは**Viteビルド・HMR・HTTP配信の成功を意味しません**。

Reactはproductionのため、development StrictMode特有の二重Effectは未検証です。明示的なmount/unmountの反復は確認しています。コピーの成功・拒否はテスト用API差し替えで再現し、ユーザーのOSクリップボードを操作したわけではありません。

## この環境では未実行

指定バージョンのnpm install、npm audit、ロックファイルの生成、実Viteビルド/HMR/subpath配信、公式ReactとVite型定義を含む完全なtypecheck、Windows Explorer/MOTW/Defender、iOS Safari実機、GitHub Actionsと本番配信。

依存を取得できる通常環境では、次で実行します。

```powershell
npm install
npx playwright install chromium
npm run verify
```

通常のverifyは全体の型チェック・単体テスト・実Viteビルド・HTTPでのブラウザーと移設テストを実行します。依存がないときに黙ってオフラインへ切り替えたり、成功扱いでスキップしたりはしません。

## 全体ZIPの検査

元の開発用階層を維持したDEFLATE ZIPです。各ファイルのSHA-256を記録し、生成後にJSZipでCRC・本文を照合します。Python zipfileでの独立したCRC/SHA検査と、別フォルダーへの展開後のアプリstrict型チェック・46件のテストも実施します。
`.git`、node_modules、dist、release、.test-output、テスト用ランタイム、秘密情報は含めません。
これらは格納・転送の整合性の検証であり、Windowsで警告が出ないことやマルウェア判定を保証するものではありません。
