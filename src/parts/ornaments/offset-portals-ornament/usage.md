# Offset Portals Ornament

奥へ続く六つの門。遠近の大きさと開口をずらし、hoverで奥行きを開く。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import OffsetPortalsOrnament from './OffsetPortalsOrnament';

export default function Example() {
  return <OffsetPortalsOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="offset-portals-ornament"]');
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
六つの直角の門の入れ子を保ち、3pxの読む辺と6pxの側断面で前後を明確にする。奥の門の左右のずれだけが同じ軸で往復し、全体が拡大回転するhoverを廃した。鞍の曲面と区別し、直角・閉じた門・左右の視差を主形にする。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
