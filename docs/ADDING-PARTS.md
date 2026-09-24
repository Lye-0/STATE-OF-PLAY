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

## プルダウン・アコーディオンを追加する場合

`src/parts/dropdowns/`、`src/parts/accordions/`の既存スキンを参考にします。個別の`styles.css`はselect-base/accordion-baseをimportし、ルート固有クラスへ閉じます。
プルダウンの項目内容とアコーディオンの本文はmarkup.htmlとreact/Example.tsxに実例を書きます。React本体はitemsを受け取る共有Viewを使い、展示内容をデフォルト固定しません。
登録・配布ルールは他のカテゴリと同じです。registryに登録後、全体の件数テストも意図した件数へ更新します。
追加したスキンを単なる色違いだけで終わらせず、輪郭・文字・内部の情報構成・装飾・選択/展開状態まで設計してください。選択肢のHTMLは非インタラクティブな装飾に限り、アコーディオンの内部では入力を使えます。


## テキストボックスを追加するとき（v3.5.0）

`src/parts/textboxes/`を参考に、固有のmarkup/styles/meta/usage/promptとReact/Vanillaの入口・使用例を作ります。共通CSSはtext-field-base.css、動作はtext-field.ts、React描画はtext-field-view.tsxです。CSSを単に色違いにせず、入力面・ラベル・輪郭・フォーカスの関係を設計します。

入力は本物のinput/textareaとし、クラス`sop-field-control`を付けます。固定IDのコピー、IME中の文字列加工、onkeydownを使った独自編集、毎フレームのvalue更新は不要です。クリア・表示ボタンはtype=button。パーツ本体に具体的な業務文言・保存先・検索APIを固定しません。

メタデータはcategory=textboxesです。registryと公開propsを更新すると、依存する共有ファイルも配布に含まれます。内部のimportとCSSのurlを正しく書き、getDeliveryで生成されるパスを手作業で複製しません。展示のstatusには値そのものを流さず、filled/focused/composing等だけを使います。

新しいスキンはtests/textfields.test.tsの件数・デザインテストと、tests/textfields.browser.tsの実入力検証へ加えます。ラベル、長文、複数個体、制御/非制御、readOnly/disabled、フォームreset、合成IME、実機IMEでの確認範囲を区別して記録してください。


## ボタン／リンクを追加するとき（v3.6.0）

ボタンはbuttons、リンクはlinksカテゴリです。メタデータ・固有CSS・markup・React/Vanilla入口・使用例・仕様を各フォルダーへ置き、registry.jsonへ登録します。
共通スタイルはaction-button-base.css/navigation-link-base.css、Reactの構造はaction-button-view.tsx/navigation-link-view.tsxを再利用します。

buttonの初期typeはbutton。実行処理や状態は外側に接続し、デモのタイマー・カウンターを本体へ入れません。
リンクは実際のaとhrefを残します。独立デモの#destinationと使用例の移動先を必ず用意します。
ラベル・アイコンは利用先で差し替えられるようにし、ref/ネイティブ属性を維持してください。

loading時の無効化、submit/reset、修飾キー付きリンク操作、長い日本語、キーボードフォーカス、reduced-motion/forced-colorsを確認します。
既存部品のコピーを増やすのではなく、固有の見た目・仕様を管理し、配布時だけ共通依存を含めます。
新カテゴリを加える場合は、tests/browser.tsの汎用React検証でもbuttonの入れ子など不正な使用例を作らないようにします。


## タブ／セグメントを追加するとき（v3.7.0）

`src/parts/tabs/`と`src/parts/segments/`を参考にします。共有CSSはselection-base.css、タブのサンプル本文にselection-content.css、共有実装はtabs-view / segment-viewと対応controllerです。部品ごとにmeta/styles/markup/React・Vanilla入口/使用例/仕様を作りregistryへ登録します。

見出しの配列は展示だけ3項目。本体に3等分・nth-child(3)までの位置指定・業務上の固定ラベルを埋め込まないでください。マーカーの座標と大きさは実際の項目を計測します。キーには安定したvalueを使い、添字変更による状態の飛び移りを避けます。

タブはtablist/tab/tabpanel、セグメントは実radio。セグメントの一部をボタン+divの見た目だけで代替しないでください。タブのicon/badgeはラベル内の非操作装飾に限定し、操作可能な本文はパネルへ置きます。

