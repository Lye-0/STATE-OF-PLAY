# Nested Saddles Ornament

入れ子の鞍が異なる深さへ広がる。画面外・非表示・一時停止・reduced motionでは動きを止める。


形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import NestedSaddlesOrnament from './NestedSaddlesOrnament';

export default function Example() {
  return <NestedSaddlesOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="nested-saddles-ornament"]');
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
六つの鞍の入れ子を保ち、対角の曲辺と直辺、厚い側断面、奥行きのある傾斜へ磨く。平面の角丸枠から、向かい合う曲面がねじれる鞍の向きを読みやすくする。直角の閉じた門R701と素材・曲率・動きの軸を区別し、狭幅でも全曲面を収める。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
