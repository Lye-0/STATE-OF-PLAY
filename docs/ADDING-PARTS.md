# パーツを追加する

## 正本となるファイル

既存の近いパーツを参考にして、次の構成で作成します。

```text
src/parts/toggles/my-toggle/
├─ meta.json
├─ markup.html
├─ styles.css
├─ usage.md
├─ prompt.md
├─ react/
│  ├─ MyToggle.tsx
│  └─ Example.tsx
└─ vanilla/
   ├─ init.ts
   ├─ main.ts
   └─ index.html
```

ブロックは`src/parts/blocks/`、スクロールバーは`src/parts/scrollbars/`です。独立demo用ファイルと`exports.json`は不要です。
`styles.css`はルートのパーツ固有クラスに閉じて、ギャラリーの`body`や一般のbuttonを変更しないようにします。
`meta.json`の`id`をフォルダー名に、`componentName`をReactのファイル名に合わせます。

## 登録

`src/catalog/registry.json`にパーツの相対パスを追加します。

```json
"src/parts/toggles/my-toggle"
```

Viteプラグインが登録と元実装から、カタログ、マウント定義、CSS読み込み、形式別コードを生成します。
新しいファイルを追加したときも反映対象です。未完成のファイルが足りない場合は、ビルドを失敗させて不足を表示します。
元ソースの追加以外にgeneratedファイルを編集する必要はありません。

## `meta.json`

近い既存パーツのキーを維持します。名前・ID・category・order・version・tagline・description・material・motion・accent・componentName・tags・related・props・designType・runtimeが必要です。
トグルはinitialとconfigも定義します。configには剛性・減衰・移動距離・音の設定などが入ります。
新カテゴリを設ける場合は`src/catalog/categories.ts`と`types.ts`、生成側のカテゴリ検証も更新します。

## 依存ファイルを自動で含める

Reactの本体TSX、Vanillaのinit.ts、CSS、markupと使用例からローカル参照をたどります。
`src/shared/`の共有処理を各パーツへ手でコピーしないでください。例だけが参照する補助ファイルも自動で検出します。
使用例専用の依存は`examples/internal/`、本体の共有依存はパーツの`internal/`へ配置します。本体から使用例への依存は拒否します。

導入向け・元の構成の両方について、元パスと配布パスを`scripts/layout.ts`で対応付け、形式変換と参照先更新を行います。
新パーツのために配布済みコピーやパーツ別のパスマップを書く必要はありません。
同名ファイルの配置衝突（Windowsの大文字小文字を含む）、不足、パーツ外に漏れる参照を検出した場合は、生成に失敗して原因を表示します。

### 自動変換の対応範囲

| 対象 | 対応 |
| --- | --- |
| TS / TSX / JS / JSX | 静的import・export、型import、文字列リテラルのdynamic import、`new URL("…", import.meta.url)`。TypeScript ASTで解析 |
| CSS | リテラルの`url()`と`@import`。コメント・通常文字列・data URL・ローカルの`#fragment`を区別 |
| HTML / SVG | `src`、`href`、`xlink:href`、`poster`、style・script内の参照。HTMLコメントは保持 |
| 追加ファイル | UTF-8のSVG / JSON / TXT。相対参照から依存へ含める |

一般的な全文文字列置換でimportを書き換える方式ではありません。コメント中やサンプル文字列のパスは変更しません。
文字列で特定できない動的読み込み、未設定のエイリアス、`require`、`import.meta.glob`、ルート相対アセット、`srcset`、バイナリアセット等は、現時点では自動配布の契約外です。
検出したものを黙って捨てるのではなくエラーにします。対応を広げるときは解析・ファイル表現・パスマップ・ZIP・独立動作テストを一緒に追加してください。
元HTMLの形状・CSS・文字列内に動的生成したURLなどを任意に解析できる汎用バンドラーではありません。

Vanillaは実行時の外部依存なし、ReactはReactのみ、という現在の契約を維持しています。
新しい外部ライブラリには、依存の明示と動作・型チェックを追加してから対応してください。

## 説明とプロンプトの更新

`usage.md`にはパーツ固有の使い方や注意、`prompt.md`には外観・動作の再現仕様を書きます。
「必ずsrc/sharedへ配置」「元の階層を絶対に変えない」といった共通配置の固定指示を各パーツに埋め込まないでください。
配置・入口・依存・既存プロジェクトの調査・安全な更新・実行後の確認は`src/catalog/delivery.ts`から合成します。
画面の使い方、コピー用プロンプト、ZIP内のREADME/PROMPT/INTEGRATION.json、CLIは同じ関数を使います。
更新時は`meta.json`のversionと、見た目や操作に変更がある場合の固有仕様を同時に更新します。

## 共通デモ

`scripts/templates/demo.css`と`demo-entry.ts.txt`を使います。
各パーツ用デモのHTML・CSS・JSは、コード表示用のカタログと同じタイミングでメモリ上に組み立てます。
デモ用にパーツごとの枠CSSや初期化処理を複製しないでください。

