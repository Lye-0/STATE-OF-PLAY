# チェックボックスとポップアップ

v3.8.0で追加した、24種類ずつのUIです。各カテゴリはA（表現重視）16種類、B（実用重視）8種類。
既存の232パーツは維持し、合計280パーツです。

## チェックボックス

`input[type=checkbox]`と実際の`label`を使います。ON/OFFトグルやラジオボタンへの置き換えではなく、複数の項目を独立に選ぶための部品です。複数選択を組み込むときは、フィールドセットとレジェンドでグループ名を付け、各入力へname/valueを指定します。

ラベルのクリック・Space・フォームの送信値・disabled/requiredはネイティブの動作です。チェックと一部選択（indeterminate）は別の状態です。一部選択は見た目の集計状態であり、第三の送信値ではありません。クリックするとブラウザーが解除します。「一部選択→未選択→選択」のような3状態の循環を強制する実装ではありません。

### React（導入向けの例）

```tsx
import {useState} from 'react';
import AuroraCheck from './aurora-check/AuroraCheck';

export function NotificationSettings() {
  const [enabled, setEnabled] = useState(false);
  return <AuroraCheck
    label="更新を受け取る"
    description="新しい作品が届いたときに通知します。"
    name="notifications"
    value="updates"
    checked={enabled}
    onCheckedChange={setEnabled}
  />;
}
```

`checked`を省略して`defaultChecked`を指定すれば内部制御です。`indeterminate` / `defaultIndeterminate`と`onIndeterminateChange`で一部選択を扱えます。`onChange`も通常のReact入力イベントとして受け取れます。`ref`は実際のinputへ渡します。`aria-invalid`、`aria-describedby`、`form`、`disabled`なども入力へ渡せます。

`className`と`style`は外側のlabelに適用します。ラベル・説明・バッジはReactNodeですが、label内にリンクや別のボタンを入れず、規約リンクなどはチェックの外側へ置いてください。ラベルのデフォルトは汎用の「選択する」で、用途に合った具体的な文言を指定します。

フォームをresetしたときは初期値への変更を通知します。制御する親が更新を拒否した場合は親のchecked/indeterminateを維持します。初期値変更でresetの基準まで変更したい場合は再マウントするか、利用先で基準を管理してください。

### 通常HTML / TypeScript

`markup.html`のlabelを配置してCSSを読み込み、`init(root, options)`を実行します。rootはこの部品のlabelです。

| API | 内容 |
| --- | --- |
| `setChecked(boolean)` / `getChecked()` | 選択状態の設定・取得 |
| `setIndeterminate(boolean)` / `getIndeterminate()` | 一部選択の設定・取得 |
| `setDisabled(boolean)` | ネイティブinputの無効状態 |
| `refresh()` | 外側からinputを更新した場合の展示状態同期 |
| `destroy()` | イベントを解除し、生成した説明IDを後片付け |

コントローラーの初期optionsには`checked`、`indeterminate`、`disabled`、`onCheckedChange`、`onIndeterminateChange`を指定できます。通常HTMLでは本物のinputが選択を管理します。親による制御が必要なReact版とは別の契約です。

Consent Checkの使用例は、利用者が自分で選べるよう未選択から開始します。

JSを初期化する前でも、通常のチェック操作・CSSの選択表示は使用できます。一部選択の初期化やコールバックが必要な場合に初期化処理を読み込みます。

## ポップアップ

このカテゴリは、**同じページ上に開くモーダルダイアログ**です。別のブラウザーウィンドウを開く`window.open`、ツールチップ、常時通知トーストの実装ではありません。中央の窓のほか、右側ドロワーと下側シートも含みます。

実際の`dialog.showModal()`でブラウザーのトップレイヤーに表示します。内容をbodyへ移し替えないため、Reactが所有するDOMを別の場所へ移動する問題を避けています。CSSの形状を変えても、モーダルとしての操作を共有します。

### React

```tsx
import {useState} from 'react';
import AuroraWindow from './aurora-window/AuroraWindow';

export function DraftDialog() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  return <AuroraWindow
    title="アイデアを残す"
    description="内容を確認してから閉じてください。"
    triggerLabel="下書きを開く"
    open={open}
    onOpenChange={setOpen}
    footer={<button type="button" data-popup-close="done">閉じる</button>}
  >
    <label>メモ
      <textarea value={draft} onChange={event => setDraft(event.target.value)}/>
    </label>
  </AuroraWindow>;
}
```

