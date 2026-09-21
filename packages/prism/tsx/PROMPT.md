# Prism / TSX

# Prism — 再現仕様

結晶が回転し、光のスペクトルを解き放つ。 展示全体ではなく、このトグルを単独の再利用可能な部品として実装する。

## 固定する外観
元の `markup.html` のレイヤー順を保つ。サイズ、各レイヤーの位置、色、グラデーション、影、素材感は `styles.css` を正本とする。CSS/SVG/Canvasで描かれた装飾を、絵文字、画像、一般的な単色スイッチへ置換しない。周囲の展示番号や見出し、背景カードはトグルに埋め込まない。

## 動き
OFFは左、ONは右。移動距離 160px、ばねの剛性 170、減衰 17。`--p` は0〜1を目標に動く連続値で、途中のオーバーシュートも含む。`--v` は速度、`--energy` は変形や余韻の強さ。元の計算と演出を維持し、単なる一定速度のスライドへ置換しない。`renderer` の素材別処理も必要ファイルに含める。

## 操作と状態
クリック、Enter、Spaceで切り替える。左右キーでOFF/ONを指定。左右ドラッグは7pxのしきい値を持ち、縦のタッチ操作はページのスクロールに使う。無効状態では操作しない。公開状態をアプリから制御できる。アニメーションを減らす設定では状態に直接移動し、装飾の連続描画を止める。

## 組み込みの条件
CSSはルートの `.sop-prism` に閉じる。同一ページへの複数配置、各個体の独立した状態、アンマウント後のイベント/RAF/Observer解除を維持する。Reactのcontrolled/uncontrolledをどちらも支援する。参照先に存在しない共通ファイルを残さない。音は任意であり、描画の依存にしない。

## 確認すること
OFF / ON / 切り替え途中の3状態を参照実装と比較する。サイズと陰影、つまみの形、素材の特徴、停止後の余韻が一致していること。統合先では初期状態とラベルだけを目的に合わせて変更し、指定がない視覚値は維持する。

## 外観の数値（元CSSから抽出）

```css
border-radius: 60px;
width: 100%;
height: 100%;
width: 100%;
height: 100%;
width: 7px;
height: 7px;
border-radius: 50%;
left: 1px;
top: 3px;
height: 1px;
top: 10px;
left: 11px;
top: 10px;
left: 11px;
width: 280px;
height: 140px;
left: 11px;
top: 26px;
width: 258px;
```

色: #d1e6b2, #8b8d8d, #333737, #111313, #5d6162, #060707, #171919, #3b31441c, #141921, #45345124, #9188b445, #ced6ff35, #c3bfff55, #b9cce722, #dec3f900, #92eed04a, #94e4fa20, #9988ff50, #ecafda33, #f4dda03b, #deedc047, #e7cafa00, #ffabd24a, #b7d0ff66, #a4f3d452, #c8d2ff29, #000b, #dcc3ff20, #e9f8ff, #989ac6, #e8b6eb, #daedbf, #3a8593, #cbb7ee, #fdc3d5, #bdc9ef, #6b527e, #ecd0ce, #589797, #b5dad1, #a5a9d4, #f0ebff, #8699bf, #e9d5e6, #8fc4d0

全レイヤーの寸法、陰影、グラデーションはコード込み形式のstyles.cssに記載しています。


## 使い方
# Prism / 2.2.0

結晶が回転し、光のスペクトルを解き放つ。

## React + TypeScript / JavaScript
同じパッケージのファイルを1つのディレクトリに置き、`PrismToggle` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

## 通常のHTML / TypeScript
`markup.html` の要素を配置し、`styles.css` を読み込み、`init(element, options)` を実行します。`init`の返り値の `destroy()` を、画面や部品を取り外すときに必ず呼び出します。TS版は利用先のビルド環境で変換して使います。JS版の `index.html` はローカルサーバーから開きます。ZIP内の `preview/index.html` はダブルクリックでも開ける独立デモです。

## そのまま保たれるもの
外観のCSS、素材別の動き、マウスとキーボードの操作、動きを減らす設定。音は展示サイト専用の任意機能で、配布パーツには含めません。展示枠やサンプル文言は部品本体から分離しています。

