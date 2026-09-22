'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "gyro",
  "name": "Gyro",
  "initial": true,
  "stiffness": 210,
  "damping": 22,
  "tone": 415,
  "travel": 142
};
/** 重なった金属の環が立ち上がり、中心の球が軌道を渡る。 */
export default function GyroToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Gyro トグル'} aria-checked={checked} className={`sop-toggle sop-gyro ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="gy-base"><i></i><b></b></span><span className="gy-link"></span><span className="gy-assembly"><span className="gy-ring outer"></span><span className="gy-ring middle"></span><span className="gy-ring inner"></span><span className="gy-ball"></span></span><span className="gy-label on">ON / BALANCED</span><span className="gy-label off">OFF / AT REST</span></span>
  </button>;
}
