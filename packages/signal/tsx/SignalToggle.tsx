'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from './use-toggle';
import './styles.css';
const config = {
    "id": "signal",
    "name": "Signal",
    "initial": false,
    "stiffness": 460,
    "damping": 29,
    "tone": 130,
    "travel": 140
};
/** ロッカーを倒すと、ドットの波形が目を覚ます。 */
export default function SignalToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Signal トグル'} aria-checked={checked} className={`sop-toggle sop-signal ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="signal-body"><span className="signal-header mono">SIGNAL GENERATOR <i></i></span><span className="signal-screen"><canvas className="object-canvas" height="112" width="304"></canvas><span className="screen-glare"></span></span><span className="rocker-mount"><span className="signal-rocker"><span>I</span><i></i><span>O</span></span></span><span className="signal-bottom mono"><span>● REC</span><span>48 kHz / 24 bit</span></span></span></span>
    </button>);
}