CSSのスキン指定は`.sop-固有ID > .sop-choice-list > ...`など直属要素へ閉じ、別スキンをパネル内に置いても影響させません。CSSやグローバルイベントに3択固定の前提を追加しないでください。

2/3/4/5/7以上、0項目、全無効、選択中の削除、並べ替え、長いラベル、RTL、キーボード、フォームreset、controlledでの拒否、別ZIPを同時に配置したときのIDとradio名、Reactの取り外し、reduced-motion/forced-colorsを確認します。詳細の項目数切替はデモ限定で、コードの例を自動編集する機能ではありません。

## チェックボックス / ポップアップの追加

`src/parts/checkboxes/`または`src/parts/popups/`の近いスキンを参考にします。チェックは`checkbox-controller.ts` / `checkbox-view.tsx`、モーダルは`popup-controller.ts` / `popup-view.tsx`を共有します。本物のinput/labelとdialogを維持し、見た目だけのクリック可能divへ変換しないでください。

ポップアップの本文はmarkupとExampleに作成し、React本体には固定しません。縮小見本はギャラリーが実マークアップから作るため、別の偽プレビューHTMLは不要です。内容にIDやradio名を必要とする場合は、複数配置でも衝突しないことを確認します。HTMLのサンプルpaletteでは`data-popup-radio-group`、React例では`useId()`でグループを分離します。

フォーム/Space、mixed、reset、モーダルのフォーカス/背景/Escape/取り外し、両配布配置と新しい項目が入れ子にある場合を`tests/check-popup.browser.ts`で検証します。

## v4.0.0のfoundation系パーツ

新しい13カテゴリは `src/shared/foundation/` のコントローラーと基本CSSを共有します。
meta.jsonの `foundation` にkind/id/variantと展示初期設定を記述します。
個別のstyles.css、markup.html、React/Vanillaエントリー、使い方、プロンプトを正本として置き、registry.jsonへ登録してください。
ギャラリー専用の操作例は `src/app/foundation-preview.ts` に分離しています。保存処理の成功を装うデモを配布本体へ含めないでください。
読み取り側の型は `src/catalog/types.ts`。新しい種類を増やす場合はカテゴリ定義・カタログ検証・mount型も合わせます。


## v4.3: 文字中心の選択パーツと動き

Aプルダウンのラベル・アイコン・補足情報は固定装飾として扱わず、内容に応じて省略できるようにします。`autoIcon=false`でも利用者が指定した`icon`は表示されます。共通の`SelectView`自体の既定値は保持しているため、Bタイプの既存表示は変わりません。

`select-motion.ts`はopt-inクラスを持つAだけが起動します。背景面は擬似要素とCSS変数で作り、候補のDOMを置換しません。アイテムの内容変更、popup内部のスクロール、再配置、取り外しまで検証してください。

共有CSSの読み込み順でスキンが消えないよう、固有スタイルは`.sop-select.sop-select-sculpted.sop-パーツID`／`.sop-scroll-area.sop-scroll-sculpted.sop-パーツID`に限定します。`tests/refinement.browser.ts`では単独、共有CSSを一度だけ含む場合、複数回読み込む場合のスタイル一致を検証しています。

## 表現を追加するときの参考（v4.5）

`UnfoldAccordionView`と`createUnfoldAccordion`は、既存アコーディオンの意味・状態制御を変えず、表示進捗だけを加える例です。本文を複製せず、pointer-events:noneかつaria-hiddenの装飾レイヤーだけを使います。

`ResponsiveFieldView`と`createResponsiveTextField`は、input/textareaの位置・幅・標準編集を維持して外側の素材だけを反応させる例です。入力文字列に依存した装飾にせず、IME変換中の値を整形しないでください。常時タイマーは追加せず、最後の余韻が収束したらRAFを停止します。

通常のA/Bラベルを品質判定の代わりに使わず、実寸と動作の両方を確認してください。新しい表現ごとに、反復操作・動的内容・複数配置・縮小モーション・取り外しを試験します。

## NAVIGATOR系統

検索バー・コマンド・右クリック・ナビゲーション・表は `src/shared/workbench/` の共通ロジックを使います。新しいスキンは10ファイルの既存形式で登録できます。表示例の設定はmarkupのdata-wb-config、React側ではitems/rows/columnsから渡します。ギャラリー専用の接続はsrc/app/workbench-preview.tsへ置き、配布する実装へは混ぜません。新種を追加するときは既存スキンを色だけ変えるのではなく、外形・情報構成・操作時の反応を確認してください。
