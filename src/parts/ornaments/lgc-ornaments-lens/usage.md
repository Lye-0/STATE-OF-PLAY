# Liquid Halo / Liquid Glass

v4.15.0の動作部品から派生した、独立したガラススキンです。ギャラリーの背景・UIは配布本体に含みません。

## ガラスの配置
通常の同カテゴリと同じ入口・値・イベントを使います。半透明面の背後には、利用先の背景が必要です。これはCSSの背景ぼかしとハイライトによる表現で、Appleのネイティブ描画や物理的屈折の完全再現ではありません。
- 背景に応じて、ルートに `data-lg-appearance="light"` または `"dark"` を指定できます。
- 透過を抑える場合は `data-lg-material="solid"`。CSS変数 `--lgc-fill`、`--lgc-panel`、`--lgc-ink` でも調整できます。
- Reactではクラスにより素材が成立します。必要なdata属性は既存コンポーネントのHTML属性APIの範囲で渡すか、外部CSSでルートの変数を調整してください。
- `prefers-reduced-motion`、`prefers-reduced-transparency`、強制配色にフォールバックを用意しています。
- 専用GLASS LABや展示背景はアプリへ持ち込む必要はありません。

## 基礎コンポーネントの使い方
# Liquid Halo

純粋に装飾のために置く、独立したオーナメントです。ヒーロー見出し、余白、区切り、カード脇のアクセントとして使えます。意味を持たない装飾として使う前提なので、読み上げには含めない構成を推奨します。

## React

`LgcOrnamentsLens.tsx` を import して配置します。

```tsx
import LgcOrnamentsLens from './LgcOrnamentsLens';

export default function Example() {
  return <LgcOrnamentsLens paused={false} />;
}
```

## Vanilla

`styles.css` を読み込み、`markup.html` の構造を置いたあと、`init()` で必要なら停止状態を切り替えます。

```ts
import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="lgc-ornaments-lens"]');
if (element) {
  const controller = init(element, { paused: false });
  controller.setPaused(false);
}
```

## メモ

- 既定では `aria-hidden="true"` の装飾です。
- アニメーションを止めたい場合は `paused` / `data-paused` を使えます。
- 色を変えたい場合は `--ornament-accent` を上書きしてください。
