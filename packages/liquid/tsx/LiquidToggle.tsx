'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from './use-toggle';
import './styles.css';
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
export default function LiquidToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Liquid トグル'} aria-checked={checked} className={`sop-toggle sop-liquid ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="liquid-shadow"></span><span className="liquid-track"><span className="liquid-grid"></span><span className="liquid-stream"></span><span className="liquid-mark">FLOW</span><span className="liquid-waterline"></span></span><span className="liquid-bridge"></span><span className="liquid-lens"><span className="lens-inner"></span><span className="lens-glint"></span></span><span className="liquid-droplet drop-one"></span><span className="liquid-droplet drop-two"></span></span>
    </button>);
}
