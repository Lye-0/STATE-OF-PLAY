# タブとセグメントコントロール（v3.7.0）

タブ24種類、セグメント24種類。各カテゴリはA16種類・B8種類です。
展示は3項目ですが、実装は項目数を固定していません。2・4・5・7項目以上へ変更できます。

## 何を切り替えるか

| パーツ | 意味 | HTML |
| --- | --- | --- |
| タブ | 同じ画面の中で、対応するコンテンツを切り替える | tablist / tab / tabpanel |
| セグメント | 複数の候補から、設定値を1つ選ぶ | 実際のinput type=radioとradiogroup |

セグメントはON/OFF専用スイッチでも、同時に複数をONにするチェックボックス群でもありません。期間・表示モード・サイズなどに向いています。選択値を使ったデータ取得、保存、URL同期は導入先へ接続してください。このライブラリはその処理を勝手に実行しません。

## 2択・4択へ変える

導入向けZIPのコンポーネントフォルダーを、プロジェクトの既存の置き場所へ移します。下のimportは配置例です。実際の置き場所に合わせて変更してください。

```tsx
'use client';
import { useState } from 'react';
import EssentialSegments from './essential-segments/EssentialSegments';
import EssentialTabs from './essential-tabs/EssentialTabs';

const periods = [
  { value: 'week', label: '週' },
  { value: 'month', label: '月' },
];

// タブも、配列の項目数だけ表示されます。本文は自由なReactNodeです。
const sections = [
  { value: 'overview', label: '概要', content: <p>全体の概要です。</p> },
  { value: 'details', label: '詳細', content: <p>詳細情報です。</p> },
  { value: 'notes', label: 'メモ', content: <label>メモ<input defaultValue="" /></label> },
  { value: 'history', label: '履歴', content: <p>変更履歴です。</p> },
];

export default function Example() {
  const [period, setPeriod] = useState('week');
  return <>
    <EssentialSegments
      items={periods}
      value={period}
      onValueChange={setPeriod}
      aria-label="表示期間"
      name="period"
    />
    <EssentialTabs items={sections} defaultValue="overview" aria-label="設定の内容" />
  </>;
}
```

表示項目は配列から描画します。選択マーカーは実際の要素サイズを計測し、`33.333%`や3番目までの固定CSSを使いません。多いタブは横方向へスクロールできます。横並びのセグメントは幅に応じて折り返し、選択マーカーも次の行へ移動します。縦並びも選択できます。

ラベルの長さやフォント変更、ウィンドウサイズ変更にも追従します。長い単語のタブラベルは一文字ずつ縦積みにせず、タブストリップ側をスクロールします。

## 共通API

| 属性 | 内容 |
| --- | --- |
| `items` | 項目配列。`value`と`label`が必須。`value`は重複しない空でない文字列 |
| `value` / `onValueChange` | 外部から制御する選択値と、ユーザー操作による変更要求 |
| `defaultValue` | 外部制御しない場合の初期値 |
| `disabled` | 切り替え全体を無効化する |
| `items[].disabled` | 特定の候補を無効化する |
| `orientation` | `horizontal`（初期値）/ `vertical` |
| `className` / `style` / `aria-label` | 外側のレイアウト調整、グループの目的 |
| `dir` | ルートまたは祖先で`rtl`を指定可能 |

項目の削除や並べ替えは配列を更新するだけです。Reactのキーは添字ではなく`value`なので、並べ替えで別の項目に選択が移ることを避けます。

選択済みの値が削除・無効になった場合、最初の有効な項目を表示します。外部制御では、親の選択値も新しいitemsへ合わせて更新してください。この自動フォールバックだけで`onValueChange`を発火することはありません。全項目が無効または空配列なら選択値は空になり、空配列時は案内文を表示します。

空の識別値、重複する識別値、空のラベルは初期化・描画時にエラーにします。意図しない選択先で黙って動作させないためです。

## タブ固有APIと操作

`items[].content`はパネルの本文（ReactNode）です。ラベルと別に表示されるため、入力欄、ボタン、画像、グラフなどを置けます。`icon`と`badge`は任意です。ラベル内へ別のボタンやリンクを入れないでください。

