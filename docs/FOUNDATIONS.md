# 新規13カテゴリの導入 — v4.0.0 再実装版

ここではv4.0.0の追加分を説明します。元の280パーツのAPIは、各パーツの使い方と既存ドキュメントを参照してください。
以前の未保存v4.0.0ソースからの互換性を保証するものではありません。

## 基本の使い方

### React + TypeScript

「導入向け」「React TSX」でパーツZIPを取得し、パーツ本体のフォルダーを既存のコンポーネント配置へコピーします。
同梱のExample.tsxは使用例であり、アプリのmain/Appへそのまま上書きするものではありません。

```tsx
import {useState} from 'react';
import AuroraRange from './aurora-range/AuroraRange';

export default function Volume() {
  const [value, setValue] = useState(45);
  return <AuroraRange label="音量" value={value} min={0} max={100} unit="%"
    onValueChange={next => { if (typeof next === 'number') setValue(next); }}/>
}
```

`value`を渡すと外部制御、渡さず`defaultValue`を指定すると内部制御です。
外側が変更要求を採用しない場合は、元の確定値へ戻ります。
`onValueChange`の値は共通の `FoundationValue` 型です。数値や配列へ使うときは型を絞り込んでください。
`ref`は外側のdiv、`controllerRef`は公開コントローラーを指します。

コンポーネントは**独立したDOM領域**です。外側のdivをReact、内側をコントローラーが管理します。
初期のHTMLはReact再描画で作り直さず、入力途中の文字・カーソルを保持します。
内側へReactのchildrenを挿入するAPIではありません。label、description、items、content、公開メソッドから変更します。
自由なReactNodeを本文に持つ既存のポップアップ・タブとは、この点が異なります。

### 通常のHTML + TypeScript / JavaScript

ZIPにあるmarkup.htmlを設置し、styles.cssを読み込みます。

```ts
import {init} from './aurora-range/vanilla/init';
const root = document.querySelector<HTMLElement>('.sop-aurora-range');
if (!root) throw new Error('Aurora Rangeを配置してください。');
const slider = init(root, {
  label: '音量', defaultValue: 45, min: 0, max: 100, unit: '%',
  onDataChange(value) { console.log(value); }
});
slider.updateFoundation({min: 10, max: 80, step: 5, unit: '%'});
// 画面から取り外すとき
// slider.destroy();
```

ファイルの配置先は例です。詳細画面のファイルツリーに合わせ、相対import・CSS参照も同時に保ってください。
通常JSのES ModulesはローカルHTTPサーバー経由で読み込みます。
`preview/`はデモ、`examples/`は使用例で、再利用コンポーネント本体の依存ではありません。

## 共通オプションとメソッド

| 名前 | 意味 |
|---|---|
| `label`, `description` | ラベルと補足文。表示・入力のアクセシブルな名前へ使用 |
| `value` / `defaultValue` | 確定値 / 内部制御の初期値 |
| `disabled`, `readOnly`, `required`, `name` | 対応する入力部品の状態とフォーム属性 |
| `onValueChange` (React) / `onDataChange` (Vanilla) | 実際の値を利用先へ通知 |
| `onAction` | 適用・削除などの操作通知。保存・送信の自動処理ではない |
| `getData()`, `setData(value)` | 値の取得／明示的な更新。React外部制御ではpropsを正本にする |
| `updateFoundation(options)` | 候補・上下限・刻み・単位・状態などを更新 |
| `setDisabled(bool)`, `setPaused(bool)` | 操作不可・アニメーション停止の設定 |
| `focus()` | 最初の入力可能な要素へフォーカス |
| `destroy()` | リスナー、タイマー、オーバーレイ、所有するObject URLなどの後片付け |

`readOnly`や`required`などの意味を持たない表示部品には適用されません。
配布コピーごとに識別子のプレフィックスを変えるため、異なるパーツの内部ファイルを同時に持ち込んでもIDが衝突しない構成です。

## 各カテゴリ

| カテゴリ | 主な設定 | 値・操作 |
|---|---|---|
| Slider / Range | min, max, step, unit, range | number、range時は[number,number]。ネイティブrange入力 |
| Radio / 選択カード | items, required | string。項目のvalue/label/description/badge/icon/disabled |
| Combobox | items, multiple, placeholder, loading, error | string / string[]。候補検索、IME、キーボード、show()/hide() |
| Toast | duration, maxNotices | notify(notice), dismiss(id?)。下記参照 |
| Tooltip / Popover | interactive, content, placement | テキスト補足／小さな操作面。show()/hide()、onAction |
| Progress | value, min, max, indeterminate | アプリから渡した値の比率を表示。勝手な疑似進捗なし |
| Loader | content, paused | 待機アニメーションと説明。処理の実行・完了判定はしない |
| File Upload | accept, multiple, maxFiles, maxBytes | File[]。画像プレビュー、削除、FormData、onDataChange |
| Date / Time | mode, minDate, maxDate, isDateDisabled | date / range / datetime / time。ローカル日付・時刻文字列 |
| Pagination | totalPages, hrefForPage | 1始まりのnumber。hrefForPage指定時は本物のリンク |
| Breadcrumbs | items | 各項目のhref。現在位置は最後の項目。長い階層は折りたたみ |
| Badge / Chip | items, selectable, removable | string[]。選択はネイティブcheckbox、削除はonAction |
| Number Input | min, max, step, unit | number / null。編集中のdraftを維持し、blur/Enterで確定 |

`items`は `{ value, label, description?, badge?, icon?, disabled?, href? }` の配列です。
異なる項目には異なるvalueを指定してください。CSSの色や構造はソースから変更できます。

### 通知は、アプリの実結果から発行する

```ts
controller.notify?.({
  title: '保存が完了しました',
  description: '実際に保存が成功した後で発行してください。',
  tone: 'success',
  duration: 5500,
  actionLabel: '確認する',
  onAction: () => { /* アプリの確認処理 */ }
});
```

toneはinfo/success/warning/error。duration:0は自動で消さない設定です。
ホバー・フォーカス・非表示タブでは消去までの残り時間を保持します。
上限を超えた場合は古い通知から除きます。ページの永続的な通知センターではありません。
ギャラリーの「通知を表示」はデモ操作で、保存や送信の成功を偽って実行する処理ではありません。

### 日付とファイルの注意点

日付は `YYYY-MM-DD`、時刻は `HH:mm`、日時は `YYYY-MM-DDTHH:mm`、期間は日付文字列の配列です。
日付文字列をUTCへ勝手に変換しません。時差を含む予定管理は利用先の要件に従って実装してください。

ファイル選択のaccept・サイズ確認はユーザー向けの補助です。サーバーでの検証の代わりにはなりません。
この部品は送信しません。File[]と実際の送信処理を接続します。
DataTransferでFileListを書き換えられないブラウザーでは、getData()/onDataChangeのFile[]を送信時の正本にしてください。

## アクセシビリティ・確認範囲

ネイティブ入力、ラベル、キーボード、focus-visible、prefers-reduced-motion、forced-colorsを使います。
個々の部品の組み込み後も、実際のラベル・候補・配色・エラーメッセージを用途に合わせて確認してください。
合成IMEイベントのテストと、Windows/iOS実IME・スクリーンリーダー実機の確認は別です。
この版の実行結果と未確認項目は `FINAL-VERIFICATION.md` に記載します。