## 調整
- `checked` (boolean): 外部からON/OFFを制御します。
- `defaultChecked` (boolean): 外部制御しない場合の初期状態です。
- `onCheckedChange` ((checked: boolean) => void): 操作により要求された状態を受け取ります。
- `disabled` (boolean): 操作を無効にします。
- `aria-label` (string): 機能を示す名前。例：通知を有効にする。
- `className / style` (標準のReact属性): 外側の配置やサイズを調整します。

## コピーと依存関係
コード画面の「コピー」で表示中ファイルの本文をコピーし、「ファイルを保存」でそのファイルだけをダウンロードできます。関連ファイル一式は「パーツZIP」で取得してください。共通処理を含む全ファイルを同じ構成で配置してください。JavaScript/TypeScript版の実行時外部依存はありません。React版はReactが必要です。


## ソースコード

### PrismToggle.tsx

```tsx
'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from './use-toggle';
import './styles.css';
const config = {
    "id": "prism",
    "name": "Prism",
    "initial": true,
    "stiffness": 170,
    "damping": 17,
    "tone": 880,
    "travel": 160
};
/** 結晶が回転し、光のスペクトルを解き放つ。 */
export default function PrismToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Prism トグル'} aria-checked={checked} className={`sop-toggle sop-prism ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="prism-caustic"></span><span className="prism-base"><span className="prism-spectrum"></span><span className="prism-wire w1"></span><span className="prism-wire w2"></span><span className="prism-wire w3"></span></span><canvas className="object-canvas" height="280" width="560"></canvas><span className="prism-crystal"><span className="crystal-back"></span><span className="crystal-facet"></span><span className="crystal-core"></span></span><span className="prism-spectral-line"></span></span>
    </button>);
}

```

### styles.css

```css
/* prism: isolated component styles, generated from style.css + shared base. */
.sop-toggle.sop-prism {
  --sop-mono:  "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.sop-toggle.sop-prism[aria-checked="true"] {
  --p: 1;
}

.sop-toggle.sop-prism:disabled {
  cursor: not-allowed;
  opacity: .45;
  filter: saturate(.35);
}

.sop-toggle.sop-prism:focus-visible {
  outline: 2px solid #d1e6b2;
  outline-offset: 10px;
}

.sop-toggle.sop-prism {
  --p: 0;
  --v: 0;
  --energy: 0;
  --time: 0;
  position: relative;
  display: block;
  flex: none;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  outline-offset: 10px!important;
  touch-action: pan-y;
  user-select: none;
  border-radius: 60px;
  cursor: pointer;
  transform: translateY(0);
  transition: filter .3s;
  -webkit-user-select: none;
}

.sop-toggle.sop-prism:hover {
  filter: brightness(1.075);
}

.sop-toggle.sop-prism:active {
  cursor: grabbing;
}

.sop-toggle.sop-prism .switch-art {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translateY(calc(var(--press,0)*1.5px));
  transition: transform .12s;
}

.sop-toggle.sop-prism .switch-art * {
  box-sizing: border-box;
}

.sop-toggle.sop-prism .object-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sop-toggle.sop-prism .screw {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(125deg,#8b8d8d,#333737 48%,#111313 50%,#5d6162);
  box-shadow: 0 0 1px 1px #060707;
}

.sop-toggle.sop-prism .screw:after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 3px;
  height: 1px;
  background: #171919;
  transform: rotate(-35deg);
}

.sop-toggle.sop-prism .s1 {
  top: 10px;
  left: 11px;
}

.sop-toggle.sop-prism .s2 {
  top: 10px;
  right: 11px;
}

.sop-toggle.sop-prism .s3 {
  bottom: 10px;
  left: 11px;
}

.sop-toggle.sop-prism .s4 {
  bottom: 10px;
  right: 11px;
}

@media(prefers-reduced-motion:reduce) {
  .sop-toggle.sop-prism,
  .sop-toggle.sop-prism * {
    animation: none!important;
    transition: none!important;
  }

}

.sop-toggle.sop-prism {
  width: 280px;
  height: 140px;
}