## 動き・状態・後片付け

initの返り値はdestroy()を必須とします。トグルの状態制御と一時的なアニメーション値を分けます。
Reactでは、effectの取り外し時にイベント・RAF・Observerを解除します。
同じパーツを複数置いたときのSVG IDや状態を衝突させないようにします。
動きを減らす設定、無効状態、タッチでの縦スクロールを保持してください。

## 更新時の確認

```powershell
npm run typecheck
npm test
npm run test:browser
npm run test:relocation
```

元の48種類を残す回帰検証を維持しつつ、配布・参照解決・ZIP・配置変更のループは登録されたパーツを対象にします。
新カテゴリや新しい公開APIを追加する場合は、対応する型・マウント・ブラウザー操作のテストも追加してください。
プロンプトとusageの仕様は、実装変更と同時に更新してください。

## A/Bの方向性と実装の選び方（v3.2）

`designType` は `"A"`（表現重視）または `"B"`（実用重視）。品質の優劣ではなく、展示・検索の目安です。中間的な作品は主な用途で分類し、説明文で質感を補います。`runtime` は詳細欄・使い方・プロンプト・配置マニフェストに表示する実装方式です。

Aトグルの参考は `aperture` / `tide`。既存の `useToggle` / `createToggleController` で連続進捗・ばねを共通化できます。CSSで形状・発光・折れ方・レイヤーの動きを個別に作ります。共有rendererに新IDごとの必須分岐を増やさなくても構いません。

Bトグルの参考は `quiet` / `segment`。`useSimpleToggle` / `createSimpleToggleController` でクリック・ドラッグ・外部制御を共通化し、遷移はCSSに任せます。Canvas・フレームごとの描画処理は配布依存に入りません。実寸・ヒット領域は44px以上の高さを保ち、見栄えのためだけに展示時の倍率を上げません。

動きのないBブロックの参考は `paper-card` / `slate-card`。Reactはchildrenを包むCSSコンテナとし、useEffectを追加しません。Vanillaの `static-surface` はギャラリーとライフサイクルを合わせる軽量な初期化窓口です。CSSだけでも外観が成立します。ブロックに展示文言・ダッシュボードの数値を固定しません。

ギャラリー用の内容は `src/app/samples.ts`、本体の初期マークアップは `markup.html` に分離します。サンプルボタンはサンプル内だけで反応させ、パーツ詳細を誤って開かないようにします。

Aブロックで `createSurfaceController` を使う場合は `data-sop-paused` に連動するCSSで装飾アニメーションを止め、画面外・別タブ・詳細表示中に動かし続けないようにしてください。新規スタイルはパーツ固有ルートに閉じ、縮小モーションとforced-colorsの代替も用意します。

パーツ数・カテゴリ数・関連ID・A/Bの比率、軽量B配布にCanvas/RAF依存が混ざらないこと、Liquid/Fold/Prismの状態テキストは `tests/expansion.test.ts` が確認します。新しいパーツを作っても `packages/` に生成物を追加する必要はありません。

## スクロールバーを追加する（v3.3）

`src/parts/scrollbars/capillary`（A）または`minimal-scroll`（B）を参考にします。24種類の振る舞いを個別にコピーせず、`scroll-area.ts`、`scroll-metrics.ts`、`use-scroll-area.ts`、`scrollbar-base.css`を共有します。CSSの`@import`は依存解析に含まれ、持ち出す形式・配置に合わせて参照先が変わります。

- 本体にはスクロール可能なviewport、自由に差し替えられるcontent、視覚用railだけを持ちます。サンプルの文章を本体へ固定しません。
- 名前、説明、A/B、props、再現仕様を固有ファイルへ書き、registryに登録します。新しいスキンのために共有controllerにID分岐を追加する必要はありません。
- CSSはルートから直下のrail/viewportへたどるセレクターを使います。別のスクロール領域を中に置いても外側のスキンが漏れないようにします。
- 本体の高さは`style`または`--sop-scroll-height`で指定します。ReactのchildrenやVanillaの`.sop-scroll-content`を配置します。`orientation`は縦か横の一方向で、二軸同時表示を約束するものではありません。
- `overflow:auto`がスクロールの正本です。wheel/touchmoveのpreventDefaultで架空の移動量を計算しません。領域の外へイベントを無条件で伝播停止しません。
- つまみの長さは可視領域／内容全体の比率。最小長は28px、細いスキンにも独立したレールの操作領域を設けます。
- 装飾が必要な場合も動作中だけにし、静止中の継続RAFは不要です。forced-colorsでは標準バーに戻り、JS初期化前も標準のoverflowで操作できます。
- Reactの再描画、向き変更、短い／長い内容の変更、IDの重複、取り外し後の処理まで確認します。

```powershell
npm run test:scrollbars
npm run test:scrollbars:react
```

通常は実Viteとインストール済みのReactで検証します。`SOP_TEST_MODE=offline`はブラウザーのURL制限がある検証環境専用で、通常の開発には不要です。
