# Liquid Glass — 使い方

v4.15.0で追加した最初の4カテゴリ8作品に続き、現在は32カテゴリに64作品が加わっています。計36カテゴリ・72作品を通常のカテゴリ選択とデザインフィルターで表示できます。導入方法は [GLASS-COLLECTION.md](GLASS-COLLECTION.md) を参照してください。

## 実装形式

従来どおりReact TSX/JSX、通常サイト向けTS/JS、導入向け/元の構成を選べます。ZIPには選択したパーツの素材CSS、動作、必要な共通ファイルを含めます。展示の背景は配布物に含めません。

## Reactの基本例

実際のimportパスは取得ZIPの入口と導入先の構成に合わせてください。

```tsx
import { useState } from 'react';
import LensToggle from './lens-toggle/LensToggle';

export function NotificationSetting() {
  const [enabled, setEnabled] = useState(false);
  return (
    <LensToggle
      checked={enabled}
      onCheckedChange={setEnabled}
      aria-label="通知を有効にする"
      material="regular"
      appearance="light"
    />
  );
}
```

```tsx
import PressureButton from './pressure-button/PressureButton';

// busy は実際の保存処理から渡してください。
<PressureButton loading={busy} onClick={save} material="clear" appearance="dark">
  保存する
</PressureButton>
```

```tsx
import FlowTabs from './flow-tabs/FlowTabs';

<FlowTabs
  aria-label="プロジェクト情報"
  material="regular"
  appearance="light"
  items={[
    { value: 'overview', label: '概要', content: <Overview /> },
    { value: 'notes', label: 'メモ', content: <textarea aria-label="メモ" /> },
  ]}
/>
```

```tsx
import BloomSelect from './bloom-select/BloomSelect';

<BloomSelect
  label="並び順"
  name="sort"
  value={sort}
  onValueChange={setSort}
  items={[
    { value: 'updated', label: '更新日時' },
    { value: 'name', label: '名前順' },
  ]}
  appearance="dark"
/>
```

上の識別子は説明用で、実際のフォルダー名と入口は各パーツの「使い方」に表示します。既存アプリ入口へExampleをそのまま上書きしないでください。

## 共通オプション

| プロパティ | 値 | 意味 |
| --- | --- | --- |
| material | clear / regular / solid | 背景の透過とぼかし。clearは透明、regularは読みやすさ重視、solidは不透明 |
| appearance | auto / dark / light | 文字と素材の濃淡。autoはOS配色。背景解析ではない |
| optics | standard / refractive | 通常CSS。refractiveはChromium向けの任意のSVG縁変位 |
| paused | boolean | 装飾の動きを止める。値の変更は継続 |

A作品のmaterial初期値はclear、Bはregular。Reactのappearance初期値はauto。同梱の通常HTML例はdarkを明示しています。

## 通常HTML / JavaScript

選択した版のmarkupとCSSを配置し、同梱のinitを呼びます。TS版は利用先のビルド環境で変換してください。

```ts
import { init } from './vanilla/init';

const root = document.querySelector<HTMLElement>('.sop-lg-lens-toggle');
if (!root) throw new Error('通知設定のトグルが見つかりません。');
const control = init(root, {
  material: 'regular', appearance: 'light',
  onCheckedChange(value) { console.log('notification:', value); },
});
control.updateGlass({ material: 'solid' });
// コンポーネントを取り外すとき:
// control.destroy();
```

各initの設定型はその部品の設定とGlassOptionsの積です。タブのitemsなどは通常HTML版ではDOMとして置き、既存のrefresh等を使います。

## 展示背景と素材設定

詳細欄の背景ドットは展示用の風景だけを切り替え、入力値やタブ本文を作り直しません。素材・文字配色・停止・任意の屈折は取得したコードのprops/optionsから導入先で指定してください。

## 任意の屈折

`optics="refractive"` は一部Chromiumで縁を曲げる追加表現です。表示を確認してから有効にしてください。既定では無効で、他のエンジンやforced-colorsなどでは標準へ戻ります。data:画像を許可しないCSPならstandardのまま使います。全画面キャプチャ、外部画像の取得、ネットワーク送信はしません。

## 更新

現行リポジトリへの統合では、カテゴリ別読み込みと既存の装飾・ローダーの構成を維持しました。依存パッケージの指定は変えず、ロックファイルのルートバージョンをv4.16.0へ合わせています。

提供元が報告した装飾init.tsの二重波括弧は、現行リポジトリでは既に修正済みでした。装飾のCSS・マークアップと見た目は変更していません。

設計の根拠と構造: `LIQUID-GLASS-DESIGN.md`。残りの導入順: `LIQUID-GLASS-ROADMAP.md`。検証済み範囲: `LIQUID-GLASS-VERIFICATION.md`。
