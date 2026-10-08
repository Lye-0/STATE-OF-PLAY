# Elliptic Weave Ornament

異なる軸を持つ楕円が交差して球状の織りをつくる。平行な同心円の繰り返しを避ける。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import EllipticWeaveOrnament from './EllipticWeaveOrnament';

export default function Example() {
  return <EllipticWeaveOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="elliptic-weave-ornament"]');
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
