# ボタンとリンク — v3.6.0

通常の操作を実行する24種類のボタンと、行き先へ移動する16種類のリンクです。
ボタンはA16/B8、リンクはA10/B6。CSSの素材感・反射・線・押下・フォーカスを作り分けています。
既存144パーツを残し、合計184パーツになりました。

## 最初に、要素の用途を選ぶ

- 実行、確定、保存、フォーム送信などの操作には `button`。
- ページ移動、ページ内リンク、文書を開くなどには `a` と `href`。

見た目が似ていても、リンクを `div` のクリックや `window.location` の代入で代用しません。
写真を参考にした `Compass Link` は、等幅文字と斜めの矢印を組み合わせたCTAリンクです。

## ボタン：Reactで処理を接続する

以下は導入向けTSXを `components/helios-button/` に置いた例です。パスは利用先に合わせてください。
バックエンドAPIや保存機能は、このライブラリには含みません。

```tsx
'use client';
import {useRef, useState} from 'react';
import HeliosButton from './components/helios-button/HeliosButton';

export function SaveAction({save}: {save: () => Promise<void>}) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const inFlight = useRef(false);

  async function execute() {
    if (inFlight.current) return;
    inFlight.current = true;
    setBusy(true);
    setMessage('保存しています。');
    try {
      await save(); // 利用先の処理を注入。成功した場合だけ完了を表示します。
      setMessage('保存しました。');
    } catch {
      setMessage('保存できませんでした。内容を確認して再度お試しください。');
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }

  return <div>
    <HeliosButton loading={busy} onClick={execute}>変更を保存</HeliosButton>
    <p role="status">{message}</p>
  </div>;
}
```

`children`、装飾用の `icon`、`className`、`style`、`ref`、`onClick` とネイティブbutton属性を受け取ります。
ラベルやアイコンを固定しません。ボタンの中に別のボタンやリンクなどの操作要素を入れないでください。

| プロパティ | 意味 |
| --- | --- |
| `loading` | 操作中の表示。`aria-busy`とスピナーを付け、クリックを抑止しながらフォーカスを保持 |
| `disabled` | ネイティブの無効状態。入力対象外にする場合に使用 |
| `type` | 既定は`button`。フォーム送信は`submit`、フォームのリセットは`reset`を明示 |
| `children` | 操作の目的がわかるラベル |
| `icon` | 装飾アイコン。意味はラベルまたはaria-labelで説明。`false`で内容を空にできます |
| `ref` | 実際のHTMLButtonElementへのref |
| その他の属性 | `name`、`value`、`form`、`formAction`、各イベント等を引き継ぐ |

ビジー状態のガードはボタン自身のクリックに適用します。別の送信経路、祖先のcaptureハンドラー、
プログラムからの `form.requestSubmit()` まで停止する仕組みではありません。
重要な二重送信防止はフォーム・処理側にも実装してください。破壊的処理にはアプリ側で確認・取消を設計します。

## ボタン：通常のHTML/TypeScript/JavaScript

`markup.html`を配置し、`styles.css`を読み込みます。初期化を先に行ってから、利用先のclick処理を接続します。

```ts
import {init} from './helios-button/vanilla/init';

const element = document.querySelector<HTMLButtonElement>('#save-button');
if (!element) throw new Error('保存ボタンが見つかりません。');
const controller = init(element, {loading: false, disabled: false});

// 実際の処理に合わせて呼び出します。
controller.setLoading(true);
controller.setLoading(false);
controller.setDisabled(true);
controller.setDisabled(false);

// 画面を取り外すときに実行。イベントを解除し、初期属性へ戻します。
controller.destroy();
```

ファイルの実パスは、詳細画面の「使い方」と選択したZIPの入口に従ってください。
コントローラーは `setLoading` / `setDisabled` / `getLoading` / `destroy` を公開します。
初期化前でもHTMLのbuttonとして機能し、`destroy`の後にもネイティブ要素が残ります。
リンクへのナビゲーション、ネットワーク処理、保存、削除、トグル状態を自動では実行しません。

## リンク：React

```tsx
import CompassLink from './components/compass-link/CompassLink';

export function NextDetail() {
  return <CompassLink href="/collection" eyebrow="EXPLORE">
    次のディテールを探す
  </CompassLink>;
}
```

- `href`は必須。ページ・実在するページ内アンカー・メール等、目的の移動先へ指定します。
- ネイティブ `a` の `target` / `rel` / `download` / `aria-current` / `ref` / イベントを維持します。
- `target="_blank"`では`noopener`を補い、支援技術向けに「新しいタブで開きます」を付加します。
- `children`は名前、`eyebrow`は任意の補助見出し、`icon`は装飾です。リンク先の意味がラベルだけでも伝わるようにします。
- `disabled`や`loading`を自動付加しません。利用不可の場合は、導入先でリンクを表示しない／非リンクの説明へ差し替える等の情報設計を行います。
- `download`はブラウザーとオリジンの制約に従うネイティブ属性で、あらゆるURLを強制的に保存できるものではありません。

React RouterやNext.js Linkに統合する場合は、利用先のルーターが返す要素を確認してください。
このコンポーネントは `a` を返すため、別の `a` の子には入れません。
ルーターのLinkへクラスとラベル・アイコンの構造を移すか、利用先の正規の構成方法で適合させます。
特定ルーターはパーツの必須依存ではありません。

通常HTMLでは `a`＋CSSだけでも利用可能です。任意の `init(root)` はクリックを横取りせず、
常時イベントや描画処理も持ちません。右クリック、中クリック、修飾キー、Enterはネイティブのままです。
利用者入力からURLを作るアプリでは、許可するURLやプロトコルの検証はアプリ側で行ってください。

## 展示デモと配布パーツの違い

展示ボタンは850msの処理中表示と押した回数を試せます。「実際に保存できた」等の架空の結果は表示しません。
展示リンクには、それぞれのプレビュー内に実在する移動先を用意しています。外部サイトへ自動送信しません。

デモの時間・カウンター・移動先は `src/app/action-preview.ts` に分離し、配布する実行ソースには含めません。
詳細画面の「通常／処理中／無効」は、ボタンを導入した際の状態を確認する操作です。
形式・配置の切替だけではプレビューの状態を破棄しません。

## 見た目の扱い

- ホバー、押下、フォーカス、処理中、無効をデザインしています。
- 新40パーツはCSS中心。Canvas、requestAnimationFrameループ、画像、外部フォント、追加のアニメーションライブラリは不要です。
- 長い日本語ラベルは折り返します。リンク矢印の外向きのホバー移動や角の飾りは意図した表現です。
- `prefers-reduced-motion`と`forced-colors`に代替表現を用意しています。
- スキンごとにルートクラスを限定し、消費側のbodyやすべてのbutton/aへリセットを掛けません。

## 持ち出しと追加開発

TSX/JSX/TS/JSの4形式、「導入向け／元の構成」の2配置を用意しています。
コード表示・保存・ZIP・README・AI用プロンプト・INTEGRATION.jsonは同じ配布モデルから生成します。

ボタンは `src/parts/buttons/`、リンクは `src/parts/links/`。共通のネイティブ処理とビューを `src/shared/` に置き、
パーツごとのCSSと文言・仕様を分離しています。全配布形式のコピーを元リポジトリへ常時展開しません。

```powershell
npm run test:actions
```

専用テストに加え、全体の検証は `npm run verify`。実施済みの環境・未確認事項はVERIFICATION.mdを参照してください。