- 横方向は左右キー、縦方向は上下キー。Home/Endで先頭/末尾。有効な項目だけ移動します。
- `activation="automatic"`（初期値）は矢印で選択と本文を切り替えます。
- `activation="manual"`は矢印でフォーカスだけ動かし、Enter/Spaceで本文を切り替えます。表示に時間がかかる用途ではmanualが適しています。
- Tabキーはタブ列の代表項目と本文などへ移動します。各見出しは`type="button"`なのでフォームを送信しません。
- パネルは切り替えでアンマウントせずhiddenで隠します。入力値などの状態を保持し、非表示の内容へフォーカスが入り込みません。

非表示の子コンポーネントをアンマウントしないため、その子が独自に実行するタイマーや動画を自動停止する機能ではありません。重い子の処理は利用先で選択値に合わせて止めてください。標準ではURLやブラウザー履歴を書き換えません。

## セグメント固有APIと操作

`items[].icon`、`items[].description`は任意です。名前、説明、アイコンは表示用で、実際に送信される値は`items[].value`です。

`name`、`form`、`required`をネイティブradioへ渡せます。`name`はフォームに必要なフィールド名を利用先で指定してください。省略した場合は個体ごとに別名が生成され、他のセグメントの選択を解除しません。意図せず同じフォームで同じnameを共有しないでください。

矢印キーとSpaceはネイティブradioの動作を維持し、Home/Endを補助しています。ブラウザーの実際のFormDataに選択値が入り、無効なradioは送信されません。

フォームresetで非制御の選択は初期値へ戻ります。制御されている場合はリセットの変更要求をコールバックへ通知し、親が更新しなければ親の値を保持します。ネイティブのresetが取り消された場合は変更しません。

全候補から必ず1つ選ぶ部品なので、有効な候補がある場合は未選択を初期状態として保持しません。未回答を選ばせたいフォームでは、別の入力UIを使うか、明示的な「指定なし」候補を用意してください。

## 通常のHTML/JS/TS版

ZIPにあるmarkupと対応パネルを配置し、`init(root, options)`で初期化します。TS版は導入先で変換してください。

```ts
const root = document.querySelector<HTMLElement>('.sop-essential-tabs');
if (!root) throw new Error('タブを配置してください。');
const control = init(root, {
  value: 'choice-1',
  onValueChange(value) { console.log('利用先の状態に接続:', value); },
});
control.setValue('choice-2');
// 項目と本文DOMを追加/削除/並べ替えた後:
control.refresh();
// 取り外すとき:
control.destroy();
```

両カテゴリに`getValue / setValue / refresh / setDisabled / setOrientation / destroy`があります。タブの見出しの`data-choice-value`とパネルの`data-panel-value`を一致させます。セグメントではinputのvalueとラベルのdata-choice-valueを一致させます。追加する項目はIDやradio名をコピーせず、必要に応じて初期化処理に付与させてください。

独立ZIPを複数取り込んだ場合も、各実装ファイルが持つローカルカウンターだけに依存せず、個体固有のID/名前を生成します。元のプロジェクトに存在する汎用共有ファイルを無条件に上書きしません。

## ギャラリーだけの機能

初期展示は3項目です。詳細で2・3・4・5・7項目、縦/横、無効状態を試せます。
この項目数変更は確認用であり、ZIP内の使用例は3項目です。取得したコードのitemsまたはHTMLを編集して、実際の項目数と内容を指定します。形式・配置を変更しても、動作プレビューの現在の選択はリセットしません。

展示の本文、ノート、数値、カウンター、項目数設定は再利用コンポーネントの固定データではありません。プレビューのメモや選択値を保存・送信しません。

## 配布と検証

TSX/JSX/TS/JS、導入向け/元の構成、コード表示、使い方、AI用プロンプト、フォルダー構成を保持するZIPに対応します。プロンプトは導入先のitems/状態/フォーム/本文へ接続し、デザインを別の簡単な部品へ置換しない内容です。

`npm run test:selection`で専用確認、`npm run verify`で全体確認を実行します。実施済み範囲と環境の制限は[VERIFICATION.md](VERIFICATION.md)を参照してください。
