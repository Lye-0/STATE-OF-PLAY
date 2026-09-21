'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
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
export default function BloomToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Bloom トグル'} aria-checked={checked} className={`sop-toggle sop-bloom ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="bloom-track"><svg className="bloom-vines" viewBox="0 0 248 80"><path d="M25 40h170M72 40q12-18 35-16-8 19-35 16m18 0q16 19 38 16-11-19-38-16m52 0q8-15 29-14-5 15-29 14" fill="none" stroke="currentColor" strokeWidth="1"></path></svg><span className="bloom-word">GROW</span></span><span className="flower"><span className="petals"><i style={{ "--i": "0" } as CSSProperties}></i><i style={{ "--i": "1" } as CSSProperties}></i><i style={{ "--i": "2" } as CSSProperties}></i><i style={{ "--i": "3" } as CSSProperties}></i><i style={{ "--i": "4" } as CSSProperties}></i><i style={{ "--i": "5" } as CSSProperties}></i><i style={{ "--i": "6" } as CSSProperties}></i><i style={{ "--i": "7" } as CSSProperties}></i><i style={{ "--i": "8" } as CSSProperties}></i><i style={{ "--i": "9" } as CSSProperties}></i><i style={{ "--i": "10" } as CSSProperties}></i><i style={{ "--i": "11" } as CSSProperties}></i></span><span className="flower-inner"><i style={{ "--i": "0" } as CSSProperties}></i><i style={{ "--i": "1" } as CSSProperties}></i><i style={{ "--i": "2" } as CSSProperties}></i><i style={{ "--i": "3" } as CSSProperties}></i><i style={{ "--i": "4" } as CSSProperties}></i><i style={{ "--i": "5" } as CSSProperties}></i><i style={{ "--i": "6" } as CSSProperties}></i><i style={{ "--i": "7" } as CSSProperties}></i></span><span className="flower-core"></span></span><canvas className="object-canvas" height="280" width="560"></canvas></span>
    </button>);
}
