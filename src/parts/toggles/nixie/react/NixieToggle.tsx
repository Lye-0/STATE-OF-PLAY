'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "nixie",
  "name": "Nixie",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 280,
  "travel": 142
};
/** ガラス管に浮かぶ0と1。真鍮のキーで、静かな発光を切り替える。 */
export default function NixieToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Nixie トグル'} aria-checked={checked} className={`sop-toggle sop-nixie ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="nx-case"><span className="nx-cap a"></span><span className="nx-cap b"></span><span className="nx-glass"><span className="nx-mesh"></span><span className="nx-digit off">0</span><span className="nx-digit on">1</span><span className="nx-reflection"></span><span className="nx-state off">OFF / STANDBY</span><span className="nx-state on">ON / ENGAGED</span></span><span className="nx-rail"><span className="nx-key"><i></i><i></i><i></i></span></span><span className="nx-caption">N° 01 &nbsp; / &nbsp; NEON MEMORY</span></span></span>
  </button>;
}
