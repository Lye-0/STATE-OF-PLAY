'use client';
import React from 'react';
import { useToggle } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
    "id": "volt",
    "name": "Volt",
    "initial": false,
    "stiffness": 330,
    "damping": 23,
    "tone": 110,
    "travel": 173
};
/** 接点が離れ、ガラス管の中で電光が走る。 */
export default function VoltToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Volt トグル'} aria-checked={checked} className={`sop-toggle sop-volt ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="volt-label mono">01   /   HIGH VOLTAGE</span><span className="volt-tube"><span className="volt-filament"></span><canvas className="object-canvas" height="176" width="520"></canvas><span className="volt-gloss"></span><span className="volt-electrode"><i></i></span></span><span className="volt-cap cap-left"></span><span className="volt-cap cap-right"></span><span className="volt-badge">HV — 220</span></span>
    </button>);
}
