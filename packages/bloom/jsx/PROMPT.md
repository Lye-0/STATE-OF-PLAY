# Bloom / JSX

# Bloom — 再現仕様

つぼみがほどけ、花びらがふわりと広がる。 展示全体ではなく、このトグルを単独の再利用可能な部品として実装する。

## 固定する外観
元の `markup.html` のレイヤー順を保つ。サイズ、各レイヤーの位置、色、グラデーション、影、素材感は `styles.css` を正本とする。CSS/SVG/Canvasで描かれた装飾を、絵文字、画像、一般的な単色スイッチへ置換しない。周囲の展示番号や見出し、背景カードはトグルに埋め込まない。

## 動き
OFFは左、ONは右。移動距離 159px、ばねの剛性 180、減衰 19。`--p` は0〜1を目標に動く連続値で、途中のオーバーシュートも含む。`--v` は速度、`--energy` は変形や余韻の強さ。元の計算と演出を維持し、単なる一定速度のスライドへ置換しない。`renderer` の素材別処理も必要ファイルに含める。

## 操作と状態
クリック、Enter、Spaceで切り替える。左右キーでOFF/ONを指定。左右ドラッグは7pxのしきい値を持ち、縦のタッチ操作はページのスクロールに使う。無効状態では操作しない。公開状態をアプリから制御できる。アニメーションを減らす設定では状態に直接移動し、装飾の連続描画を止める。

## 組み込みの条件
CSSはルートの `.sop-bloom` に閉じる。同一ページへの複数配置、各個体の独立した状態、アンマウント後のイベント/RAF/Observer解除を維持する。Reactのcontrolled/uncontrolledをどちらも支援する。参照先に存在しない共通ファイルを残さない。音は任意であり、描画の依存にしない。

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
left: 16px;
top: 32px;
width: 248px;
```

色: #d1e6b2, #8b8d8d, #333737, #111313, #5d6162, #060707, #171919, #231b1c, #372528, #231b1d, #64434478, #08070999, #0005, #b0747036, #a8766140, #bc8983, #0007, #bf625e, #ed9c88, #ffccb0, #e99887, #ba6965, #fce6c96e, #7c413757, #662e3744, #ffddc46b, #c9776c, #ffb9a0, #e79b8b, #d17e78, #c68368, #ffd7aa, #f3b18f, #ba7961, #793c4440, #ffdfa7, #eaaa72, #b46e48, #804531, #ffe3a860, #60362290, #5136209c, #000

全レイヤーの寸法、陰影、グラデーションはコード込み形式のstyles.cssに記載しています。


## 使い方
# Bloom / 2.2.0

つぼみがほどけ、花びらがふわりと広がる。

## React + TypeScript / JavaScript
同じパッケージのファイルを1つのディレクトリに置き、`BloomToggle` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

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

### BloomToggle.jsx

```jsx
'use client';
import React from 'react';
import { useToggle } from './use-toggle';
import './styles.css';
const config = {
    "id": "bloom",
    "name": "Bloom",
    "initial": true,
    "stiffness": 180,
    "damping": 19,
    "tone": 660,
    "travel": 159
};
/** つぼみがほどけ、花びらがふわりと広がる。 */
export default function BloomToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Bloom トグル'} aria-checked={checked} className={`sop-toggle sop-bloom ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="bloom-track"><svg className="bloom-vines" viewBox="0 0 248 80"><path d="M25 40h170M72 40q12-18 35-16-8 19-35 16m18 0q16 19 38 16-11-19-38-16m52 0q8-15 29-14-5 15-29 14" fill="none" stroke="currentColor" strokeWidth="1"></path></svg><span className="bloom-word">GROW</span></span><span className="flower"><span className="petals"><i style={{ "--i": "0" }}></i><i style={{ "--i": "1" }}></i><i style={{ "--i": "2" }}></i><i style={{ "--i": "3" }}></i><i style={{ "--i": "4" }}></i><i style={{ "--i": "5" }}></i><i style={{ "--i": "6" }}></i><i style={{ "--i": "7" }}></i><i style={{ "--i": "8" }}></i><i style={{ "--i": "9" }}></i><i style={{ "--i": "10" }}></i><i style={{ "--i": "11" }}></i></span><span className="flower-inner"><i style={{ "--i": "0" }}></i><i style={{ "--i": "1" }}></i><i style={{ "--i": "2" }}></i><i style={{ "--i": "3" }}></i><i style={{ "--i": "4" }}></i><i style={{ "--i": "5" }}></i><i style={{ "--i": "6" }}></i><i style={{ "--i": "7" }}></i></span><span className="flower-core"></span></span><canvas className="object-canvas" height="280" width="560"></canvas></span>
    </button>);
}

