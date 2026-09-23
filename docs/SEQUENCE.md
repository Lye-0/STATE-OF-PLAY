# SEQUENCE — ページ送りとタグ／チップ（v4.9.0）

## 改修の範囲

ページ送りのAタイプ10種類と、タグ／チップのAタイプ16種類を改修しました。新規追加ではなく既存IDの更新です。総数は25カテゴリ・603種類のままです。Bタイプ、ローダー39種類、その他のパーツ本体は変更していません。

造形は `src/shared/foundation/sequence/skin.ts`、外観は同フォルダーの `style.css`、選択面と退出表現は `motion.ts` にあります。ページ送りの制御は `pagination.ts`、タグは `badges.ts` です。共通の操作・値処理は既存の `foundation/core.ts` を利用します。

### ページ送り

|系統|見た目と操作への反応|
|---|---|
|Aurora|透明な選択膜と背景の屈折層が伸縮する|
|Mercury|刻まれた現在ページ表示と、金属のキャリッジが滑る|
|Nixie|スモークガラスの窓、電極の光、数字の点灯|
|Folio|紙の層と折り目が動き、小さなページ片が移動する|
|Blueprint|寸法線と計測カーソルが動く|
|Prism|選択する面とその周囲の分光層が分かれる|
|Copper|銅箔の継ぎ目が開き、反射が走る|
|Botanical|細い葉脈と有機的な曲面が広がる|
|Velvet|布のひだと縫い目の陰影が変わる|
|Obsidian|黒い板の割れ目に沿って光が移る|

現在値と `aria-current="page"` は操作時に更新し、アニメーション終了を待ちません。番号やクリック対象を変形させず、背後の面だけを動かします。ただしページウィンドウの更新（省略記号や番号の追加・削除）に必要なレイアウト変更は即時に行います。

- `value` / `defaultValue`：現在のページ。1始まり。
- `totalPages`：総ページ数。負数、非有限値などは安全な最小状態へ正規化します。
- `hrefForPage(page)`：指定時はネイティブのリンク。未指定時はボタンです。
- React：`onValueChange(value)`。Vanilla：`onDataChange(value)`。
- `disabled` / `readOnly` / `paused`：操作不可、値の固定、演出停止。

#### Reactで一覧の状態へ接続

```tsx
import { useState } from 'react';
import FolioPages from './folio-pages/FolioPages';

export default function ResultsFooter() {
  const [page, setPage] = useState(1);
  return (
    <FolioPages
      label="検索結果のページ"
      value={page}
      totalPages={25}
      onValueChange={(next) => {
        if (typeof next === 'number') setPage(next);
      }}
    />
  );
}
```

この例はページの状態だけを変えます。データ取得、ローディング、エラー、ルーターは利用先に接続してください。状態管理ライブラリやパスエイリアスを新規導入する必要はありません。

`hrefForPage` を使う場合は、既存のクエリを残してページ値だけを変更するURL生成関数を渡せます。ブラウザーの中クリック、右クリック、修飾キー操作は横取りしません。通常クリックのコールバックは通知であり、移動の成功や新しい現在ページの確定を表すものではありません。リンクを入れ子にしないでください。

### タグ／チップ

16素材（上の10種＋Ceramic、Tide、Aperture、Transit、Relay、Contour）のラベル面がホバー・フォーカス・選択に反応します。大きな先頭マークは標準で置きません。`items[].icon` は任意、`items[].badge` は件数など任意の短い補助情報です。

- 表示だけ：`selectable={false}`、`removable={false}`。
- 複数選択：`selectable` を有効にします。本物のチェックボックスです。
- 削除：`removable` を有効にします。削除ボタンはラベルとは独立しています。
- 選択と削除を両方有効にできます。削除で誤って選択を反転させません。
- 選択値は `string[]`。項目の `value` を安定した一意のキーにします。
- `name` 指定時は選択中の有効なチェックボックスが通常のFormDataへ入ります。
- `value` を渡す外部制御では、選択はvalue、存在する項目はitemsで管理します。

#### Reactで項目の削除も管理

```tsx
import { useState } from 'react';
import AuroraTags from './aurora-tags/AuroraTags';

export default function Filters() {
  const [items, setItems] = useState([
    { value: 'design', label: 'Design', badge: '8' },
    { value: 'motion', label: 'Motion', badge: '4' },
    { value: 'review', label: 'レビュー' },
  ]);
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <AuroraTags
      label="表示するカテゴリ"
      items={items}
      value={selected}
      name="filters"
      selectable
      removable
      onValueChange={(next) => {
        if (Array.isArray(next)) {
          setSelected(next.filter((value): value is string => typeof value === 'string'));
        }
      }}
      onAction={(removed) => {
        if (removed === undefined) return;
        setItems((previous) => previous.filter((item) => item.value !== removed));
        setSelected((previous) => previous.filter((value) => value !== removed));
      }}
    />
  );
}
```

外部制御では、onActionを受け取っただけではタグを消しません。親がitemsを更新して初めて消えます。更新を拒否した場合は、その場に残ります。内部制御では、その場で項目を取り除きます。フォームリセット、または新しいitems配列で復元できます。

削除された入力は即座にDOMから取り除き、近い有効な操作へフォーカスを移します。退出表現には装飾SVGだけを使用し、入力要素や名前を複製しません。タグが0個の場合も状態を表示します。

## 詳細画面

検索で `SEQUENCE` を指定すると今回の26種類を絞り込めます。ページ送りでは総ページ数と先頭／中央／末尾、タグでは表示／選択／削除／両方、長いラベル、復元を試せます。デモ設定はコピーするソースやプロンプトを書き換えません。

## 配布と再配置

TSX／JSX／TS／JS、導入向け／元の構成の両方で必要な共有ファイルを自動同梱します。表示したソース、ZIP本文、PROMPT.mdは同じ正本から生成します。配置先の構造・既存の規約を確認し、フォルダーを移す場合は相対参照も更新してください。

フォームやURLなどの実際の操作を、素材の演出で遅らせません。縮小モーション・強制配色に対応し、ページ非表示・画面外・コンポーネント取り外しで不要なフレーム処理を終了します。新しい外部依存はありません。
