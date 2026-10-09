# Paper Fan Fold Ornament

扇の骨が支点から扇状に展開。画面外・非表示・一時停止・reduced motionでは動きを止める。


形の連なりと動きを使った装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import PaperFanFoldOrnament from './PaperFanFoldOrnament';

export default function Example() {
  return <PaperFanFoldOrnament paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="paper-fan-fold-ornament"]');
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
独立した縦の短冊を廃し、六つの紙骨が一つの実支点で開閉する扇へ再構成する。幅20pxの折紙の面が8〜22度の共通開角で連動し、交互の裏面と一本の支点が静止時にも扇を読ませる。支点は動かず、上下の漂い・hover別回転を廃した。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
