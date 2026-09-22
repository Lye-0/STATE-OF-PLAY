'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
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
      <span aria-hidden="true" className="switch-art"><span className="prism-caustic"></span><span className="prism-base"><span className="prism-spectrum"></span><span className="prism-wire w1"></span><span className="prism-wire w2"></span><span className="prism-wire w3"></span><span className="prism-state on">ON / REFRACT</span><span className="prism-state off">OFF / DORMANT</span></span><canvas className="object-canvas" height="280" width="560"></canvas><span className="prism-crystal"><span className="crystal-back"></span><span className="crystal-facet"></span><span className="crystal-core"></span></span><span className="prism-spectral-line"></span></span>
    </button>);
}
