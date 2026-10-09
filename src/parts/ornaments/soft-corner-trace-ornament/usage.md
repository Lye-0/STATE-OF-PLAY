# Soft Corner Trace Ornament

画面外では自動運動を停止し、表示中だけ動かす。


形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import SoftCornerTraceOrnament from './SoftCornerTraceOrnament';

export default function Example() {
  return <SoftCornerTraceOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="soft-corner-trace-ornament"]');
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
Bの控えめな六つの角線という主形を保ち、20pxの角・2pxの線・54/50pxの余白で整える。呼吸の最低明度を.78へ上げ、暗背景でも消えず、情報や操作に見える余分なラベルや影を加えない。汎用の静かな装飾として使える小さい二段の配置を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
