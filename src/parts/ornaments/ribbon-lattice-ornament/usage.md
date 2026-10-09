# Ribbon Lattice Ornament

縦三本と横三本の帯を交差させた織り。反対方向の波が交点を渡る。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import RibbonLatticeOrnament from './RibbonLatticeOrnament';

export default function Example() {
  return <RibbonLatticeOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="ribbon-lattice-ornament"]');
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
三本の縦帯と三本の横帯の格子を保ち、交点ごとに上を通る帯を交互に変える。横帯の透明な下通りが実縦帯を見せ、加算合成や単純な半透明ではなく実重なりで織りを読む。18pxの端を揃え、交差がずれる別位相の平行移動を廃した。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
