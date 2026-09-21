'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from './use-toggle';
import './styles.css';
const config = {
    "id": "orbit",
    "name": "Orbit",
    "initial": true,
    "stiffness": 140,
    "damping": 18,
    "tone": 420,
    "travel": 192
};
/** 磁性の球が弧を描き、もう一つの極へ。 */
export default function OrbitToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Orbit トグル'} aria-checked={checked} className={`sop-toggle sop-orbit ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="orbit-shadow"></span><svg className="orbit-rails" viewBox="0 0 280 150"><defs><linearGradient id="orbitRail" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#89958b"></stop><stop offset=".3" stopColor="#303a35"></stop><stop offset=".6" stopColor="#141c18"></stop><stop offset="1" stopColor="#768a7e"></stop></linearGradient></defs><ellipse cx="140" cy="75" fill="none" rx="118" ry="56" stroke="#364339" stroke-dasharray="1 7" strokeWidth=".8"></ellipse><ellipse cx="140" cy="75" fill="none" rx="96" ry="36" stroke="#080d0a" strokeWidth="9"></ellipse><ellipse cx="140" cy="73" fill="none" rx="96" ry="36" stroke="url(#orbitRail)" strokeWidth="4"></ellipse><ellipse cx="140" cy="73" fill="none" rx="77" ry="24" stroke="#37483b" strokeWidth=".7"></ellipse><path d="M140 7v8m0 121v8M12 75h8m240 0h8" stroke="#82988a" strokeWidth="1"></path></svg><span className="orbit-center"><span className="orbit-cross"></span><span className="orbit-caption">N   /   S</span></span><canvas className="object-canvas" height="300" width="560"></canvas><span className="orbit-orb"><span></span></span><span className="orbit-end end-a">0</span><span className="orbit-end end-b">1</span></span>
    </button>);
}
