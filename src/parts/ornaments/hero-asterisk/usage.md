# Hero Asterisk

サイトの見出しにある星形の印を、見出し横や余白へ単独で配置するための装飾です。ホバーすると1.4秒で180度回転します。クリック操作や状態の意味はありません。

## React

```tsx
import HeroAsterisk from './HeroAsterisk';

export default function Example() {
  return <HeroAsterisk paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="hero-asterisk"]');
if (element) {
  const controller = init(element, { paused: false });
  controller.setPaused(false);
  // 要素を取り外すときに controller.destroy() を呼びます。
}
```

形は文字「✳」、色はサイトと同じ淡い黄緑です。配布CSSの`--ornament-accent`で色を変えられます。図形は`aria-hidden`で、`paused` / `data-paused`または動きを減らす設定では回転しません。