```

### styles.css

```css
/* bloom: isolated component styles, generated from style.css + shared base. */
.sop-toggle.sop-bloom {
  --sop-mono:  "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.sop-toggle.sop-bloom[aria-checked="true"] {
  --p: 1;
}

.sop-toggle.sop-bloom:disabled {
  cursor: not-allowed;
  opacity: .45;
  filter: saturate(.35);
}

.sop-toggle.sop-bloom:focus-visible {
  outline: 2px solid #d1e6b2;
  outline-offset: 10px;
}

.sop-toggle.sop-bloom {
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

.sop-toggle.sop-bloom:hover {
  filter: brightness(1.075);
}

.sop-toggle.sop-bloom:active {
  cursor: grabbing;
}

.sop-toggle.sop-bloom .switch-art {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translateY(calc(var(--press,0)*1.5px));
  transition: transform .12s;
}

.sop-toggle.sop-bloom .switch-art * {
  box-sizing: border-box;
}

.sop-toggle.sop-bloom .object-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sop-toggle.sop-bloom .screw {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(125deg,#8b8d8d,#333737 48%,#111313 50%,#5d6162);
  box-shadow: 0 0 1px 1px #060707;
}

.sop-toggle.sop-bloom .screw:after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 3px;
  height: 1px;
  background: #171919;
  transform: rotate(-35deg);
}

.sop-toggle.sop-bloom .s1 {
  top: 10px;
  left: 11px;
}

.sop-toggle.sop-bloom .s2 {
  top: 10px;
  right: 11px;
}

.sop-toggle.sop-bloom .s3 {
  bottom: 10px;
  left: 11px;
}

.sop-toggle.sop-bloom .s4 {
  bottom: 10px;
  right: 11px;
}

@media(prefers-reduced-motion:reduce) {
  .sop-toggle.sop-bloom,
  .sop-toggle.sop-bloom * {
    animation: none!important;
    transition: none!important;
  }

}

.sop-toggle.sop-bloom {
  width: 280px;
  height: 140px;
}

.sop-toggle.sop-bloom .bloom-track {
  position: absolute;
  left: 16px;
  top: 32px;
  width: 248px;
  height: 80px;
  border-radius: 50px;
  background: linear-gradient(165deg,#231b1c,#372528 45%,#231b1d);
  border: 1px solid #64434478;
  box-shadow: inset 0 3px 9px #08070999,0 8px 18px #0005,inset 0 -1px 1px #b0747036;
}

.sop-toggle.sop-bloom .bloom-vines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  color: #a8766140;
  opacity: calc(.3 + var(--p)*.7);
}

.sop-toggle.sop-bloom .bloom-word {
  position: absolute;
  top: 34px;
  left: 45px;
  font: 8px var(--sop-mono);
  letter-spacing: 3px;
  color: #bc8983;
  opacity: calc(var(--p)*.6);
}

.sop-toggle.sop-bloom .flower {
  position: absolute;
  left: 57px;
  top: 72px;
  width: 0;
  height: 0;
  transform: translateX(calc(var(--p)*159px)) rotate(calc(var(--p)*85deg));
  filter: drop-shadow(2px 9px 6px #0007);
}

.sop-toggle.sop-bloom .petals,
.sop-toggle.sop-bloom .flower-inner {
  position: absolute;
  inset: 0;
  perspective: 250px;
}

.sop-toggle.sop-bloom .petals i {
  position: absolute;
  left: -16px;
  bottom: -8px;
  width: 32px;
  height: 65px;
  border-radius: 60% 50% 45% 45%;
  background: linear-gradient(100deg,#bf625e,#ed9c88 28%,#ffccb0 51%,#e99887 55%,#ba6965);
  box-shadow: inset 1px 0 2px #fce6c96e,inset -1px 0 2px #7c413757,1px 1px 4px #662e3744;
  transform-origin: 50% calc(100% - 8px);
  transform: rotate(calc(var(--i)*30deg)) translateY(calc(var(--p)*-3px)) rotateX(calc((1 - var(--p))*74deg)) scale(calc(.35 + var(--p)*.65));
  opacity: calc(.1 + var(--p)*.9);
}

.sop-toggle.sop-bloom .petals i:after {
  content: "";
  position: absolute;
  width: 1px;
  left: 50%;
  top: 12%;
  bottom: 10%;
  background: linear-gradient(transparent,#ffddc46b,transparent);
}

.sop-toggle.sop-bloom .petals i:nth-child(even) {
  background: linear-gradient(95deg,#c9776c,#ffb9a0 48%,#e79b8b 52%,#d17e78);
}

.sop-toggle.sop-bloom .flower-inner i {
  position: absolute;
  left: -12px;
  bottom: -6px;
  width: 24px;
  height: 42px;
  border-radius: 55% 50% 40% 40%;
  background: linear-gradient(90deg,#c68368,#ffd7aa 49%,#f3b18f 52%,#ba7961);
  transform-origin: 50% calc(100% - 6px);
  transform: rotate(calc(var(--i)*45deg + 15deg)) rotateX(calc((1 - var(--p))*78deg)) scale(calc(.4 + var(--p)*.6));
  box-shadow: 1px 2px 4px #793c4440;
}

.sop-toggle.sop-bloom .flower-core {
  position: absolute;
  inset: -23px;
  border-radius: 50%;
  background: radial-gradient(circle at 33% 26%,#ffdfa7,#eaaa72 30%,#b46e48 72%,#804531);
  box-shadow: inset 1px 2px 3px #ffe3a860,2px 4px 6px #60362290;
  transform: scale(calc(1 - var(--p)*.26));
}

.sop-toggle.sop-bloom .flower-core:after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background-image: radial-gradient(#5136209c .7px,transparent 1.3px);
  background-size: 4px 4px;
  opacity: var(--p);
  mask-image: radial-gradient(circle,#000 35%,transparent 68%);
}


```

### use-toggle.js

```javascript
'use client';
import { useEffect, useRef, useState } from 'react';
import { createToggleController } from './toggle-controller';
/** React owns the committed state/ARIA; the controller owns only transient artwork values. */
export function useToggle(config, props) {
    const [internal, setInternal] = useState(props.defaultChecked ?? config.initial);
    const checked = props.checked ?? internal;
    const element = useRef(null);
    const control = useRef(null);
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
    useEffect(() => {
        if (props.disabled)
            control.current?.cancelInteraction();
    }, [props.disabled]);
    return { element, checked };
}

```

### toggle-controller.js

```javascript
import { Spring, isDrag, dragValue } from './motion';
import { ObjectRenderer } from './renderer';
let nextInstance = 0;
/** SVG resources are local to each instance, including multiple copies of Orbit. */
function scopeSvgResources(root) {
    if (root.dataset.sopInstance)
        return;
    const prefix = `sop-${++nextInstance}-${Math.random().toString(36).slice(2, 10)}-`;
    root.dataset.sopInstance = prefix;
    const ids = new Map();
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
export function createToggleController(button, config, options = {}) {
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
    let pointer = null;
    const continuous = ['volt', 'orbit', 'reel', 'prism', 'signal'].includes(config.id);
    function render() { renderer.frame(spring.value, spring.velocity, elapsed, 0, reduced); }
    function requestFrame() {
        if (!raf && !destroyed && !paused && visible && !document.hidden)
            raf = requestAnimationFrame(frame);
    }
    function pause() { cancelAnimationFrame(raf); raf = 0; lastTime = 0; }
    function frame(time) {
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
    function setChecked(value, immediate = false) {
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
    function requestChange(value) {
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
    button.addEventListener('lostpointercapture', () => {
        if (pointer)
            cancelInteraction();
    }, { signal: events.signal });
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
        setPaused(value) {
            paused = value;
            if (paused) {
                cancelInteraction();
                pause();
            }
            else
                requestFrame();
        },
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

### motion.js

```javascript
/* Original spring physics, independent of the gallery and React. */
export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
export class Spring {
    value;
    target;
    velocity = 0;
    stiffness;
    damping;
    constructor(value = 0, { stiffness = 250, damping = 22 } = {}) {
        this.value = value;
        this.target = value;
        this.velocity = 0;
        this.stiffness = stiffness;
        this.damping = damping;
    }
    setTarget(value) { this.target = clamp(value); }
    snap(value) { this.value = this.target = clamp(value); this.velocity = 0; }
    get settled() { return Math.abs(this.value - this.target) < 0.0001 && Math.abs(this.velocity) < 0.001; }
    advance(dt) {
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
export function isDrag(dx, dy, threshold = 7) {
    return Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.12;
}
export function dragValue(start, dx, travel, scale = 1) {
    if (!Number.isFinite(travel) || travel <= 0)
        return clamp(start);
    return clamp(start + dx / (travel * Math.max(0.1, scale)));
}
export function orbitPosition(value) {
    const p = clamp(value, -0.08, 1.08);
    return { x: 140 - 96 * Math.cos(p * Math.PI), y: 73 - 36 * Math.sin(p * Math.PI) };
}

```

### renderer.js

```javascript
import { clamp, orbitPosition } from "./motion";
const LETTERS = {
    O: ['01110', '11011', '10001', '10001', '10001', '11011', '01110'],
    N: ['10001', '11001', '11001', '10101', '10011', '10011', '10001'],
    F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000']
};
export class ObjectRenderer {
    button;
    config;
    canvas;
    ctx;
    particles;
    reelAngle;
    effectAge;
    lastValue;
    lastEnergy;
    size;
    constructor(button, config) {
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
    trigger(on, reduced) {
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
    frame(value, velocity, t, dt, reduced) {
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
    volt(ctx, w, h, p, t) {
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
    orbit(ctx, w, h, p, t) {
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
    prism(ctx, w, h, p, t) {
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
    signal(ctx, w, h, p, t) {
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
    drawParticles(ctx, dt) {
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

### Example.jsx

```jsx
import React, { useState } from 'react';
import BloomToggle from './BloomToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <BloomToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}

```

### markup.html

```markup
<button aria-checked="true" aria-label="Bloom トグル" class="sop-toggle sop-bloom" role="switch" type="button"><span aria-hidden="true" class="switch-art"><span class="bloom-track"><svg class="bloom-vines" viewbox="0 0 248 80"><path d="M25 40h170M72 40q12-18 35-16-8 19-35 16m18 0q16 19 38 16-11-19-38-16m52 0q8-15 29-14-5 15-29 14" fill="none" stroke="currentColor" stroke-width="1"></path></svg><span class="bloom-word">GROW</span></span><span class="flower"><span class="petals"><i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i><i style="--i:5"></i><i style="--i:6"></i><i style="--i:7"></i><i style="--i:8"></i><i style="--i:9"></i><i style="--i:10"></i><i style="--i:11"></i></span><span class="flower-inner"><i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i><i style="--i:5"></i><i style="--i:6"></i><i style="--i:7"></i></span><span class="flower-core"></span></span><canvas class="object-canvas" height="280" width="560"></canvas></span></button>

```
