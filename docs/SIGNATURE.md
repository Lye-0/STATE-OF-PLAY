# SIGNATURE — v4.11.0 / 6カテゴリを追加

このリポジトリのv4.10.10の603パーツを残し、6カテゴリ各16種類（A10 / B6）、合計96種類を追加しました。
31カテゴリ・699種類です。ギャラリーの検索で `SIGNATURE`、またはカテゴリ選択で探せます。

## 今回の設計

Aは、共通の枠を別の色に塗り分ける方式ではなく、操作と構造を結び付けます。
アバターは絞り羽根・軌道・写真の重なり、評価は花弁や光が積み上がる構造、カラーピッカーは色相環・顔料の槽・可動する見本、スケルトンは内容の構造を予告する線・層、タイムラインは経路と記録の階層、ウィザードは工程の接続や紙面の切り替えで作り分けています。
Bには通常の丸型アバター、星評価、基本的なHEX/RGB、シマー、シンプルな履歴、標準的なステップを含めます。

## 導入

詳細欄の「コード」から TSX / JSX / TS / JS と、導入向け / 元の構成を選んでください。ファイルツリー・コード・使用例・ZIPは同じ元実装から生成します。
「導入向け」ではパーツのフォルダーと `internal/` が一組です。フォルダー全体を利用先のコンポーネント配置へ移すと、内部の相対参照が保たれます。使用例・デモはアプリの入口へ上書きするファイルではありません。

React向けの実装は `useId` などを使います。本リポジトリの対象は、指定依存のReact 19.1.1です。
通常のHTML版は `markup.html` の構造を置き、CSSを読み込み、配布された `init(root, options)` を呼び出します。返り値には `update(options)` / `getState()` / `reset()` / `setPaused(boolean)` / `destroy()` があります。
コンポーネントを取り外すときは `destroy()` を呼びます。React版はEffectの後片付けで自動的に呼びます。

```ts
import { init } from './your-part/vanilla/init';
const root = document.querySelector<HTMLElement>('[data-demo]');
if (!root) throw new Error('パーツを配置してください。');
const controller = init(root, { /* 以下の各APIを使用 */ });
// 同じ要素に重ねてinitしないでください。
// 画面終了時に controller.destroy();
```

イベントや入力は各個体に閉じています。共有描画用のクラスを別パーツにコピーするのではなく、対象パーツのCSSも必ず取得してください。

## アバター / ユーザーチップ

`users` は `{ id, name, subtitle?, src?, initials?, status? }[]`。`status` は `online | away | busy | offline` です。
`value / defaultValue / onValueChange(id)`、`interactive`（既定true）、`disabled`、`label` を使えます。

- `interactive: false` はプロフィールの表示用です。リンクへの移動・アカウント切り替え等を勝手に行いません。
- 選択用の場合はネイティブbuttonを使い、選択状態を `aria-pressed` で伝えます。1件や複数件で使えます。
- `src` を省略した場合、名前に対応するイニシャルを表示します。画像の読み込み失敗時もフォールバックします。
- ステータスは渡されたデータを表示するだけで、実際のオンライン状態を取得しません。
- 外部画像URLを指定すると、そのURLへの通常の画像リクエストが発生します。ギャラリーの例は外部写真を使用しません。

## 評価

`value / defaultValue / onValueChange(number)`、`max`（2〜10の整数、既定5）、`name`、`label`、`disabled`、`readOnly`、`required`、`clearable` を使えます。

- 今回の入力は整数評価です。半星・小数評価は実装していません。
- 0は未評価、1〜maxは確定した値です。ホバーのプレビューだけでは値を変更しません。
- ネイティブradioによるキーボード選択とフォーム値に対応します。
- `required` 時はクリアを出しません。未評価の必須欄はフォームの標準検証で確認できます。
- `readOnly` は確定済みの値を表示し、変更だけを防ぎます。`disabled` は無効化し、通常のフォーム送信値から外れます。

## カラーピッカー

`value / defaultValue / onValueChange(hex)`、`palette`（HEX文字列配列）、`name`、`label`、`disabled`、`readOnly` を使えます。
返す値は不透明な `#RRGGBB` です。入力は `#RGB` / `#RRGGBB` を受け付けます。アルファ値・透明色・HSL文字列・広色域形式は今回のAPIの対象外です。

- 色相環または色相レール、彩度・明度の面、キーボード操作可能な各レンジ、HEX入力、RGBの値を連動させます。
- HEXの入力途中は未完成の文字を保持します。不正な値はコールバックへ確定せず、エラーを表示します。
- 候補パレット・ネイティブ色選択も利用できます。
- 色を読み取るEyeDropperや画像解析、OS全体からの色取得は行いません。
- ドラッグに装飾の遅延を持ち込まず、色の値はその場で更新します。

