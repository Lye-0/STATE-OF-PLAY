'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "rocker",
  "name": "Rocker",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** フラットな小さな板が傾き、選択した側を静かに示す。 */
export default function RockerToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Rocker トグル'} aria-checked={checked} className={`sop-toggle sop-rocker ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="ro-mount"><span className="ro-plate"><span className="ro-off">O</span><span className="ro-on">I</span><i></i></span></span><span className="ro-state off">OFF</span><span className="ro-state on">ON</span></span>
  </button>;
}
