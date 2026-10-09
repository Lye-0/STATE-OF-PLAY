# Spooling Ovals Ornament

糸巻きの芯へ一本ずつ輪が巻かれる。縦の楕円を重ねるだけでなく、芯と巻き方向を見せる。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import SpoolingOvalsOrnament from './SpoolingOvalsOrnament';

export default function Example() {
  return <SpoolingOvalsOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="spooling-ovals-ornament"]');
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
一本の実芯と六つの巻く楕円を保持し、芯18px・輪2px・25px間隔へ読みやすく磨く。密な極細線と下影を廃し、輪の傾きだけに位相差を持たせ、芯と巻きの接点を静止時にも明確にする。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
