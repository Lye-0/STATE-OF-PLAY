# Liquid / JSX

# Liquid — 再現仕様

伸びて、揺れて、透明なかたちに戻る。 展示全体ではなく、このトグルを単独の再利用可能な部品として実装する。

## 固定する外観
元の `markup.html` のレイヤー順を保つ。サイズ、各レイヤーの位置、色、グラデーション、影、素材感は `styles.css` を正本とする。CSS/SVG/Canvasで描かれた装飾を、絵文字、画像、一般的な単色スイッチへ置換しない。周囲の展示番号や見出し、背景カードはトグルに埋め込まない。

## 動き
OFFは左、ONは右。移動距離 153px、ばねの剛性 195、減衰 15。`--p` は0〜1を目標に動く連続値で、途中のオーバーシュートも含む。`--v` は速度、`--energy` は変形や余韻の強さ。元の計算と演出を維持し、単なる一定速度のスライドへ置換しない。`renderer` の素材別処理も必要ファイルに含める。

## 操作と状態
クリック、Enter、Spaceで切り替える。左右キーでOFF/ONを指定。左右ドラッグは7pxのしきい値を持ち、縦のタッチ操作はページのスクロールに使う。無効状態では操作しない。公開状態をアプリから制御できる。アニメーションを減らす設定では状態に直接移動し、装飾の連続描画を止める。

## 組み込みの条件
CSSはルートの `.sop-liquid` に閉じる。同一ページへの複数配置、各個体の独立した状態、アンマウント後のイベント/RAF/Observer解除を維持する。Reactのcontrolled/uncontrolledをどちらも支援する。参照先に存在しない共通ファイルを残さない。音は任意であり、描画の依存にしない。

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
width: 258px;
height: 108px;
left: 10px;
top: 76px;
height: 34px;
```

色: #d1e6b2, #8b8d8d, #333737, #111313, #5d6162, #060707, #171919, #0009, #b4f3ee30, #1b455126, #13232a, #28404a, #8cbae02b, #aecbda51, #c4edf767, #adcdff55, #000, #aae7d436, #b2e2ff29, #8bdebd88, #5fc6e899, #d7b9eb66, #b5ebf094, #418eca3b, #b2f5dd5e, #c4efed, #bce6f012, #87d8e30b, #d4fbffab, #eefffa80, #54bbd733, #9db4ce55, #042c3b05, #b8ffda66, #ecfff7cc, #a9dff7a6, #afeeff75, #020e2080, #99fcf130, #b7eee450, #dcfcff50, #e3fff5c4, #b7f9fa00, #e6fffaa1, #b9d3ff00

全レイヤーの寸法、陰影、グラデーションはコード込み形式のstyles.cssに記載しています。

## 配置パスの保持

ソースコードの見出しに記載されたファイル名は、ZIPルートからの相対パスです。
`src/parts/toggles/liquid/` と `src/shared/` を含む階層を維持し、ファイルを同じ階層に平坦化しないでください。
別のフォルダーへ組み込む場合は、この `src/` の下の構造をまとめて移します。
読み込み元と読み込み先の相対位置、CSSのパス、通常JS版の `.js` 拡張子を維持してください。


## 使い方
# Liquid / 2.3.0

伸びて、揺れて、透明なかたちに戻る。

## React + TypeScript / JavaScript
ZIPを展開し、`src/parts/` と `src/shared/` の階層を崩さずまとめて配置し、`LiquidToggle` をimportします。CSSはコンポーネントから読み込まれます。React 18以降を前提とするソースです。JSX版はTSXから型を除去したものです。Next.jsなどではクライアントコンポーネントとして使います。

## 通常のHTML / TypeScript
`markup.html` の要素を配置し、`styles.css` を読み込み、`init(element, options)` を実行します。`init`の返り値の `destroy()` を、画面や部品を取り外すときに必ず呼び出します。TS版は利用先のビルド環境で変換して使います。JS版の `src/parts/toggles/liquid/vanilla/index.html` はZIPのルートを公開するローカルサーバーから開きます。ZIP内の `preview/index.html` はダブルクリックでも開ける独立デモです。

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

## ディレクトリ構成を保って導入

このパッケージは、元のリポジトリ内の相対パスを保持しています。
ファイルだけを一か所に集めたり、`src/shared/` を外したりせず、ZIP内の `src/` をフォルダーごとコピーしてください。
既存プロジェクトとの衝突を避ける場合は、`src/` 全体を `components/state-of-play/liquid/` などの専用フォルダーへ入れ、入口へのimportだけを変更します。
内部の `parts/` と `shared/` の位置関係はそのままにしてください。

- React入口: `src/parts/toggles/liquid/react/LiquidToggle.tsx`（JSX版は `.jsx`）
- React使用例: `src/parts/toggles/liquid/react/Example.tsx`（JSX版は `.jsx`）
- 通常サイト入口: `src/parts/toggles/liquid/vanilla/init.ts`（JS版は `.js`）
- スタイル: `src/parts/toggles/liquid/styles.css`
- 共通処理: `src/shared/`
- 独立デモ: `preview/index.html`、`preview/styles.css`、`preview/app.js`

詳細欄のファイルツリー、コピーしたソース内の相対import、ZIPの保存パスは同じ構成です。
「ファイルを保存」はブラウザーの仕様上、選択ファイルの名前のみで保存します。ディレクトリごとの導入には「パーツZIP」を使ってください。


## ソースコード

### src/parts/toggles/liquid/react/LiquidToggle.jsx

```jsx
'use client';
import React from 'react';
import { useToggle } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
    "id": "liquid",
    "name": "Liquid",
    "initial": true,
    "stiffness": 195,
    "damping": 15,
    "tone": 540,
    "travel": 153
};
/** 伸びて、揺れて、透明なかたちに戻る。 */
export default function LiquidToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Liquid トグル'} aria-checked={checked} className={`sop-toggle sop-liquid ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="liquid-shadow"></span><span className="liquid-track"><span className="liquid-grid"></span><span className="liquid-stream"></span><span className="liquid-mark">FLOW</span><span className="liquid-waterline"></span></span><span className="liquid-bridge"></span><span className="liquid-lens"><span className="lens-inner"></span><span className="lens-glint"></span></span><span className="liquid-droplet drop-one"></span><span className="liquid-droplet drop-two"></span></span>
    </button>);
}

