# パーツを追加する

## ファイルと登録

同じカテゴリの操作契約を確認し、次の正本を作成します。状態管理や解除処理は再利用できますが、既存の見た目を別カテゴリへ移植して種類数を増やしません。

```text
src/parts/<category>/<id>/
├─ meta.json
├─ markup.html
├─ styles.css
├─ usage.md
├─ prompt.md
├─ react/
│  ├─ <ComponentName>.tsx
│  └─ Example.tsx
└─ vanilla/
   ├─ init.ts
   ├─ main.ts
   └─ index.html
```

`meta.json` の `id` をフォルダー名、`componentName` をReactのファイル名と一致させ、カテゴリ・順序・バージョン・A/B・名前・説明・素材・動き・APIを設定します。カテゴリ固有の設定は既存パーツの型に合わせます。

`src/catalog/registry.json` に `src/parts/<category>/<id>` を登録します。新カテゴリの場合は `src/catalog/categories.ts`、`types.ts` と生成側のカテゴリ検証も更新します。配布用コピーやパーツ別のパスマップは追加しません。

## 実装の契約

- CSSは部品固有のルートに閉じ、一般のbuttonやbodyを変更しない。
- 実際の状態はネイティブ操作やReactの制御値に接続し、装飾の動きと分ける。
- Vanillaの `init` は部品ルートを受け取り、`destroy()` を返す。Reactも解除時にイベント・Observer・RAF・タイマーを片付ける。
- 複数配置のIDと状態、無効状態、フォームとリセット、キーボード、タッチのスクロール、縮小モーション、強制配色を確認する。
- `usage.md` に実際のAPIと導入上の注意、`prompt.md` に外観・動作の仕様を書く。共通の配置指示は `delivery.ts` から合成する。

共有処理は `src/shared/` で管理します。独立デモは `scripts/templates/` と配布データから生成するため、別の本体やデモ用の正本を作りません。

## 種類数とデザインの判断

各カテゴリでA+B合計30以上、A・Bそれぞれ5以上を保ちます。A:B=3:1は目安です。Aは操作できることを前提に形・素材・状態変化・情報配置の独自性を重視し、Bは読みやすさと日常の使いやすさを重視します。

色、角丸、外枠だけを変えたものは独立した追加案として扱いません。既存・新規を並べ、メニューの展開、選択後、入力後など実際に使う状態も比較します。画像の類似スコアやCSSの一致検査だけでデザインの独立性を判断しません。

共通CSSを使う部品の外観は `.sop-foundation.sop-<id>` など共有ルートと固有ルートを組み合わせて閉じます。共通CSSの読み込み順によって固有の外観が上書きされないことを確認します。静的HTMLとReact／Vanillaが生成する実際の要素名を照合してからスタイルを設定します。

拡張時の写真と比較資料は [expansion-30-2026-10-06](expansion-30-2026-10-06/README.md) にまとめています。

## 依存と参照

生成ツールが本体・CSS・マークアップ・使用例から相対参照をたどり、portable / originalの配置へ更新します。本体の依存と使用例専用の依存を区別します。本体から使用例への依存、ファイル不足、Windowsでの大文字小文字を含む配置衝突はエラーにします。

| 対象 | 対応する参照 |
| --- | --- |
| TS / TSX / JS / JSX | import・export、型import、文字列のdynamic import、`new URL("…", import.meta.url)` |
| CSS | 文字列で確定する `url()`・`@import` |
| HTML / SVG | `src`・`href`・`xlink:href`・`poster`、style・script内の参照 |
| 素材 | 相対参照されるUTF-8のSVG / JSON / TXT |

動的な式、未設定のエイリアス、`require`、`import.meta.glob`、ルート相対アセット、`srcset`、バイナリアセットは自動配布の契約外です。対応を増やす際は解析・配置・ZIP・独立動作の検証も追加します。Vanillaの実行時外部依存なし／ReactはReactのみという契約を変える場合も、依存宣言と検証を更新します。

## 更新時の確認

変更した見た目・動作・APIと `meta.json`・`usage.md`・`prompt.md` を揃えます。追加・削除・分類変更時はREADMEの件数表も登録一覧から集計し直します。

```sh
npm run typecheck
npm test
npm run build
npm run test:browser
npm run test:relocation
```

さらに変更したカテゴリのブラウザーテストを実行し、展示・詳細・4形式・両配置の実ソースと独立デモを確認します。全体確認は `npm run verify` です。導入側の扱いは [INTEGRATION.md](INTEGRATION.md)、生成と読み込みの境界は [ARCHITECTURE.md](ARCHITECTURE.md) を参照してください。
