# Signal Orbit

ホバーで構造や光が変化する、Aタイプ寄りの装飾パーツです。ヒーロー、導入見出し、余白、カード周辺のアクセントとして使えます。

## React

```tsx
import SignalOrbit from './SignalOrbit';

export default function Example() {
  return <SignalOrbit paused={false} />;
}
```

## Vanilla

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="signal-orbit"]');
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

光点の回転位相を維持し、ホバーでは軌道と光点の半径・光彩だけを補間します。animation-durationをホバーで切り替えないため、入った瞬間に光点が飛びません。
