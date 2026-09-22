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

ブロックは`src/parts/blocks/`です。独立demo用ファイルと`exports.json`は不要です。
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

近い既存パーツのキーを維持します。名前・ID・category・order・version・tagline・description・material・motion・accent・componentName・tags・related・propsが必要です。
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

元の16種類を残す回帰検証を維持しつつ、配布・参照解決・ZIP・配置変更のループは登録されたパーツを対象にします。
新カテゴリや新しい公開APIを追加する場合は、対応する型・マウント・ブラウザー操作のテストも追加してください。
プロンプトとusageの仕様は、実装変更と同時に更新してください。
