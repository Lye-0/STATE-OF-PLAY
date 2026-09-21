'use client';
import React from 'react';
import { useToggle } from './use-toggle';
import './styles.css';
const config = {
    "id": "chrome",
    "name": "Chrome",
    "initial": true,
    "stiffness": 380,
    "damping": 25,
    "tone": 220,
    "travel": 128
};
/** 削り出しの金属と、吸い付くスナップ。 */
export default function ChromeToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Chrome トグル'} aria-checked={checked} className={`sop-toggle sop-chrome ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="chrome-body"><i className="screw s1"></i><i className="screw s2"></i><i className="screw s3"></i><i className="screw s4"></i><span className="chrome-slot"><span className="chrome-power">I</span><span className="chrome-zero">O</span></span><span className="chrome-led"></span><span className="chrome-knob"><span className="chrome-center"><i></i></span></span></span><span className="chrome-ticks"></span></span>
    </button>);
}