## スケルトン

`loading`（既定true）、`rows`（2〜8）、`label`、`paused` を使います。Reactは `children`、通常HTMLはルート直下の `[data-sg-slot]` に読み込み後の内容を入れます。

```tsx
<ScannerSkeleton loading={loading} label="記事を読み込んでいます" rows={4}>
  <Article />
</ScannerSkeleton>
```

- `loading={false}` になったときだけ内容を見せます。データの取得や、時間経過による疑似完了はありません。
- 内容は複製・再作成せず、ローディング切り替え後も入力状態を保ちます。
- 読み込み中の内容はhidden/inertで操作対象から外し、ルートの `aria-busy` を更新します。
- 動きを減らす設定・画面外・ページ非表示・pausedでは装飾の動きを止めます。利用者のchildren内のアニメーションを勝手にcancelしません。
- JavaScriptがまだ実行されていないSSRでも、React版はloadingに対応する表示から開始します。

## タイムライン

`items: {id, title, description?, date?, dateTime?, status?, href?, meta?}[]`、`expanded / defaultExpanded / onExpandedChange(ids)`、`label`、`disabled` を使います。
`status` は `done | active | pending` です。dateは表示文字列で、タイムゾーン変換や日時順の並べ替えはしません。

- 入力配列の順に、実際のol/liとして表示します。
- 各記録はdetails/summaryで開閉します。複数の記録を同時に開けます。
- `expanded` を外部から渡した場合、親側の配列更新によって確定状態を制御します。
- 自動的に履歴を取得したり、状態を「完了」へ進めたりしません。
- HTMLとしての文字列注入は行わず、title/descriptionは通常の文字として扱います。

## ステップ / ウィザード

`steps` は `{id,title,description?,fields?}[]`。fieldsは `{name,label,placeholder?,required?,type?}`、typeは `text | email | textarea` です。
`current / defaultCurrent / onStepChange(id)`、`disabled`、`allowJump`（既定false）、`label`、`beforeNext`、`onComplete` を使います。

```tsx
<AssemblyWizard
  label="プロジェクトを作成"
  steps={[
    {id:'name',title:'名前',fields:[{name:'projectName',label:'名前',required:true}]},
    {id:'about',title:'概要',fields:[{name:'description',label:'説明',type:'textarea'}]},
    {id:'review',title:'確認',description:'入力内容を確認して完了してください。'}
  ]}
  beforeNext={async (step, values) => {
    // true: 次へ / falseまたはメッセージ: 留まる。
    // 必要な外部検証・保存処理は、利用先で明示的に実装します。
    return values.projectName.trim() ? true : '名前を入力してください。';
  }}
  onComplete={values => { console.log('完了した入力値', values); }}
/>
```

- ネイティブ入力のrequired/email検証を行い、その後 `beforeNext(stepId, values)` を実行します。boolean・メッセージ文字列・そのPromiseを返せます。
- 非同期検証中は重複した次へ操作を防ぎ、結果を待ちます。更新や取り外しで無効になった古いPromiseの結果は反映しません。
- `allowJump` は明示的なジャンプ許可です。true時のステップ直接選択は `beforeNext` を呼ばず、検証を飛び越えます。検証必須のフローではfalseを維持してください。
- ステップを切り替えても入力欄を再作成しません。stepsを更新する場合も一致するfield nameの値を保持します。nameは全ステップを通じて一意にしてください。
- 非表示の未来の入力欄のrequiredで、外側フォームの送信が停止しないようにします。全フィールドの最終検証は利用先でも行ってください。
- `onComplete` は通知コールバックです。サーバー保存の成功をライブラリが保証するものではなく、そのPromiseも待ちません。保存・外部検証はbeforeNextで待つか、利用先の状態管理で処理してください。
- 本実装ではfieldsによる入力フォームを提供します。任意のReactNodeを各ステップへ渡す一般的なフォームビルダーではありません。

## 制御とデータの取り扱い

value/current/expandedを明示して渡すと、利用先が確定値を所有します。コールバックの返値を親の状態へ反映してください。親が更新しない場合、要求された値を勝手に確定しません。
入力や選択を、このサイトが外部へ保存・送信することはありません。リロードをまたぐ永続保存・認証・画像処理・サーバーの検証は利用先の責務です。

## 更新・検証

```sh
npm install
npx playwright install chromium
npm run verify
npm run dev
```

公式React型定義を含む全体チェックは `npm run typecheck`、新しいUIのブラウザー検証は `npm run test:signature` です。今回実際に実行できた検証の範囲は `SIGNATURE-VERIFICATION.md` を参照してください。
