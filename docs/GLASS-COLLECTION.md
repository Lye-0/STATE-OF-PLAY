# Liquid Glass Collection / v4.16.0 再構築版

## 現行リポジトリへの統合

このリポジトリのv4.15.0を基準にLiquid Glassシリーズを拡張しました。既存のカテゴリ別読み込み、ロックファイルの依存指定を維持し、通常の一覧・詳細・背景切り替えに接続しています。

## 構成

追加62種は `lgc-` で始まる独立IDを持ち、普通のカテゴリへ登録します。先行8種は `lg-` のまま維持します。
825個の既存パーツの本体を維持し、35カテゴリにガラスA/B各1種（計70種）、総数887種です。カテゴリの総数は37です。
各カテゴリの通常のA/Bフィルターで選べます。タグ `liquid-glass` は配布用メタデータに残しています。

| Category | A | B |
|---|---|---|
| blocks | Glass Shelf | Mist Surface |
| scrollbars | Lens Rail | Mist Rail |
| accordions | Laminated Accordion | Mist Accordion |
| textboxes | Refraction Field | Frost Field |
| links | Lucent Arrow | Mist Link |
| segments | Lens Segments | Mist Segments |
| checkboxes | Glint Check | Mist Check |
| popups | Floating Window | Mist Dialog |
| sliders | Meniscus Range | Mist Range |
| radios | Lucent Choice | Mist Choice |
| comboboxes | Lens Finder | Mist Finder |
| toasts | Floating Notice | Mist Notice |
| hints | Lens Hint | Mist Hint |
| progress | Meniscus Progress | Mist Progress |
| uploads | Glass Inbox | Mist Dropzone |
| datepickers | Lens Calendar | Mist Calendar |
| pagination | Lens Pages | Mist Pages |
| breadcrumbs | Lucent Trail | Mist Trail |
| badges | Glass Tokens | Mist Chips |
| numbers | Lens Stepper | Mist Stepper |
| avatars | Lens Portraits | Mist Profiles |
| ratings | Prismatic Rating | Mist Rating |
| colors | Spectrum Glass | Frost Palette |
| skeletons | Glass Placeholder | Mist Skeleton |
| timelines | Lens Timeline | Mist Timeline |
| wizards | Glass Journey | Mist Wizard |
| searchbars | Lens Search | Mist Search |
| commands | Glass Commands | Mist Commands |
| contextmenus | Lens Context | Mist Context |
| navigation | Floating Navigation | Mist Navigation |
| tables | Glass Ledger Collection | Mist Table |

各スキンは基礎となる同カテゴリの実装を継承し、入力・フォーム・イベント・状態処理はそのまま使います。
`GLASS-COLLECTION-INDEX.json` の `source` が元パーツです。全カテゴリの動作を新しい共通コントローラーへ置き換えたわけではありません。
Aは透明な面と明瞭な縁、Bは密度の高い控えめな面を基本にしています。
これはCSSの透過・背景ぼかし・ハイライトによる独自の素材表現です。Appleのネイティブ描画、物理的屈折や背景の自動色解析を再現したという意味ではありません。

## 通常展示への統合

普通の一覧カードから普通の詳細画面を開きます。各パーツは用途に合う通常カテゴリへ配置しています。
既存8種類を含め、元カテゴリの確認操作を使います。見やすさのためのガラス用背景のみ残しています。
詳細の通常の背景切り替えでlight/darkを比較できます。展示背景はパーツの本体や必須依存には入りません。

## アプリへの導入

詳細画面でTSX/JSX/TS/JSと「導入向け/元の構成」を選び、コードまたはパーツZIPを取得します。
本体と必要な共通CSS・処理をまとめて持ち出してください。CSSだけを単独コピーすると必要なimportが不足する可能性があります。

新しい `lgc-` スキンはルートに `lgc-root` を持ちます。次のdata属性またはCSS変数で素材を調整できます。

```html
<div class="… lgc-root" data-lg-appearance="light" data-lg-material="solid">…</div>
```

- `data-lg-appearance="light"` / `"dark"`：配色。既定はdark。背景を自動解析しません。
- `data-lg-material="solid"`：背景透過を抑える表示。削除すると各スキンの初期素材へ戻ります。
- `--lgc-fill`、`--lgc-panel`、`--lgc-ink`、`--lgc-muted`、`--lgc-accent`、`--lgc-blur`：素材の調整。
- `data-lgc-paused="true"`：CSSアニメーションを一時停止。機能の状態変更は止めません。コントローラーの停止APIがある部品は、そのAPIも利用してください。

ReactでHTML属性を受け取らない高次コンポーネントの場合、存在しないプロパティを追加せず、外部CSSで該当ルートを指定して変数を調整してください。
基礎コンポーネントのAPIは各パーツの `usage.md` と元カテゴリのドキュメントを参照します。
先行8種の `lg-` は従来のプロパティ/APIを維持しています。`lgc-` スキンへ実験的屈折や共通の `updateGlass()` APIを一律に実装したわけではありません。

## 性能とアクセシビリティ

文字そのものにblurフィルターを掛けず、背後の面にbackdrop-filterを掛けます。
複雑な背景ではregular相当の濃い面かsolidを使用してください。キーボード操作やラベル・フォーム処理は基礎コンポーネントを継承します。
縮小モーション、透明度低減、高コントラスト、強制配色、backdrop-filter未対応時のフォールバックを用意しています。
実際の利用環境でのコントラスト、スクリーンリーダー、ブラウザー互換性は別途確認してください。

## 開発コマンド

```sh
npm install
npx playwright install chromium
npm run verify
npm run dev
```

ここで `npm run verify` は利用先で実施する全体確認です。今回この全工程を完走したという意味ではありません。
新しい構造テストは `npm test` に含めています。最新の検証範囲は `GLASS-COLLECTION-VERIFICATION.md` を参照してください。