```

### src/parts/toggles/liquid/styles.css

```css
/* liquid: isolated component styles, generated from style.css + shared base. */
.sop-toggle.sop-liquid {
  --sop-mono:  "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.sop-toggle.sop-liquid[aria-checked="true"] {
  --p: 1;
}

.sop-toggle.sop-liquid:disabled {
  cursor: not-allowed;
  opacity: .45;
  filter: saturate(.35);
}

.sop-toggle.sop-liquid:focus-visible {
  outline: 2px solid #d1e6b2;
  outline-offset: 10px;
}

.sop-toggle.sop-liquid {
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

.sop-toggle.sop-liquid:hover {
  filter: brightness(1.075);
}

.sop-toggle.sop-liquid:active {
  cursor: grabbing;
}

.sop-toggle.sop-liquid .switch-art {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translateY(calc(var(--press,0)*1.5px));
  transition: transform .12s;
}

.sop-toggle.sop-liquid .switch-art * {
  box-sizing: border-box;
}

.sop-toggle.sop-liquid .object-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sop-toggle.sop-liquid .screw {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(125deg,#8b8d8d,#333737 48%,#111313 50%,#5d6162);
  box-shadow: 0 0 1px 1px #060707;
}

.sop-toggle.sop-liquid .screw:after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 3px;
  height: 1px;
  background: #171919;
  transform: rotate(-35deg);
}

.sop-toggle.sop-liquid .s1 {
  top: 10px;
  left: 11px;
}

.sop-toggle.sop-liquid .s2 {
  top: 10px;
  right: 11px;
}

.sop-toggle.sop-liquid .s3 {
  bottom: 10px;
  left: 11px;
}

.sop-toggle.sop-liquid .s4 {
  bottom: 10px;
  right: 11px;
}

@media(prefers-reduced-motion:reduce) {
  .sop-toggle.sop-liquid,
  .sop-toggle.sop-liquid * {
    animation: none!important;
    transition: none!important;
  }

}

.sop-toggle.sop-liquid {
  width: 258px;
  height: 108px;
}

.sop-toggle.sop-liquid .liquid-shadow {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 76px;
  height: 34px;
  border-radius: 50%;
  background: #0009;
  filter: blur(13px);
}

.sop-toggle.sop-liquid .liquid-track {
  position: absolute;
  left: 0;
  top: 9px;
  width: 258px;
  height: 91px;
  border-radius: 50px;
  background: linear-gradient(152deg,#b4f3ee30 0,#1b455126 22%,#13232a 45%,#28404a 80%,#8cbae02b);
  border: 1px solid #aecbda51;
  box-shadow: inset 0 1px 1px #c4edf767,inset 0 -1px 2px #adcdff55,0 1px 2px #000;
  overflow: hidden;
}

.sop-toggle.sop-liquid .liquid-grid {
  position: absolute;
  inset: 0;
  opacity: .4;
  background-image: linear-gradient(90deg,#aae7d436 1px,transparent 1px),linear-gradient(#b2e2ff29 1px,transparent 1px);
  background-size: 16px 16px;
  transform: perspective(200px) rotateY(-14deg) rotateZ(-18deg) scale(1.6);
  transition: opacity .4s;
}

.sop-toggle.sop-liquid .liquid-stream {
  position: absolute;
  inset: -60px -20px;
  background: conic-gradient(from 20deg at 32% 44%,transparent,#8bdebd88 7%,#5fc6e899 14%,transparent 27%,#d7b9eb66 40%,#b5ebf094 45%,transparent 53%,#418eca3b 77%,#b2f5dd5e);
  filter: blur(6px);
  transform: translateX(calc(var(--p)*24px)) rotate(calc(var(--p)*42deg));
  opacity: calc(.3 + var(--p)*.65);
}

.sop-toggle.sop-liquid .liquid-mark {
  position: absolute;
  left: 40px;
  top: 38px;
  font: 9px var(--sop-mono);
  letter-spacing: 4px;
  color: #c4efed;
  opacity: calc(.15 + var(--p)*.5);
}

.sop-toggle.sop-liquid .liquid-waterline {
  position: absolute;
  inset: 4px;
  border: 1px solid #bce6f012;
  border-radius: 50px;
  box-shadow: inset 0 -12px 14px #87d8e30b;
}

.sop-toggle.sop-liquid .liquid-lens {
  position: absolute;
  left: 9px;
  top: 12px;
  width: 85px;
  height: 85px;
  transform: translateX(calc(var(--p)*153px)) scaleX(calc(1 + var(--energy)*.22)) scaleY(calc(1 - var(--energy)*.09));
  border: 1px solid #d4fbffab;
  border-radius: 50%;
  background: radial-gradient(ellipse at 25% 13%,#eefffa80,transparent 28%),radial-gradient(ellipse at 60% 75%,#54bbd733,transparent 56%),linear-gradient(130deg,#9db4ce55,#042c3b05 40%,#b8ffda66);
  backdrop-filter: blur(1.7px) saturate(1.9);
  -webkit-backdrop-filter: blur(1.7px) saturate(1.9);
  box-shadow: inset 2px 2px 4px #ecfff7cc,inset -2px -3px 4px #a9dff7a6,inset 0 0 10px #afeeff75,2px 7px 12px #020e2080,-3px 0 15px #99fcf130;
  overflow: hidden;
}

.sop-toggle.sop-liquid .lens-inner {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 1px solid #b7eee450;
  box-shadow: inset 0 0 5px #dcfcff50;
  transform: rotate(-30deg);
}

.sop-toggle.sop-liquid .lens-inner:before {
  content: "";
  position: absolute;
  left: 9px;
  right: 9px;
  top: 3px;
  height: 28px;
  border-top: 2px solid #e3fff5c4;
  border-radius: 50%;
  filter: blur(.5px);
}

.sop-toggle.sop-liquid .lens-glint {
  position: absolute;
  right: 4px;
  top: 29px;
  width: 14px;
  height: 43px;
  border-radius: 50%;
  transform: rotate(30deg);
  background: linear-gradient(#b7f9fa00,#e6fffaa1,#b9d3ff00);
  filter: blur(1px);
}

.sop-toggle.sop-liquid .liquid-bridge {
  position: absolute;
  top: 32px;
  left: 46px;
  width: 100px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(#c0fbf855,#64c3e260,#d0e8ee77);
  border: 1px solid #b4f8fd70;
  filter: blur(3px);
  transform: translateX(calc(var(--p)*123px - var(--v)*4px)) scaleX(calc(var(--energy)*1.6));
  transform-origin: 0 50%;
  opacity: var(--energy);
}

.sop-toggle.sop-liquid .liquid-droplet {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 25% 20%,#e8fffb,#83e5e04d 24%,#91d9fb20 61%,#bbeffa);
  box-shadow: inset 0 0 2px #dafbfbb3,0 3px 8px #0003;
  opacity: calc(var(--energy)*.85);
}

.sop-toggle.sop-liquid .drop-one {
  width: 12px;
  height: 12px;
  left: calc(32px + var(--p)*164px);
  top: 3px;
  transform: translate(calc(var(--v)*-9px),calc(var(--energy)*-10px));
}

.sop-toggle.sop-liquid .drop-two {
  width: 7px;
  height: 7px;
  left: calc(43px + var(--p)*135px);
  top: 98px;
  transform: translate(calc(var(--v)*-13px),calc(var(--energy)*8px));
}


```

### src/shared/use-toggle.js

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

### src/shared/toggle-controller.js

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

### src/shared/motion.js

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

### src/shared/renderer.js

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

### src/parts/toggles/liquid/react/Example.jsx

```jsx
import React, { useState } from 'react';
import LiquidToggle from './LiquidToggle';
export default function Example() {
    const [enabled, setEnabled] = useState(false);
    return <LiquidToggle checked={enabled} onCheckedChange={setEnabled} aria-label="通知を有効にする"/>;
}

```

### src/parts/toggles/liquid/markup.html

```markup
<button aria-checked="true" aria-label="Liquid トグル" class="sop-toggle sop-liquid" role="switch" type="button"><span aria-hidden="true" class="switch-art"><span class="liquid-shadow"></span><span class="liquid-track"><span class="liquid-grid"></span><span class="liquid-stream"></span><span class="liquid-mark">FLOW</span><span class="liquid-waterline"></span></span><span class="liquid-bridge"></span><span class="liquid-lens"><span class="lens-inner"></span><span class="lens-glint"></span></span><span class="liquid-droplet drop-one"></span><span class="liquid-droplet drop-two"></span></span></button>

```
