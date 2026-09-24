# CONTINUUM — 進捗・ファイル選択・日時・ローダー / v4.8.0

## 対象とデザイン

進捗A16種、ファイル選択A13種、日時選択A13種を改修。ローダーA8種・B8種を新規追加。
既存24ローダーの240ファイルは前版と同一です。その他のカテゴリとBのパーツ本体は維持しています。
全体604種、25カテゴリ。各パーツのIDと場所は `CONTINUUM-PARTS.json` に記録しています。

`src/shared/foundation/continuum/` のTS/CSS/SVGが操作に連動する表示を実装しています。
元ソースがギャラリー・コード表示・4形式の配布パッケージの正本です。
生成済みpackagesを全種類リポジトリへ展開する必要はありません。

## 値と演出の分離

### 進捗表示

`value / min / max / indeterminate / paused / label` を指定できます。
`value` はアプリの実際の処理から渡してください。ネイティブ `progress` の値と見える数値は同期的に変わります。
ガラスの水位、紙の折り目、シャッター片などはその状態へ短い物理的な余韻を付けて追従します。
負数、小数、上下限の動的変更にも対応。非数値や退化した範囲は有限の範囲へ正規化します。

`indeterminate: true` は実際のprogressからvalue属性を外し、数値を「—」にします。
未知の処理を自動で増加する疑似パーセントに置き換えません。100%に達した表示も、サーバー保存の成功を保証する意味ではありません。
「進行中／上限に到達」などと、実際の業務上の成功・失敗は分けて扱ってください。

```tsx
import TideProgress from './components/tide-progress/TideProgress';
// percentは実際の処理から受け取った値。
<TideProgress label="書き出しの進捗" value={percent} min={0} max={100} />
```

### ファイル選択

`File[]` を選択するUIです。ファイルダイアログ、実際のドラッグ＆ドロップ、フォームのFormDataに対応します。
`accept / maxBytes / maxFiles / multiple / name / disabled / readOnly / placeholder` を変更できます。
件数・サイズ・形式・重複を確認し、無効なファイルへの入れ替えで有効な単一選択を消さないようにしています。
ファイル行はFileオブジェクトをキーに維持し、ラベル等の変更で全行を作り直しません。
PNG/JPEG/WebP/GIF/AVIFのプレビューURLは、削除・リセット・取り外しで解放します。

選択済み表示は「未送信」です。ネットワーク送信、自動保存、疑似アップロード進捗は実装しません。
ローカルファイルの内容をコンポーネントが外部へ送ることはありません。
形式・サイズのクライアント側確認は、送信先のサーバーによる検証の代わりではありません。

```tsx
import FolioDropzone from './components/folio-dropzone/FolioDropzone';
<FolioDropzone
  label="添付ファイル" placeholder="資料を選択"
  name="attachments" multiple accept=".pdf,.txt,image/png"
  maxBytes={10 * 1024 * 1024} maxFiles={5}
  onValueChange={value => {
    // 利用先でFile[]の型を確認し、保存ボタンなどの実処理へ渡します。
    const selected = Array.isArray(value) ? value.filter((item): item is File => item instanceof File) : [];
    setSelectedFiles(selected);
  }}
/>
```

### 日付・日時・時刻

`mode: 'date' | 'range' | 'datetime' | 'time'`、`minDate / maxDate / isDateDisabled / name` を利用できます。
日付文字列はローカルの `YYYY-MM-DD`、日時は `YYYY-MM-DDTHH:mm`、時刻は `HH:mm`。
期間は日付文字列2個の配列です。勝手にUTCへ変換しません。

カレンダーでは背景が開き、月移動で紙の面・光が変わります。日付セルの座標と文字は固定です。
確定済みの期間は実際のセル位置から測った連続帯で示します。選んでいない日付を確定済みのようには描きません。
6行×7列の実際のボタン、矢印・Home/End・PageUp/Down、無効日、画面端での配置、ネストしたdialog、Escapeの復帰に対応します。
v4.10.10以降は、4モードともテキスト欄と独自の選択パネルを使います。日付欄や選択ボタンから同じカレンダーを開き、`time` と `datetime` では時・分の選択面を表示します。ブラウザー標準の日時ピッカーは開きません。時刻を直接入力する場合は `HH:mm`（例：`14:30`）を使えます。
モード変更やreadOnlyへの変更でも開いたカレンダーを残さず、フォームのリセットを反映します。

```tsx
import FolioCalendar from './components/folio-calendar/FolioCalendar';
<FolioCalendar label="利用期間" mode="range" name="period"
  value={period} minDate="2026-09-01" maxDate="2026-12-31"
  onValueChange={setPeriod} />
```

### 新しいローダー

既存ローダーは変更しません。Aは軌道・立方体・液滴・紙・食・振り子・二重螺旋・絞り花弁の8種類。
Bはリング・3点・パルス・線・目盛り・短いバー・公転する点・角丸の輪郭の8種類です。
Bの通常サイズは約30pxを中心にし、線のタイプは128×30pxの浅い領域です。大きな装飾枠はありません。

`content` は状態を説明するテキスト、`paused` は見た目の一時停止です。
一時停止を「処理が完了した」と誤って読み替えません。完了時は利用先がローダーを取り外し、結果を表示してください。
`style` のCSS変数 `--ld-size` などで必要に応じて調整できます。
通常Bは `currentColor` を使い、明るい画面にも合わせやすくしています。

```tsx
import ArcSpinnerLoader from './components/arc-spinner-loader/ArcSpinnerLoader';
<ArcSpinnerLoader content="データを読み込んでいます…" paused={paused} />
```

新ローダーはCSSアニメーションです。JavaScriptのRAF/intervalによる常時描画は行いません。
IntersectionObserver、ページ可視性、縮小モーション、pausedの状態に合わせ、子要素と擬似要素のアニメーションも止めます。

## 通常のHTML / TypeScript

選択したパーツZIPのmarkupを配置し、同梱styles.cssを読み込み、`init(element, options)`を呼び出します。

```ts
import { init } from './tide-progress/init'; // 実際のZIP内の入口に合わせます。
const element = document.querySelector<HTMLElement>('[data-progress-part]');
if (!element) throw new Error('Progress root was not found.');
const controller = init(element, { value: 0, min: 0, max: 100 });
controller.setData(65);
// 画面や部品を取り外すとき:
controller.destroy();
```

上のimportは例です。実際のパスは各ZIPのINTEGRATION.json/READMEを基準にしてください。
相対importを維持したフォルダー移動、または利用先の構造へ適応させたパス更新が必要です。
`controllerRef`から同じ `setData / updateFoundation / setPaused` をReactで呼び出せます。
Reactの制御モードでは外側がvalueを更新する責任を持ちます。

## 使い勝手と後片付け

ドラッグ中でもラベルや本文のクリック位置は動きません。SVGは装飾用でaria-hidden、実際の入力と値はHTMLです。
アニメーションは画面外・非表示・縮小モーションで停止し、Observerとイベントを取り外し時に解除します。
この版では旧Atelierの装飾が新CONTINUUM/RESONANCEへ入り込むことも防ぎ、既存DRIVEの優先順位を安定させました。
既存546パーツの本体5,460ファイル、既存ローダー24種の240ファイルは変更していません。

## 開発・配布

`npm run dev` / `npm run build` / `npm run verify` の手順は維持しています。
パーツZIP・コード表示・AIプロンプトは同じ依存解析と配置変換を使います。
CONTINUUMの必要なCSSと描画コードは、取得したパーツZIPに含まれます。
新しいnpm依存はありません。実行できた検証の範囲はCONTINUUM-VERIFICATION.mdを確認してください。