.sop-toggle.sop-prism .prism-base {
  position: absolute;
  left: 11px;
  top: 26px;
  width: 258px;
  height: 89px;
  border-radius: 7px;
  background: linear-gradient(130deg,#3b31441c,#141921 50%,#45345124);
  border: 1px solid #9188b445;
  clip-path: polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px);
  box-shadow: inset 0 1px 1px #ced6ff35,inset 0 -1px 2px #c3bfff55;
  overflow: hidden;
}

.sop-toggle.sop-prism .prism-base:before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid #b9cce722;
  border-radius: 6px;
}

.sop-toggle.sop-prism .prism-spectrum {
  position: absolute;
  inset: -35px 0;
  background: conic-gradient(from 20deg at 45% 50%,#dec3f900,#92eed04a,#94e4fa20,#9988ff50,#ecafda33,#f4dda03b,#deedc047,#e7cafa00);
  transform: rotate(calc(var(--p)*65deg));
  filter: blur(5px);
  opacity: calc(.2 + var(--p)*.8);
}

.sop-toggle.sop-prism .prism-wire {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,#ffabd24a,#b7d0ff66,#a4f3d452);
  transform-origin: 50% 50%;
  opacity: calc(.25 + var(--p)*.5);
}

.sop-toggle.sop-prism .w1 {
  top: 35%;
  transform: rotate(8deg);
}

.sop-toggle.sop-prism .w2 {
  top: 65%;
  transform: rotate(-8deg);
}

.sop-toggle.sop-prism .w3 {
  top: 50%;
  background: #c8d2ff29;
}

.sop-toggle.sop-prism .prism-crystal {
  position: absolute;
  left: 19px;
  top: 22px;
  width: 82px;
  height: 96px;
  transform: translateX(calc(var(--p)*160px)) rotate(calc(var(--p)*180deg));
  filter: drop-shadow(0 5px 3px #000b) drop-shadow(0 0 7px #dcc3ff20);
}

.sop-toggle.sop-prism .crystal-back {
  position: absolute;
  inset: 0;
  clip-path: polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%);
  background: conic-gradient(from 30deg,#e9f8ff,#989ac6,#e8b6eb,#daedbf,#3a8593,#cbb7ee,#fdc3d5,#e9f8ff);
}

.sop-toggle.sop-prism .crystal-facet {
  position: absolute;
  inset: 3px;
  clip-path: polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%);
  background: conic-gradient(from 30deg,#bdc9ef 0 60deg,#6b527e 60deg 120deg,#ecd0ce 120deg 180deg,#589797 180deg 240deg,#b5dad1 240deg 300deg,#a5a9d4 300deg);
  opacity: .9;
}

.sop-toggle.sop-prism .crystal-core {
  position: absolute;
  left: 21px;
  right: 21px;
  top: 25px;
  bottom: 25px;
  clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);
  background: conic-gradient(from 30deg,#f0ebff,#8699bf,#e9d5e6,#8fc4d0,#d0f2df,#c9c3fa);
  box-shadow: inset 0 0 6px #fff;
}

.sop-toggle.sop-prism .prism-caustic {
  position: absolute;
  left: 0;
  top: 70px;
  width: 260px;
  height: 65px;
  background: conic-gradient(from -30deg at 80% 0%,transparent 0deg,#d791c655 35deg,#d9c18a50 60deg,#92daba44 88deg,#69afde50 120deg,#a088d247 145deg,transparent 170deg);
  filter: blur(13px);
  opacity: calc(var(--p)*.7);
  transform: translateY(calc(var(--energy)*10px));
}

.sop-toggle.sop-prism .prism-spectral-line {
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 7px;
  height: 1px;
  background: linear-gradient(90deg,transparent,#d59db088,#dcd5a68a,#a4c8cc80,#a1aed96e,transparent);
  opacity: var(--p);
  filter: blur(.5px);
}


```

### use-toggle.ts

```typescript
'use client';
import { useEffect, useRef, useState, type ButtonHTMLAttributes } from 'react';
import { createToggleController, type ToggleConfig, type ToggleController } from './toggle-controller';
export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children' | 'defaultChecked'> {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
/** React owns the committed state/ARIA; the controller owns only transient artwork values. */
export function useToggle(config: ToggleConfig, props: ToggleProps) {
    const [internal, setInternal] = useState(props.defaultChecked ?? config.initial);
    const checked = props.checked ?? internal;
    const element = useRef<HTMLButtonElement | null>(null);
    const control = useRef<ToggleController | null>(null);
    const latest = useRef(props);
    latest.current = props;
    const initial = useRef(checked);
    useEffect(() => {
        const button = element.current;
        if (!button)
            return;
        const controller = createToggleController(button, config, {
            checked: initial.current, controlled: true, manageAria: false,
            onCheckedChange(next) {
                if (latest.current.checked === undefined)
                    setInternal(next);
                latest.current.onCheckedChange?.(next);
            }
        });
        control.current = controller;
        return () => { controller.destroy(); control.current = null; };
    }, [config]);
    useEffect(() => { control.current?.setChecked(checked); }, [checked]);
    useEffect(() => { if (props.disabled)
        control.current?.cancelInteraction(); }, [props.disabled]);
    return { element, checked };
}

```

### toggle-controller.ts

```typescript
import { Spring, isDrag, dragValue } from './motion';
import { ObjectRenderer } from './renderer';
export interface ToggleConfig {
    id: string;
    name: string;
    initial: boolean;
    stiffness: number;
    damping: number;
    travel: number;
    tone: number;
}
export interface ToggleOptions {
    checked?: boolean;
    controlled?: boolean;
    manageAria?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
export interface ToggleController {
    setChecked: (checked: boolean, immediate?: boolean) => void;
    getChecked: () => boolean;
    cancelInteraction: () => void;
    resize: () => void;
    destroy: () => void;
    setPaused: (paused: boolean) => void;
}
let nextInstance = 0;
/** SVG resources are local to each instance, including multiple copies of Orbit. */
function scopeSvgResources(root: HTMLElement) {
    if (root.dataset.sopInstance)
        return;
    const prefix = `sop-${++nextInstance}-${Math.random().toString(36).slice(2, 10)}-`;
    root.dataset.sopInstance = prefix;
    const ids = new Map<string, string>();
    root.querySelectorAll('[id]').forEach(element => {
        ids.set(element.id, prefix + element.id);
        element.id = prefix + element.id;
    });
    root.querySelectorAll('*').forEach(element => {
        for (const attribute of [...element.attributes]) {
            let value = attribute.value;
            for (const [before, after] of ids) {
                value = value.replaceAll(`url(#${before})`, `url(#${after})`);
                if ((attribute.name === 'href' || attribute.name === 'xlink:href') && value === `#${before}`)
                    value = `#${after}`;
            }
            if (value !== attribute.value)
                element.setAttribute(attribute.name, value);
        }
    });
}
/** Owns only this button's animation. No document-wide selectors or gallery dependency. */
export function createToggleController(button: HTMLButtonElement, config: ToggleConfig, options: ToggleOptions = {}): ToggleController {
    if (!(button instanceof HTMLButtonElement))
        throw new TypeError('A button element is required.');
    const events = new AbortController();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = media.matches;
    let checked = options.checked ?? config.initial;
    const spring = new Spring(checked ? 1 : 0, config);
    scopeSvgResources(button);
    const renderer = new ObjectRenderer(button, config);
    let paused = false;
    let destroyed = false, visible = true, raf = 0, lastTime = 0, elapsed = 0;
    let suppressClick = false;
    let pointer: {
        id: number;
        x: number;
        y: number;
        value: number;
        scale: number;
        dragging: boolean;
    } | null = null;
    const continuous = ['volt', 'orbit', 'reel', 'prism', 'signal'].includes(config.id);
    function render() { renderer.frame(spring.value, spring.velocity, elapsed, 0, reduced); }
    function requestFrame() {
        if (!raf && !destroyed && !paused && visible && !document.hidden)
            raf = requestAnimationFrame(frame);
    }
    function pause() { cancelAnimationFrame(raf); raf = 0; lastTime = 0; }
    function frame(time: number) {
        raf = 0;
        if (destroyed || paused || !visible || document.hidden) {
            lastTime = 0;
            return;
        }
        const dt = lastTime ? Math.min((time - lastTime) / 1000, .05) : 1 / 60;
        lastTime = time;
        elapsed += dt;
        if (!pointer?.dragging)
            spring.advance(dt);
        renderer.frame(spring.value, spring.velocity, elapsed, dt, reduced);
        if (!spring.settled || (!reduced && (renderer.particles.length > 0 || checked && continuous)))
            requestFrame();
        else
            lastTime = 0;
    }
    function setChecked(value: boolean, immediate = false) {
        if (destroyed)
            return;
        const changed = checked !== value;
        checked = value;
        if (options.manageAria !== false)
            button.setAttribute('aria-checked', String(checked));
        if (reduced || immediate || !visible)
            spring.snap(checked ? 1 : 0);
        else
            spring.setTarget(checked ? 1 : 0);
        if (changed)
            renderer.trigger(checked, reduced);
        if (reduced || immediate || !visible)
            render();
        requestFrame();
    }
    function requestChange(value: boolean) {
        if (button.disabled || destroyed)
            return;
        // In controlled mode the consumer, not this controller, owns the committed value.
        if (!options.controlled)
            setChecked(value);
        options.onCheckedChange?.(value);
        button.dispatchEvent(new CustomEvent('sop:change', { bubbles: true, detail: { checked: value, id: config.id } }));
        // A parent may intentionally decline a controlled update. Return from any dragged position.
        if (options.controlled) {
            spring.setTarget(checked ? 1 : 0);
            requestFrame();
        }
    }
    function cancelInteraction() {
        if (pointer) {
            const id = pointer.id;
            pointer = null;
            try {
                if (button.hasPointerCapture(id))
                    button.releasePointerCapture(id);
            }
            catch { /* Pointer already ended. */ }
        }
        button.style.setProperty('--press', '0');
        if (reduced)
            spring.snap(checked ? 1 : 0);
        else
            spring.setTarget(checked ? 1 : 0);
        render();
        requestFrame();
    }
    button.addEventListener('click', event => {
        if (button.disabled)
            return;
        if (suppressClick && event.detail !== 0) {
            suppressClick = false;
            event.preventDefault();
            return;
        }
        suppressClick = false;
        requestChange(!checked);
    }, { signal: events.signal });
    button.addEventListener('keydown', event => {
        if (button.disabled)
            return;
        if (['ArrowLeft', 'ArrowDown', 'Home'].includes(event.key)) {
            event.preventDefault();
            requestChange(false);
        }
        if (['ArrowRight', 'ArrowUp', 'End'].includes(event.key)) {
            event.preventDefault();
            requestChange(true);
        }
        if (event.key === 'Escape' && pointer) {
            event.preventDefault();
            event.stopPropagation();
            cancelInteraction();
        }
    }, { signal: events.signal });
    button.addEventListener('pointerdown', event => {
        if (button.disabled || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || pointer)
            return;
        suppressClick = false;
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, value: spring.value,
            scale: button.getBoundingClientRect().width / button.offsetWidth, dragging: false };
        button.style.setProperty('--press', '1');
        try {
            button.setPointerCapture(event.pointerId);
        }
        catch { /* Capture is optional. */ }
    }, { signal: events.signal });
    button.addEventListener('pointermove', event => {
        if (!pointer || pointer.id !== event.pointerId)
            return;
        if (button.disabled) {
            cancelInteraction();
            return;
        }
        const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
        if (!pointer.dragging && isDrag(dx, dy))
            pointer.dragging = true;
        if (!pointer.dragging)
            return;
        spring.snap(dragValue(pointer.value, dx, config.travel, pointer.scale));
        render();
    }, { signal: events.signal });
    button.addEventListener('pointerup', event => {
        if (!pointer || pointer.id !== event.pointerId)
            return;
        const dragged = pointer.dragging;
        pointer = null;
        button.style.setProperty('--press', '0');
        if (dragged) {
            suppressClick = true;
            requestChange(spring.value >= .5);
        }
    }, { signal: events.signal });
    button.addEventListener('pointercancel', cancelInteraction, { signal: events.signal });
    button.addEventListener('lostpointercapture', () => { if (pointer)
        cancelInteraction(); }, { signal: events.signal });
    media.addEventListener('change', () => {
        reduced = media.matches;
        renderer.particles = [];
        spring.snap(checked ? 1 : 0);
        render();
        requestFrame();
    }, { signal: events.signal });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelInteraction();
            pause();
        }
        else {
            renderer.resize();
            requestFrame();
        }
    }, { signal: events.signal });
    const resizeObserver = new ResizeObserver(() => { renderer.resize(); render(); });
    resizeObserver.observe(button);
    const intersection = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible) {
            renderer.resize();
            render();
            requestFrame();
        }
        else {
            cancelInteraction();
            spring.snap(checked ? 1 : 0);
            renderer.particles = [];
            pause();
        }
    });
    intersection.observe(button);
    setChecked(checked, true);
    return {
        setChecked, getChecked: () => checked, cancelInteraction,
        setPaused(value) { paused = value; if (paused) {
            cancelInteraction();
            pause();
        }
        else
            requestFrame(); },
        resize: () => { renderer.resize(); render(); },
        destroy() {
            if (destroyed)
                return;
            destroyed = true;
            cancelInteraction();
            pause();
            events.abort();
            resizeObserver.disconnect();
            intersection.disconnect();
            renderer.particles = [];
        }
    };
}

