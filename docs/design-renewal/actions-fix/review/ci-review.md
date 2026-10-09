# Actions 修正差分の独立コードレビュー

判定: **修正後のコードレビュー合格。C1は主担当の追補で解消しました。** それ以外に、この差分から確定できる新たな実装不良やWindows専用の破綻は見つかりませんでした。作者・共有源・試験・実行中fixtureは変更していません。

## C1 — 寸法限定と一緒に色継承検査も対象から外れる（修正済み）

- 対象: `tests/continuum.browser.ts:79–81`。
- `historical.has(r.base)`を適用した一つのループに、stage/bodyの固定寸法だけでなく、`data-loader-label`の`rgb(20, 30, 40)`継承assertも入っています。そのため新しいCONTINUUM Bローダーがラベル色継承の検査から除外されます。
- 依頼された変更は「元8 inline Bだけサイズ契約」です。アニメーション・pause・狭幅等の共通試験は残っていますが、色継承には別の同等assertがありません。
- 修正: 全Bのループで文字色継承を保持し、height<=60/body<=140×40のassertだけをhistorical8に限定する。8件の件数assertは維持する。

## 確認結果

- `.github/workflows/verify.yml`: 同一PR番号／同一refの旧runだけをキャンセル。14ジョブ、OS行列、各検査、失敗判定は不変。検査免除・continue-on-error追加なし。
- `scripts/vite-dependencies.ts` / `tests/component-server.ts`: React本体、react-dom（flushSync利用を含む）、client、両JSX runtimeを事前指定。起動後に書かれる配布fixtureについてentries空・noDiscoveryで後発依存発見による再最適化を防ぐ方向は適切。configFile:falseでカタログpluginを読み込まず、suite別cacheDir・watch:null・hmr:falseで静的操作中のreloadを避けています。
- `tests/gallery-server.ts`: 実app config/catalog pluginを維持し、固定interaction用だけwatch/HMRを止めています。`tests/browser.ts`の実作者ファイル更新→カタログ再生成→復元のwatcher回帰は独自createServerで残っています。
- `vite.config.ts`: docs/.test-outputの大量の証拠コピーをwatch対象外にする変更は、保存ログのENOSPC発生パスと一致。作者srcの監視は除外していません。
- `tests/css-color.ts`: ブラウザ自身にCSS Color 4と旧rgbaを解釈させ、RGBの末尾をalphaと誤認する旧正規表現を排除。1/255量子化を考慮する試験も追加。透明色・不透明rgbの検査あり。
- Glass: 保存ログにLens旧alpha帯、Mistの固定rgba文字列、toast固定差0.35の失敗があり、新しい透過仕様との不整合に対応しています。blur、solid時alpha=1、native操作、展示と実通知の一致は残っています。popup題字のRGB検査も新旧serialize差を除去しています。
- Tab: 共通状態セレクタの詳細度を1class強め、skin overflow:autoより非overflow状態を優先する実修正。狭幅で無条件にfalseを要求する検査から、trueなら実scrollWidth超過・auto/scroll・選択項目が可視であることへ変更。単なるassert削除ではありません。thumb token必須を実効テーマ色とnative scrollbar色の一致へ変更している点も適切。
- Expansion React: 後続カテゴリ／形式までコントラスト失敗を集計しても、末尾で必ずassert.deepEqual(...,[])が失敗します。cleanup、幅検査、pageerror検査は残り、radio全選択操作とchecked>0を追加しています。finallyに診断JSON保存があるため、早い別assert失敗も終了コードへ反映されます。
- Signature: serverの置換のみで意味的assert削除なし。提供ログ本文に元CI失敗原因がないという記録を保持し、推測原因を確定扱いにしていない点も妥当です。

## 残る非阻害的な注意

1. Radioの既存`lightSelectedContrast`は擬似面・勾配の実描画を保証しません。今回の4番号の低比率を実際に取り逃しました。今回の最終色は独立実paint検査で合格済みですが、同様の再発をCIで防ぐには4件の実背景サンプル／専用描画回帰を後続で保持すると有効です。新しい全選択ループの追加自体は改善です。
2. Glassの「B>A」だけでは1/255の差でも通るため、A/Bの見た目の差が将来なくなった場合の検出は弱めです。旧0.35差へ戻す必要はありませんが、承認された現在の差に基づく妥当な最小差、または画像確認を別に残す余地があります。これは今回の正当なalpha仕様変更を拒否する理由にはしていません。
3. cacheDirはsuite単位です。同じsuiteの複数processを同一checkoutで同時実行すると共有します。現在のCIはジョブ別checkout／suite内順次なので問題は見つかりません。手動並列時は別suite名を使う必要があります。
4. Windowsを実行していません。新規filesystem操作はpath.joinを使用し、Playwrightのbrowser指定やPOSIX専用shellを追加していないため、この差分にWindows専用欠陥は見つかりませんでした。CI管理Chromiumの版との差も未実証です。

## 範囲と証拠

レビュー対象は依頼されたworkflow、Vite/server/color helper、全変更tests、tab共通CSS。`git diff`、新規helper全文、actions-fix README/validationとcaptures/logsの失敗箇所を読みました。独立radio実React実行は直前のreview-2に記録。今回コードレビューでは、並行実行中のfixtureや作者を変える試験は実行していません。主担当による全体検証は継続中であり、Windows／全Actions成功をこの報告は主張しません。

## C1追補の確認

全CONTINUUM Bのループで色継承を検査し、historical条件を固定寸法assertだけへ移した最新コードを確認しました。元8件の件数assertも保持されています。

追加5ローダーのCSSは、HEADとの差がroot色`#d8e1ed`→`#b3c1d1`とstatusの`#b3c1d1`→`inherit`だけであることを機械照合しました。statusはrootの直下にあり、通常時の実ラベル色を保ちつつホストへのinline color指定に追従します。装飾の線・面は固有色を明示し、形・速度・寸法は不変です。任意のdescriptionは元からroot色をinheritするため、その通常色もrootに合わせて濃くなります（初期descriptionは空）。この副作用を「全テキスト色不変」とは扱っていません。最新5CSSの実ブラウザ検証は主担当のContinuum再実行対象です。
