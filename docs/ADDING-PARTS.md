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

Reactの本体TSXまたはVanillaのinit.tsから、ローカルimportをたどります。
`src/shared/`の共有処理を各パーツへ手でコピーしないでください。
4形式の配布コードとZIPでは、必要なファイルを元の階層で含めます。

Vanillaは実行時の外部依存なし、ReactはReactのみ、という現在の契約を維持しています。
新しい外部ライブラリや画像素材を必要とする場合は、依存検証と配布対象を`source-tools.ts`／`catalog.ts`へ明示的に追加してください。
未知の依存を黙って省略しません。

ReactのExample.tsxとVanillaのmain.tsは使用例です。本体以外のローカル補助ファイルを使用例だけに追加すると、未登録参照の検査で失敗します。必要な場合は生成側で対象を追加してください。

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
```

元の16種類を残す回帰検証は維持しつつ、コード一致・import解決・ZIP・ブラウザーのループは登録された全パーツを対象にします。
パーツ追加のたびに全体件数の固定値を手直しする必要はありません。
プロンプトとusageの仕様は、実装変更と同時に更新してください。