```

### motion.ts

```typescript
/* Original spring physics, independent of the gallery and React. */
export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
export class Spring {
    value: number;
    target: number;
    velocity = 0;
    stiffness: number;
    damping: number;
    constructor(value = 0, { stiffness = 250, damping = 22 } = {}) {
        this.value = value;
        this.target = value;
        this.velocity = 0;
        this.stiffness = stiffness;
        this.damping = damping;
    }
    setTarget(value: number) { this.target = clamp(value); }
    snap(value: number) { this.value = this.target = clamp(value); this.velocity = 0; }
    get settled() { return Math.abs(this.value - this.target) < 0.0001 && Math.abs(this.velocity) < 0.001; }
    advance(dt: number) {
        if (!Number.isFinite(dt) || dt <= 0)
            return this.value;
        // Small fixed substeps make springs stable on low-refresh devices and after a slow frame.
        let remaining = Math.min(dt, 0.064);
        while (remaining > 0) {
            const step = Math.min(remaining, 1 / 240);
            this.velocity += ((this.target - this.value) * this.stiffness - this.velocity * this.damping) * step;
            this.value += this.velocity * step;
            remaining -= step;
        }
        if (this.settled) {
            this.value = this.target;
            this.velocity = 0;
        }
        return this.value;
    }
}
export function isDrag(dx: number, dy: number, threshold = 7) {
    return Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.12;
}
export function dragValue(start: number, dx: number, travel: number, scale = 1) {
    if (!Number.isFinite(travel) || travel <= 0)
        return clamp(start);
    return clamp(start + dx / (travel * Math.max(0.1, scale)));
}
export function orbitPosition(value: number) {
    const p = clamp(value, -0.08, 1.08);
    return { x: 140 - 96 * Math.cos(p * Math.PI), y: 73 - 36 * Math.sin(p * Math.PI) };
}

