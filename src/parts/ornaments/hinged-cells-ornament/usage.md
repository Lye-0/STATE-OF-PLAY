# Hinged Cells Ornament

六枚を一組にした開閉パネル。隣り合う面が交互に回り、壁面と開口を切り替える。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import HingedCellsOrnament from './HingedCellsOrnament';

export default function Example() {
  return <HingedCellsOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="hinged-cells-ornament"]');
if (element) {
  const controller = init(element, { paused: false });
  controller.setPaused(false);
}
```

## メモ

- 装飾専用なので `aria-hidden="true"` 前提です。
- CSSアニメーションで図形を動かします。
- `paused` / `data-paused` でアニメーション停止に対応します。
- 配色と図形の寸法は、この部品の `styles.css` で調整できます。

## 後片付け

通常DOM版では取り外すときにcontroller.destroy()を呼びます。React版はpausedを渡して停止できます。表示する図形はaria-hiddenの装飾で、重要な状態をこのパーツだけで伝えません。

<!-- design-renewal -->
独立に回る六つの小箱を廃し、六枚の板が実際の端を共有して折れる一つの屏風へ再構成する。共通の蝶番角から各板のx/zと回転を計算し、隣の端を同じ三次元位置へ接続する。平らな明暗の表裏・厚い小口と蛇腹の奥行きが主形となり、hoverの別回転は使わない。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
