# Luminous Frame / JS

# Luminous Frame — 再現仕様

中央の面は動かさず、細い輪郭のみを光が巡る。巨大なグラデーション背景へ変えない。8秒で一周する淡い緑から青緑の光を保つ。

## 基準値
```json
{
  "radius": "16px",
  "lightWidth": "1px exposed inner border",
  "rotation": "8 seconds / linear / full 360deg",
  "face": "#141a16",
  "lightPeak": "#d8ffec",
  "glow": "hover only / subtle alpha .063"
}
```

## 部品の境界
外観とポインター反応を持つ汎用コンテナ。文章・画像・ボタン・トグルを自由に子要素へ配置する。展示用の見出しや番号、詳細画面、特定の見本文言は組み込まない。`.sop-surface-content` は内側のレイヤーで、`--sop-padding` で余白を調整できる。

## 動作
ルートは `.sop-luminous-frame`。マウスの位置を基準に反射を更新する。タッチ時は静かな既定位置を維持して、縦スクロールを妨げない。prefers-reduced-motionで動きを止める。画面から外したとき、イベントとRAF/Observerを確実に解除する。子のボタンを押しても、コンテナが意図しない動作をしない。

## 再現確認
元のCSSを正本とし、輪郭・面・陰影・色の強さ・動きの順に照合する。中身を空にした場合、文章を増やした場合、狭い幅、同じ部品の複数配置でも崩れないこと。元コードから外観を変更せず、統合先に合わせて子要素と幅・余白のみを調整する。


## 使い方
# Luminous Frame / 2.2.0

静かな面の輪郭を、光がゆっくり巡る。

## React + TypeScript / JavaScript
同じパッケージのファイルを1つのディレクトリに置き、`LuminousFrame` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

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

### init.js

```javascript
import { createSurfaceController } from './surface-controller.js';
export function init(element, options = {}) {
    return createSurfaceController(element, { tilt: false, ...options });
}

```

### styles.css

```css
/* luminous-frame: isolated component styles, generated from style.css + shared base. */
.sop-surface.sop-luminous-frame {
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

.sop-surface.sop-luminous-frame .sop-surface-content {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: var(--sop-padding,28px);
}

@media(prefers-reduced-motion:reduce) {
  .sop-surface.sop-luminous-frame,
  .sop-surface.sop-luminous-frame:before,
  .sop-surface.sop-luminous-frame:after {
    animation: none!important;
    transition: none!important;
    transform: none!important;
  }

}

.sop-surface.sop-luminous-frame {
  border-radius: 16px;
  border: 1px solid #9ae4b226;
  background: #151b18;
  box-shadow: 0 16px 38px #0005;
  isolation: isolate;
}

.sop-surface.sop-luminous-frame:before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(from 45deg,transparent 0 58%,#607c5430 64%,#c9edb488 70%,#d8ffec 73%,#78cdbe55 78%,transparent 84%);
  animation: sop-frame-turn 8s linear infinite;
  animation-play-state: var(--sop-play,running);
  z-index: 0;
  pointer-events: none;
}

.sop-surface.sop-luminous-frame:after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 14px;
  background: radial-gradient(ellipse at 50% 0,#31473625,transparent 60%),#141a16;
  z-index: 0;
  pointer-events: none;
}

.sop-surface.sop-luminous-frame:hover {
  box-shadow: 0 16px 38px #0005,0 0 28px #b4efa410;
}

@keyframes sop-frame-turn {
to{transform:rotate(360deg)}
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

### main.js

```javascript
import { init } from './init.js';
const element = document.querySelector('.sop-luminous-frame');
if (!element)
    throw new Error('The Luminous Frame root was not found.');
const controller = init(element);
// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });

```

### markup.html

```markup
<div class="sop-surface sop-luminous-frame"><div class="sop-surface-content"><!-- slot: freely replace the content --><h3>Your next idea.</h3><p>ここに、あなたのコンテンツを。</p></div></div>

```

### index.html

```markup
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Luminous Frame</title>
  <link rel="stylesheet" href="././styles.css">
</head>
<body>
<div class="sop-surface sop-luminous-frame"><div class="sop-surface-content"><!-- slot: freely replace the content --><h3>Your next idea.</h3><p>ここに、あなたのコンテンツを。</p></div></div>

  <script type="module" src="./main.ts"></script>
</body>
</html>

```
