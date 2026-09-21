'use client';
import React from 'react';
import { useToggle } from './use-toggle';
import './styles.css';
const config = {
    "id": "fold",
    "name": "Fold",
    "initial": false,
    "stiffness": 250,
    "damping": 21,
    "tone": 280,
    "travel": 177
};
/** 一枚の紙が伸び、幾何学の陰影が現れる。 */
export default function FoldToggle(props) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Fold トグル'} aria-checked={checked} className={`sop-toggle sop-fold ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="fold-base"><span className="fold-marks">−<span>+</span></span></span><span className="fold-paper"><i style={{ "--i": "0" }}></i><i style={{ "--i": "1" }}></i><i style={{ "--i": "2" }}></i><i style={{ "--i": "3" }}></i><i style={{ "--i": "4" }}></i><i style={{ "--i": "5" }}></i><i style={{ "--i": "6" }}></i><i style={{ "--i": "7" }}></i><i style={{ "--i": "8" }}></i><i style={{ "--i": "9" }}></i></span><span className="fold-tab"><span></span><i></i></span><span className="fold-guide"></span></span>
    </button>);
}
