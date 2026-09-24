# Stitch Comet

ホバーで構造や光が変化する、Aタイプ寄りの装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import StitchComet from './StitchComet';

export default function Example() {
  return <StitchComet paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="stitch-comet"]');
if (element) {
  const controller = init(element, { paused: false });
  controller.setPaused(false);
}
```

## メモ

- 装飾専用なので `aria-hidden="true"` 前提です。
- ホバーで動く演出を持ちます。
- `paused` / `data-paused` でアニメーション停止に対応します。
- `--ornament-accent` を上書きすると雰囲気を変えられます。

## 後片付け

通常DOM版では取り外すときにcontroller.destroy()を呼びます。React版はpausedを渡して停止できます。表示する図形はaria-hiddenの装飾で、重要な状態をこのパーツだけで伝えません。

## v4.14.1 / 動き

二本の直線ではなく、縫い目と薄い帯を一続きの閉曲線で描きます。光点は同じ閉曲線のoffset-pathを一定速度で巡り、ホバーでは糸・尾・光量だけを補間します。animation-durationを切り替えず、位相を維持してください。
