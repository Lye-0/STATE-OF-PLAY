# Tide Sweep

純粋に装飾のために置く、独立したオーナメントです。ヒーロー見出し、余白、区切り、カード脇のアクセントとして使えます。意味を持たない装飾として使う前提なので、読み上げには含めない構成を推奨します。

## React

`TideSweep.tsx` を import して配置します。

```tsx
import TideSweep from './TideSweep';

export default function Example() {
  return <TideSweep paused={false} />;
}
```

## Vanilla

`styles.css` を読み込み、`markup.html` の構造を置いたあと、`init()` で必要なら停止状態を切り替えます。

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="tide-sweep"]');
if (element) {
  const controller = init(element, { paused: false });
  controller.setPaused(false);
}
```

## メモ

- 既定では `aria-hidden="true"` の装飾です。
- アニメーションを止めたい場合は `paused` / `data-paused` を使えます。
- 色を変えたい場合は `--ornament-accent` を上書きしてください。

## 停止状態と後片付け

Reactでは `paused`、Vanillaでは `init(element, { paused })` と返された `setPaused()` で停止状態を切り替えます。Vanillaの実装は `data-paused` に反映します。要素を取り外す際は `destroy()` を呼んでください。動きを減らすOS設定でも装飾アニメーションは停止します。
