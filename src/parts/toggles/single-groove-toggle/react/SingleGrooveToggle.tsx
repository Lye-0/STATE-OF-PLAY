'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "single-groove-toggle",
  "name": "Single Groove Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 細い溝と大きなつまみで状態が分かる、コンパクトな切替。 */
export default function SingleGrooveToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Single Groove Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-single-groove-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span></span>
</button>;
}