```

### renderer.ts

```typescript
import { clamp, orbitPosition } from "./motion";
import type { ToggleConfig } from "./toggle-controller";
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    age: number;
    size: number;
    hue: number;
}
const LETTERS: Record<string, string[]> = {
    O: ['01110', '11011', '10001', '10001', '10001', '11011', '01110'],
    N: ['10001', '11001', '11001', '10101', '10011', '10011', '10001'],
    F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000']
};
export class ObjectRenderer {
    button: HTMLButtonElement;
    config: ToggleConfig;
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    particles: Particle[];
    reelAngle: number;
    effectAge: number;
    lastValue: number | null;
    lastEnergy: number;
    size: {
        w: number;
        h: number;
    };
    constructor(button: HTMLButtonElement, config: ToggleConfig) {
        this.button = button;
        this.config = config;
        this.canvas = button.querySelector('canvas');
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.particles = [];
        this.reelAngle = 0;
        this.effectAge = 5;
        this.lastValue = null;
        this.lastEnergy = 0;
        this.size = { w: 0, h: 0 };
        this.resize();
    }
    resize() {
        if (!this.canvas || !this.ctx)
            return;
        // clientWidth, unlike getBoundingClientRect, does not include responsive CSS scaling.
        const w = this.canvas.clientWidth || 280;
        const h = this.canvas.clientHeight || 140;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = Math.round(w * dpr);
        this.canvas.height = Math.round(h * dpr);
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.size = { w, h };
    }
    trigger(on: boolean, reduced: boolean) {
        this.effectAge = 0;
        if (reduced || !this.ctx)
            return;
        const { w, h } = this.size;
        if (this.config.id === 'bloom' || this.config.id === 'prism') {
            const count = this.config.id === 'bloom' ? 16 : 11;
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 12 + Math.random() * 38;
                this.particles.push({ x: on ? w * .75 : w * .25, y: h * .48,
                    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 18,
                    life: .65 + Math.random() * .6, age: 0, size: .5 + Math.random() * 1.3, hue: 25 + Math.random() * 50 });
            }
            // Rapid clicking must not grow an unbounded particle list.
            this.particles = this.particles.slice(-70);
        }
    }
    frame(value: number, velocity: number, t: number, dt: number, reduced: boolean) {
        const p = clamp(value);
        const energy = reduced ? 0 : Math.min(Math.abs(velocity) / 7, 1);
        if (this.lastValue !== value || Math.abs(energy - this.lastEnergy) > .0001) {
            this.button.style.setProperty('--p', value.toFixed(5));
            this.button.style.setProperty('--v', velocity.toFixed(4));
            this.button.style.setProperty('--energy', energy.toFixed(4));
            if (this.config.id === 'orbit') {
                const pos = orbitPosition(value);
                this.button.style.setProperty('--ox', pos.x.toFixed(3) + 'px');
                this.button.style.setProperty('--oy', pos.y.toFixed(3) + 'px');
            }
            this.lastValue = value;
            this.lastEnergy = energy;
        }
        this.effectAge += dt;
        if (this.config.id === 'reel' && p > .001 && !reduced) {
            this.reelAngle = (this.reelAngle + dt * p * 100) % 360;
            this.button.style.setProperty('--reel-angle', this.reelAngle.toFixed(3) + 'deg');
        }
        if (!this.ctx)
            return;
        const ctx = this.ctx, { w, h } = this.size;
        ctx.clearRect(0, 0, w, h);
        switch (this.config.id) {
            case 'volt':
                this.volt(ctx, w, h, p, reduced ? 0 : t);
                break;
            case 'orbit':
                this.orbit(ctx, w, h, p, reduced ? 0 : t);
                break;
            case 'signal':
                this.signal(ctx, w, h, p, reduced ? 0 : t);
                break;
            case 'prism':
                this.prism(ctx, w, h, p, reduced ? 0 : t);
                break;
        }
        if (!reduced)
            this.drawParticles(ctx, dt);
    }
    volt(ctx: CanvasRenderingContext2D, w: number, h: number, p: number, t: number) {
        if (p < .025)
            return;
        const end = 42 + 173 * p;
        const pulse = .72 + .2 * Math.sin(t * 11);
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const glow = ctx.createRadialGradient(end * .6, h * .5, 0, end * .6, h * .5, end * .55);
        glow.addColorStop(0, `rgba(80,167,245,${.17 * p})`);
        glow.addColorStop(1, 'rgba(60,145,255,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
        for (let strand = 0; strand < 3; strand++) {
            ctx.beginPath();
            const segments = 34;
            for (let i = 0; i <= segments; i++) {
                const f = i / segments;
                const x = 20 + (end - 20) * f;
                const envelope = Math.sin(f * Math.PI);
                const turbulence = Math.sin(f * 35 - t * 15 + strand * 3) * 8 + Math.sin(f * 79 + t * 23 + strand) * 3;
                const y = h / 2 + turbulence * envelope * p * (strand === 0 ? 1 : .8) + Math.sin(f * Math.PI) * (strand - 1) * 9 * p;
                if (i === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            ctx.strokeStyle = strand === 0 ? `rgba(205,237,255,${pulse * p})` : `rgba(97,172,255,${.48 * p})`;
            ctx.lineWidth = strand === 0 ? 1.15 : .7;
            ctx.shadowBlur = strand === 0 ? 8 : 4;
            ctx.shadowColor = '#6baaff';
            ctx.stroke();
        }
        [20, end].forEach(x => {
            ctx.fillStyle = `rgba(209,239,255,${p * .8})`;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.ellipse(x, h / 2, 2, 5 * p, 0, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
    }
    orbit(ctx: CanvasRenderingContext2D, w: number, h: number, p: number, t: number) {
        if (p < .02)
            return;
        ctx.save();
        for (let i = 0; i < 3; i++) {
            const angle = t * .5 + i * Math.PI * 2 / 3;
            for (let j = 0; j < 18; j++) {
                const a = angle - j * .018;
                const x = w / 2 + 118 * Math.cos(a);
                const y = 75 + 56 * Math.sin(a);
                ctx.fillStyle = `rgba(180,232,194,${p * (1 - j / 18) * .65})`;
                ctx.beginPath();
                ctx.arc(x, y, j === 0 ? 1.5 : .7, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    }
    prism(ctx: CanvasRenderingContext2D, w: number, h: number, p: number, t: number) {
        if (p < .02)
            return;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const x = 59 + p * 160;
        for (let i = 0; i < 5; i++) {
            const endX = 30 + i * 41 + Math.sin(t * .25 + i) * 8;
            const gradient = ctx.createLinearGradient(x, 69, endX, 124);
            gradient.addColorStop(0, `hsla(${160 + i * 35},80%,80%,0)`);
            gradient.addColorStop(.35, `hsla(${160 + i * 35},75%,75%,${.16 * p})`);
            gradient.addColorStop(1, `hsla(${160 + i * 35},70%,70%,0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(x, 69);
            ctx.lineTo(endX - 13, 131);
            ctx.lineTo(endX + 13, 131);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
    }
    signal(ctx: CanvasRenderingContext2D, w: number, h: number, p: number, t: number) {
        const columns = 38, rows = 13, step = 4;
        const word = p > .55 ? 'ON' : 'OFF';
        const offset = Math.floor((columns - (word.length * 6 - 1)) / 2);
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                let lit = false;
                const letterIndex = Math.floor((col - offset) / 6);
                const letterCol = (col - offset) % 6;
                if (letterIndex >= 0 && letterIndex < word.length && letterCol < 5 && letterCol >= 0 && row >= 3 && row < 10) {
                    lit = LETTERS[word[letterIndex]][row - 3][letterCol] === '1';
                }
                const wave = Math.sin(t * 3 + col * .38) * Math.sin(t * 1.1 + col * .2);
                const isWave = p > .6 && Math.abs(row - 6) < Math.abs(wave) * 4.5 && (col < offset - 2 || col > offset + word.length * 6);
                const x = col * step + 1.7, y = row * step + 3.6;
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, Math.PI * 2);
                ctx.fillStyle = lit ? (p > .55 ? 'rgba(196,239,123,.9)' : 'rgba(166,148,92,.65)') : isWave ? 'rgba(166,214,98,.62)' : 'rgba(110,138,69,.11)';
                ctx.fill();
            }
        }
    }
    drawParticles(ctx: CanvasRenderingContext2D, dt: number) {
        for (const particle of this.particles) {
            particle.age += dt;
            particle.x += particle.vx * dt;
            particle.y += particle.vy * dt;
            particle.vx *= Math.exp(-dt * .8);
            particle.vy += dt * 7;
            const alpha = Math.max(0, 1 - particle.age / particle.life) * .7;
            ctx.fillStyle = this.config.id === 'bloom' ? `rgba(245,200,135,${alpha})` : `hsla(${particle.hue + 145},80%,83%,${alpha})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }
        this.particles = this.particles.filter(p => p.age < p.life);
    }
}

```

### Example.tsx

```tsx
import React, { useState } from 'react';
import PrismToggle from './PrismToggle';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return <PrismToggle
    checked={enabled}
    onCheckedChange={setEnabled}
    aria-label="通知を有効にする"
  />;
}

```

### markup.html

```markup
<button aria-checked="true" aria-label="Prism トグル" class="sop-toggle sop-prism" role="switch" type="button"><span aria-hidden="true" class="switch-art"><span class="prism-caustic"></span><span class="prism-base"><span class="prism-spectrum"></span><span class="prism-wire w1"></span><span class="prism-wire w2"></span><span class="prism-wire w3"></span></span><canvas class="object-canvas" height="280" width="560"></canvas><span class="prism-crystal"><span class="crystal-back"></span><span class="crystal-facet"></span><span class="crystal-core"></span></span><span class="prism-spectral-line"></span></span></button>

```
