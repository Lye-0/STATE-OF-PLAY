'use client';
import React from 'react';
import { useToggle } from './use-toggle';
import './styles.css';
const config = {
    "id": "reel",
    "name": "Analog",
    "initial": false,
    "stiffness": 430,
    "damping": 28,
    "tone": 170,
    "travel": 134
};
/** カチッと送り出す、リールと慣性のリズム。 */
export default function AnalogToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Analog トグル'} aria-checked={checked} className={`sop-toggle sop-reel ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="cassette-body"><i className="screw s1"></i><i className="screw s2"></i><i className="screw s3"></i><i className="screw s4"></i><span className="cassette-label mono">S / P <span>STEREO · TYPE II</span></span><span className="tape-line"></span><span className="spool spool-a"><i></i></span><span className="spool spool-b"><i></i></span><span className="cassette-window"><i></i><i></i><i></i><i></i><i></i></span><span className="reel-slot"><span>STOP</span><span>PLAY</span><span className="reel-slider"><i></i><i></i><i></i><b>▶</b></span></span></span></span>
    </button>);
}
