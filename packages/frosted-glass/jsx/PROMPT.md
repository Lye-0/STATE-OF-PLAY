# Frosted Glass / JSX

# Frosted Glass — 再現仕様

すりガラスそのものは半透明。背面の色や形をぼかして透かす。独立した背景装飾は展示のためのものであり、ガラスの子要素に固定しない。透け方は利用先の背面に依存する。

## 基準値
```json
{
  "background": "three-stop translucent linear gradient",
  "blur": "18px",
  "saturate": "1.3",
  "border": "1px #c6f0ff40",
  "radius": "18px",
  "innerBorder": "6px inset, 13px radius",
  "tilt": "maximum X ±3deg / Y ±4deg",
  "transition": "500ms cubic-bezier(.16,1,.3,1)"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-frosted-glass`。マウスの位置を基準に反射を更新する。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。

## 配置パスの保持

ソースコードの見出しに記載されたファイル名は、ZIPルートからの相対パスです。
`src/parts/blocks/frosted-glass/` と `src/shared/` を含む階層を維持し、ファイルを同じ階層に平坦化しないでください。
別のフォルダーへ組み込む場合は、この `src/` の下の構造をまとめて移します。
読み込み元と読み込み先の相対位置、CSSのパス、通常JS版の `.js` 拡張子を維持してください。


## 使い方
# Frosted Glass / 2.3.0

曇ったガラスの向こうに、色と奥行き。

## React + TypeScript / JavaScript
ZIPを展開し、`src/parts/` と `src/shared/` の階層を崩さずまとめて配置し、`FrostedGlass` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

## 通常のHTML / TypeScript
`markup.html` の要素を配置し、`styles.css` を読み込み、`init(element, options)` を実行します。`init`の返り値の `destroy()` を、画面や部品を取り外すときに必ず呼び出します。TS版は利用先のビルド環境で変換して使います。JS版の `src/parts/blocks/frosted-glass/vanilla/index.html` はZIPのルートを公開するローカルサーバーから開きます。ZIP内の `preview/index.html` はダブルクリックでも開ける独立デモです。

## そのまま保たれるもの
外観のCSS、素材別の動き、マウスとキーボードの操作、動きを減らす設定。音は展示サイト専用の任意機能で、配布パーツには含めません。展示枠やサンプル文言は部品本体から分離しています。

## 調整
- `children` (ReactNode): 文章、画像、ボタンなど好きな中身を配置できます。
- `className / style` (標準のReact属性): 幅、余白、外側のレイアウトを設定します。
- `--sop-padding` (CSSカスタムプロパティ): 内側の余白。初期値は28pxです。
- `--sop-accent` (R,G,B): Original Surfaceの追従光の色を指定できます。

## コピーと依存関係
コード画面の「コピー」で表示中ファイルの本文をコピーし、「ファイルを保存」でそのファイルだけをダウンロードできます。関連ファイル一式は「パーツZIP」で取得してください。共通処理を含む全ファイルを同じ構成で配置してください。JavaScript/TypeScript版の実行時外部依存はありません。React版はReactが必要です。

## ディレクトリ構成を保って導入

このパッケージは、元のリポジトリ内の相対パスを保持しています。
ファイルだけを一か所に集めたり、`src/shared/` を外したりせず、ZIP内の `src/` をフォルダーごとコピーしてください。
既存プロジェクトとの衝突を避ける場合は、`src/` 全体を `components/state-of-play/frosted-glass/` などの専用フォルダーへ入れ、入口へのimportだけを変更します。
内部の `parts/` と `shared/` の位置関係はそのままにしてください。

- React入口: `src/parts/blocks/frosted-glass/react/FrostedGlass.tsx`（JSX版は `.jsx`）
- React使用例: `src/parts/blocks/frosted-glass/react/Example.tsx`（JSX版は `.jsx`）
- 通常サイト入口: `src/parts/blocks/frosted-glass/vanilla/init.ts`（JS版は `.js`）
- スタイル: `src/parts/blocks/frosted-glass/styles.css`
- 共通処理: `src/shared/`
- 独立デモ: `preview/index.html`、`preview/styles.css`、`preview/app.js`

詳細欄のファイルツリー、コピーしたソース内の相対import、ZIPの保存パスは同じ構成です。
「ファイルを保存」はブラウザーの仕様上、選択ファイルの名前のみで保存します。ディレクトリごとの導入には「パーツZIP」を使ってください。


## ソースコード

### src/parts/blocks/frosted-glass/react/FrostedGlass.jsx

```jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
/** 曇ったガラスの向こうに、色と奥行き。 The content is yours. */
export default function FrostedGlass({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: true });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-frosted-glass ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}

```

### src/parts/blocks/frosted-glass/styles.css

```css
/* frosted-glass: isolated component styles, generated from style.css + shared base. */
.sop-surface.sop-frosted-glass {
  --sop-x: 50%;
  --sop-y: 50%;
  --sop-rx: 0deg;
  --sop-ry: 0deg;
  position: relative;
  box-sizing: border-box;
  isolation: isolate;
  overflow: hidden;
  min-width: 0;
  width: 100%;
  color: #eeeee6;
  transform: perspective(900px) rotateX(var(--sop-rx)) rotateY(var(--sop-ry));
}

.sop-surface.sop-frosted-glass .sop-surface-content {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: var(--sop-padding,28px);
}

@media(prefers-reduced-motion:reduce) {
  .sop-surface.sop-frosted-glass,
  .sop-surface.sop-frosted-glass:before,
  .sop-surface.sop-frosted-glass:after {
    animation: none!important;
    transition: none!important;
    transform: none!important;
  }

}

.sop-surface.sop-frosted-glass {
  border: 1px solid #c6f0ff40;
  border-radius: 18px;
  background: linear-gradient(135deg,#c2e9f817,#95b6df06 50%,#dfbeec13);
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  box-shadow: inset 0 1px 0 #eeffff45,inset 0 -1px 0 #a4defc20,0 20px 45px #0004;
  transition: box-shadow .5s,border-color .5s,transform .5s cubic-bezier(.16,1,.3,1);
}

.sop-surface.sop-frosted-glass:before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(230px circle at var(--sop-x,32%) var(--sop-y,10%),#d8faff26,transparent 75%),linear-gradient(125deg,#ffffff07,transparent 45%);
  border-radius: inherit;
}

.sop-surface.sop-frosted-glass:after {
  content: "";
  position: absolute;
  inset: 6px;
  border: 1px solid #d7f4ff0d;
  border-radius: 13px;
  pointer-events: none;
  z-index: 0;
}

.sop-surface.sop-frosted-glass:hover {
  border-color: #c7eeff77;
  box-shadow: inset 0 1px 0 #ffffff66,inset 0 -1px 0 #a4defc40,0 28px 50px #0005;
}


```

### src/shared/surface-controller.js

```javascript
/** Pointer light and optional tilt. CSS supplies a motion-reduced and touch-safe resting state. */
export function createSurfaceController(element, { intensity = 1, tilt = false } = {}) {
    const abort = new AbortController();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0, disposed = false, x = .5, y = .5;
    function paint() {
        raf = 0;
        if (disposed)
            return;
        element.style.setProperty('--sop-x', `${x * 100}%`);
        element.style.setProperty('--sop-y', `${y * 100}%`);
        element.style.setProperty('--sop-angle', `${110 + x * 70 - y * 25}deg`);
        element.style.setProperty('--sop-rx', `${tilt && !media.matches ? (y - .5) * -6 * intensity : 0}deg`);
        element.style.setProperty('--sop-ry', `${tilt && !media.matches ? (x - .5) * 8 * intensity : 0}deg`);
    }
    function reset() {
        x = y = .5;
        cancelAnimationFrame(raf);
        raf = 0;
        element.classList.remove('sop-hover');
        paint();
    }
    element.addEventListener('pointermove', event => {
        if (media.matches || event.pointerType !== 'mouse')
            return;
        const rect = element.getBoundingClientRect();
        x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        element.classList.add('sop-hover');
        if (!raf)
            raf = requestAnimationFrame(paint);
    }, { passive: true, signal: abort.signal });
    element.addEventListener('pointerleave', reset, { signal: abort.signal });
    media.addEventListener('change', reset, { signal: abort.signal });
    return { destroy() { reset(); disposed = true; abort.abort(); } };
}

```

### src/parts/blocks/frosted-glass/react/Example.jsx

```jsx
import React from 'react';
import FrostedGlass from './FrostedGlass';
export default function Example() {
    return <FrostedGlass style={{ maxWidth: 420 }}>
    <h3>Your next idea.</h3>
    <p>ここに、あなたのコンテンツを。</p>
    <button type="button">はじめる</button>
  </FrostedGlass>;
}

```

### src/parts/blocks/frosted-glass/markup.html

```markup
<div class="sop-surface sop-frosted-glass"><div class="sop-surface-content"><!-- slot: freely replace the content --><h3>Your next idea.</h3><p>ここに、あなたのコンテンツを。</p></div></div>

```
