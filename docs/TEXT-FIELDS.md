# 入力可能なテキストボックス — v3.5.0

24種類（A16／B8）。入力面・ラベル・補足文・フォーカス・エラー・読み取り専用などを一組のパーツとして扱います。単行の入力、検索、メール、パスワード、複数行のメモを収録しています。見た目はCSS、編集は本物の`input`／`textarea`です。

## 選ぶ・試す

ギャラリーの「テキストボックス」を選ぶと、全24種類へ直接入力できます。入力欄、クリア、表示切替の操作では詳細画面を開きません。余白・CODEボタンから詳細へ進みます。

詳細の「例文を入れる」「リセット」「通常／エラー例／成功例」「無効」「読み取り専用」で見た目を比較できます。成功例は表示テストであり、自動で入力の正しさや安全性を判定した結果ではありません。配布形式や配置を変えてもプレビューの入力値は保ちます。

展示サイトは入力をサーバーやストレージへ保存しません。ページ再読み込みやカテゴリの切替でデモが作り直されると消える一時的な値です。実際のパスワードや個人情報ではなく例文でお試しください。検索欄も入力UIの見本で、アプリの検索機能は実装しません。Terminal Fieldの入力をコマンドとして実行することもありません。

## Reactへの導入

詳細画面の「導入向け」を選び、ZIP内のパーツ本体フォルダーを自分のコンポーネント配置へ移します。`internal/`とCSSを一緒に配置し、`examples/`は参考にします。既存のAppやmainへそのまま上書きする必要はありません。React本体は利用先で用意します。

```tsx
import {useState} from 'react';
import AuroraField from './components/ui/aurora-field/AuroraField';

export default function ProjectName() {
  const [name, setName] = useState('');
  return <AuroraField
    label="プロジェクト名"
    name="projectName"
    value={name}
    onValueChange={setName}
    description="後から変更できます。"
    placeholder="プロジェクトの名前"
    maxLength={120}
    showCount
    clearable
    required
  />;
}
```

入力された値を、イベント内でそのまま同期反映します。表示値の更新をdebounceしたり、IMEの途中で勝手に切り詰めたりしないでください。検索や非同期検証だけを別途遅延させることはできます。

`defaultValue`を使う非制御モードもあります。この場合、React内に入力値の二重コピーを作らずネイティブ入力へ任せます。通常の`onChange`を使うフォームライブラリ、`onInput`／`onBlur`／`onCompositionEnd`等にも接続できます。ネイティブ要素を取得するには`inputRef`を使います。

| API | 用途 |
|---|---|
| `label / description / placeholder / caption` | 項目名、補足、未入力時の例、任意の補助ラベル。本文は本体に固定しません。 |
| `value / defaultValue` | 制御する値／非制御の初期値。制御モードは常に文字列とし、途中で切り替えません。 |
| `onValueChange(value)` | そのままの入力文字列。変換途中にも発火します。 |
| `onChange(event)` | 通常のReact入力イベント。`onValueChange`と両方を指定した場合は両方呼び出します。 |
| `name / form / required / autoComplete` | ネイティブフォームと補完へ接続する属性。 |
| `type` | text/search/email/url/tel/password。検索・認証のバックエンドを作るものではありません。 |
| `disabled / readOnly` | 編集不可の2種類。disabledはフォーム送信から除外、readOnlyは値の選択・コピー・送信を保持。 |
| `error / validateOnBlur / success` | 独自のエラー文、任意の標準制約検証の表示、利用先が指定する成功表示。 |
| `multiline / rows / autoGrow` | textareaへの切替、行数、高さの自動調整。切替でネイティブ要素が交換されるため、値の保持が必要なら制御モードを使います。 |
| `clearable / showCount / maxLength` | クリア、カウンター、標準の入力上限。 |
| `prefix / suffix` | 装飾的な接頭辞／単位。実際のvalueへ混ぜません。重要な意味はdescriptionにも記載します。 |
| `inputRef / id / aria-* / inputMode` | フォーカス・キャレット・外部フォーム・アクセシブルな名前への接続。 |
| `className / style` | 外側のパーツ本体へ適用。その他のネイティブイベント・属性は入力要素へ渡します。 |

`error`はテキスト、aria-invalid、native customValidityへ接続し、空文字で解除します。`validateOnBlur`は任意で、type/required/pattern/minLengthなどのネイティブ制約を使います。エラー文をサーバー検証の結果と接続する場合、その結果は利用先で管理してください。成功表示は暗号化やパスワード強度の判定ではありません。

## HTML / TypeScript / JavaScript

`markup.html`にある構造を配置し、CSSを読み込みます。TS版は利用先のビルド環境で変換、JS版はES Modulesとして読み込みます。

```ts
import {init} from './essential-field/vanilla/init';

const root = document.querySelector<HTMLElement>('#profile-name');
if (!root) throw new Error('入力パーツがありません');
const field = init(root, {
  onValueChange(value) {
    // このアプリの状態へ接続する。秘密情報をログへ出力しない。
    void value;
  },
});
field.setValue('外部で取得した値');
field.setError('');
// rootを画面から取り外すときに実行します。
// field.destroy();
```

このimportは導入向けTS版の例です。選んだ形式のコード画面・使用例に表示される実パスを使ってください。

`controller.getValue()`、`setValue(value)`、`setError(message)`、`focus()`、`refresh()`、`destroy()`を提供します。`setValue`は外部更新なのでユーザー入力コールバックを発火しません。直接`.value`を代入した場合や、外部のフォームライブラリで値を更新した後は`refresh()`でカウンター等を同期できます。フォームの通常resetと取消されたresetを区別します。

初期マークアップの入力自体は、初期化前でも編集できます。JavaScriptはlabel/idの個体別関連付け、カウンター、クリア、表示切替、自動高さ、エラー表示を追加する層です。固定IDは複製せず、作者がidを指定した場合は利用先で一意にします。

## 入力中に守ること

- IMEのstart/input/endを見ながら装飾状態を更新しますが、keydown/beforeinput/pasteを横取りしません。変換中のクリア・パスワード表示切替を無効化します。OS実機のIMEと合成イベントテストは別です。
- 矢印による移動、選択、コピー／貼り付け、Undo/Redoはブラウザーの通常入力へ任せます。フレームごとのvalue上書きやcontenteditableは使いません。
- カウンターはネイティブmaxLengthと同じUTF-16コード単位です。見た目の1文字・絵文字・結合文字と数が一致するとは限りません。毎打鍵の読み上げは行いません。
- 自動高さは`--sop-field-max-height`（px、標準280）で止まり、それ以上は内部スクロールです。`autoGrow={false}`で手動リサイズもできます。
- クリア・パスワードの表示切替は`type="button"`です。フォームを意図せず送信しません。readOnlyの値やIME未確定文字列を壊しません。
- 入力値はtext/valueとして扱い、innerHTMLへ挿入しません。ランタイムにネットワーク送信・localStorage・Cookie・自動ログ出力はありません。
- 装飾は入力を妨げないレイヤーに分け、通常のテキストは16px以上、フォーカスを見える状態にします。prefers-reduced-motionとforced-colorsに対応します。

## テスト

`npm run test:textfields`で24スキン、制御/非制御React、4形式の元/導入向け配置、フォーム、reset、クリア、readOnly/disabled、長文、自動高さ、合成IME、スマホ幅、後片付けを検証します。実際に行った検証と未実施の環境は`VERIFICATION.md`を参照してください。
