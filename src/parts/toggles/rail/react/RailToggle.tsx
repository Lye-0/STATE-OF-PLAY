'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "rail",
  "name": "Rail",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 550,
  "travel": 60
};
/** 細いレールを白い円が滑る。軽快で、輪郭のはっきりした切り替え。 */
export default function RailToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Rail トグル'} aria-checked={checked} className={`sop-toggle sop-rail ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="rl-line"><i></i></span><span className="rl-thumb"><i></i></span><span className="rl-status on">ON</span><span className="rl-status off">OFF</span></span>
  </button>;
}