タイトルは必須です。`description`、`kicker`、`triggerLabel`を変更できます。`children`が本文、`footer`が下部の操作です。外側のコンポーネントを取り外さない限り、閉じても本文はアンマウントしません。入力値や子コンポーネントの状態を保持します。**これは閉じたときのメモリー上の保持であり、リロード後の永続化・サーバーへの保存ではありません。**

`open/onOpenChange`は制御モードです。`open`を省略し`defaultOpen`を指定すれば内部制御です。親が開閉要求を拒否すれば、現在のopenを維持します。

`onClose(reason)`は閉じ終わった後の通知です。理由は`close`、`cancel`、`confirm`、`escape`、`backdrop`、`form`、`programmatic`、または独自ボタンの文字列です。保存の検証に失敗した場合に開いたままにする必要があるときは、**制御openと独自footerのハンドラー**で保存完了を確認してから閉じてください。自動で閉じる`data-popup-close="confirm"`を非同期保存の完了判定の代わりにしないでください。

### 通常HTML / TypeScript

root直下の開くボタンとdialogを配置してから、`init(root, options)`を実行します。

| API / option | 内容 |
| --- | --- |
| `setOpen(boolean)` / `getOpen()` | 表示の要求状態を設定・取得 |
| `setDisabled(boolean)` | 開くボタンを無効化。開いた窓の閉じる操作は維持 |
| `updateOptions(options)` | 背景クリック・Escape・コールバック等を更新 |
| `closeOnBackdrop` / `closeOnEscape` | 標準はtrue。フォーム等で必要ならfalse |
| `onOpenChange` / `onClose` | 要求された開閉 / 閉じ終わった理由 |
| `destroy()` | 閉じる、タイマー・イベント解除、スクロールロック解放 |

`data-popup-title`の見出しをaria-labelledbyへ結びます。必要なら任意のフォーカス可能な要素へ`data-popup-initial-focus`を設定できます。標準では見出しから読み始める構成です。閉じるボタンは`data-popup-close="理由"`を指定します。

`form method="dialog"`の送信は閉じる要求として扱います。通常のformは利用先がsubmitを管理してください。JSでクリックを疑似送信へ変換する処理やサーバーへの通信は含みません。

### フォーカス・動作

- 開いた窓内でTab/Shift+Tabを巡回させ、閉じたら開いた要素へフォーカスを戻します。実際のスクリーンリーダーの読み上げ確認は導入先でも実施してください。
- Escapeや背景クリックで閉じられます。本文から背景へドラッグした操作を背景クリックと誤認しないようにします。
- 閉じるアニメーション中もトップレイヤーとスクロールロックを維持します。動きを減らす設定では即座に閉じます。
- 独立に書き出したパーツを同じ文書へ複数配置しても、同一文書内のロック数を共有します。上の窓だけ閉じた段階で下の窓のロックを解除しません。
- ギャラリー詳細画面から開いても、その下の詳細画面のフォーカス処理とは分離します。
- dialog対応の現行ブラウザー向けです。古いブラウザーのダイアログpolyfillは同梱しません。非モーダル表示へ無言でフォールバックさせません。

## デザインされた内容の扱い

ガラスの紹介、天体観測、紙面のノート、パレット選択、案内、設定チェック、入力フォームなどは、実際のHTML/React要素です。値を入力・選択できますが、送信・保存・検索サービスは実装しません。利用先のAPIやアプリケーション状態へ明示的に接続してください。

AタイプのCSSアートは画像ファイルに依存しない装飾です。`pp-*`クラスはパーツ内でスコープされた任意の本文用プリミティブです。別の本文に交換できます。使用例は`examples/`に、デモ専用の縮小見本はギャラリー実装に分離し、持ち出す本体へサムネイル生成を含めません。

## 検証

専用スイートは`npm run test:check-popup`、全体は`npm run verify`です。通常は実Viteを起動し、npmで取得したReact/Playwrightを使います。今回の作成環境の制約と実行範囲は[VERIFICATION.md](VERIFICATION.md)を参照してください。
