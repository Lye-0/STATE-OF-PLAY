'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "rack",
  "name": "Rack",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 442,
  "travel": 158
};
/** 歯車がラックを噛み、精密な目盛りの上を進んでいく。 */
export default function RackToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Rack トグル'} aria-checked={checked} className={`sop-toggle sop-rack ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="rk-bed"><span className="rk-teeth"></span><span className="rk-guide"></span><span className="rk-word on">ON / DRIVE</span><span className="rk-word off">OFF / IDLE</span></span><span className="rk-gear"><span className="rk-cut"></span><span className="rk-disc"><i></i><b></b></span></span><span className="rk-ruler"></span></span>
  </button>;
}
