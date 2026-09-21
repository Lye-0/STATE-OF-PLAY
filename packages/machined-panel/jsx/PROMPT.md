# Machined Panel / JSX

# Machined Panel — 再現仕様

削り出した金属板。3px周期の微細な筋、内側の刻線、4つの小さなねじ、下端の段差を保つ。クロームの鏡面ではなく、落ち着いたダークアルミニウムの反射。

## 基準値
```json
{
  "radius": "12px",
  "innerRim": "8px inset / 6px radius",
  "grain": "horizontal 1px at 3px interval",
  "hardware": "4 screws / 7px diameter / 17px inset",
  "shadow": "inset highlights + 3px lower lip + 18px diffuse shadow",
  "pointerLight": "450px ellipse / alpha .094"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-machined-panel`。マウスの位置を基準に反射を更新する。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。


## 使い方
# Machined Panel / 2.2.0

精密な輪郭と、指先を追う金属の反射。

## React + TypeScript / JavaScript
同じパッケージのファイルを1つのディレクトリに置き、`MachinedPanel` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

## 通常のHTML / TypeScript
`markup.html` の要素を配置し、`styles.css` を読み込み、`init(element, options)` を実行します。`init`の返り値の `destroy()` を、画面や部品を取り外すときに必ず呼び出します。TS版は利用先のビルド環境で変換して使います。JS版の `index.html` はローカルサーバーから開きます。ZIP内の `preview/index.html` はダブルクリックでも開ける独立デモです。

## そのまま保たれるもの
外観のCSS、素材別の動き、マウスとキーボードの操作、動きを減らす設定。音は展示サイト専用の任意機能で、配布パーツには含めません。展示枠やサンプル文言は部品本体から分離しています。

## 調整
- `children` (ReactNode): 文章、画像、ボタンなど好きな中身を配置できます。
- `className / style` (標準のReact属性): 幅、余白、外側のレイアウトを設定します。
- `--sop-padding` (CSSカスタムプロパティ): 内側の余白。初期値は28pxです。
- `--sop-accent` (R,G,B): Original Surfaceの追従光の色を指定できます。

## コピーと依存関係
コード画面の「コピー」で表示中ファイルの本文をコピーし、「ファイルを保存」でそのファイルだけをダウンロードできます。関連ファイル一式は「パーツZIP」で取得してください。共通処理を含む全ファイルを同じ構成で配置してください。JavaScript/TypeScript版の実行時外部依存はありません。React版はReactが必要です。


## ソースコード

### MachinedPanel.jsx

```jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { createSurfaceController } from './surface-controller';
import './styles.css';
/** 精密な輪郭と、指先を追う金属の反射。 The content is yours. */
export default function MachinedPanel({ children, className = '', ...props }) {
    const element = useRef(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface sop-machined-panel ${className}`}>
    <span className="sop-hardware" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}

```

### styles.css

```css
/* machined-panel: isolated component styles, generated from style.css + shared base. */
.sop-surface.sop-machined-panel {
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

.sop-surface.sop-machined-panel .sop-surface-content {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: var(--sop-padding,28px);
}

@media(prefers-reduced-motion:reduce) {
  .sop-surface.sop-machined-panel,
  .sop-surface.sop-machined-panel:before,
  .sop-surface.sop-machined-panel:after {
    animation: none!important;
    transition: none!important;
    transform: none!important;
  }

}

.sop-surface.sop-machined-panel {
  border-radius: 12px;
  border: 1px solid #777e7470;
  background: repeating-linear-gradient(0deg,#e4ecdd04 0 1px,transparent 1px 3px),linear-gradient(142deg,#474c46 0,#242925 30%,#191e1b 65%,#353c34);
  box-shadow: inset 0 1px 0 #d3dcc666,inset 0 -2px 0 #080d0a,0 3px 0 #0a100b,0 18px 30px #0006;
  transition: border-color .4s;
}

.sop-surface.sop-machined-panel:before {
  content: "";
  position: absolute;
  inset: 8px;
  border: 1px solid #b7c4ad22;
  border-radius: 6px;
  box-shadow: 0 0 0 1px #030a0370;
  pointer-events: none;
  z-index: 0;
}

.sop-surface.sop-machined-panel:after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(450px ellipse at var(--sop-x,20%) var(--sop-y,10%),#d6e3c718,transparent 64%);
  pointer-events: none;
  z-index: 0;
}

.sop-surface.sop-machined-panel:hover {
  border-color: #a3ae8b99;
}

.sop-surface.sop-machined-panel .sop-hardware {
  position: absolute;
  inset: 17px;
  z-index: 2;
  pointer-events: none;
}

.sop-surface.sop-machined-panel .sop-hardware i {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg,#abb3a3,#323b2f 40%,#0b100b 45%,#91a180 65%,#475540);
  box-shadow: 0 0 0 1px #10190e,inset 0 1px 0 #efffdb50;
}

.sop-surface.sop-machined-panel .sop-hardware i:before {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 3px;
  height: 1px;
  background: #121a0f;
  transform: rotate(-30deg);
}

.sop-surface.sop-machined-panel .sop-hardware i:nth-child(1) {
  top: 0;
  left: 0;
}

.sop-surface.sop-machined-panel .sop-hardware i:nth-child(2) {
  top: 0;
  right: 0;
}

.sop-surface.sop-machined-panel .sop-hardware i:nth-child(3) {
  bottom: 0;
  left: 0;
}

.sop-surface.sop-machined-panel .sop-hardware i:nth-child(4) {
  bottom: 0;
  right: 0;
}


```

### surface-controller.js

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

### Example.jsx

```jsx
import React from 'react';
import MachinedPanel from './MachinedPanel';
export default function Example() {
    return <MachinedPanel style={{ maxWidth: 420 }}>
    <h3>Your next idea.</h3>
    <p>ここに、あなたのコンテンツを。</p>
    <button type="button">はじめる</button>
  </MachinedPanel>;
}

```

### markup.html

```markup
<div class="sop-surface sop-machined-panel"><span class="sop-hardware" aria-hidden="true"><i></i><i></i><i></i><i></i></span><div class="sop-surface-content"><!-- slot: freely replace the content --><h3>Your next idea.</h3><p>ここに、あなたのコンテンツを。</p></div></div>

```
