# Sunrise Ribs Ornament

日の出の稜線が水平線から展開。画面外・非表示・一時停止・reduced motionでは動きを止める。


形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import SunriseRibsOrnament from './SunriseRibsOrnament';

export default function Example() {
  return <SunriseRibsOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="sunrise-ribs-ornament"]');
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
水平線から放射する六つの稜線の主形を保ち、5pxの実線と4pxの水平線へ磨く。全稜線は水平線上の一つの支点を共有し、共通の開角だけでゆっくり開く。幅広い紙扇R699とは異なり、面を埋めず空を残す光線と水平線の関係を使う。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
