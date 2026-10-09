# Linkage Crosses Ornament

六つの連結節が一本の列として揺れる。接点の円と腕をつなぎ、単独の輪の反復から機構のまとまりへ。

形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import LinkageCrossesOrnament from './LinkageCrossesOrnament';

export default function Example() {
  return <LinkageCrossesOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="linkage-crosses-ornament"]');
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
共通角度から全六本の腕と関節を計算する連結機構を保持し、腕5px・関節13pxへ磨く。小さい折線グラフに見える細さを改め、明るい関節環と鈍い実腕の厚みで屈伸を読む。全腕を同じ位相で動かし、接点を離さない。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
