'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "status-notch-toggle",
  "name": "Status Notch Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 固定したOFF／ON表示と移動する選択面で、増減ではなく有効状態を明示する。 */
export default function StatusNotchToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Status Notch Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-status-notch-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span></span>
</button>;
}
