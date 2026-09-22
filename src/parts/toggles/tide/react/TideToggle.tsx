'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "tide",
  "name": "Tide",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 334,
  "travel": 158
};
/** 水位が上がり、白い浮標がガラスの水槽を渡る。 */
export default function TideToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Tide トグル'} aria-checked={checked} className={`sop-toggle sop-tide ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="td-tank"><span className="td-water"><i></i><b></b></span><span className="td-ticks"></span><span className="td-state on">ON / FULL</span><span className="td-state off">OFF / LOW</span><span className="td-gloss"></span></span><span className="td-float"><i></i><b></b></span><span className="td-ground"></span></span>
  </button>;
}
