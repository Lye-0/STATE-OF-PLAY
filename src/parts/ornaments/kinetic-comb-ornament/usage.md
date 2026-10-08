# Kinetic Comb Ornament

一本の軸に差した櫛の羽が波を伝える。独立した六本の棒ではなく、支点を共有する立体。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import KineticCombOrnament from './KineticCombOrnament';

export default function Example() {
  return <KineticCombOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="kinetic-comb-ornament"]');
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
