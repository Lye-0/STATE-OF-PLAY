'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "compartment-toggle",
  "name": "Compartment Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 二つの小室を仕切る板が横へ滑り、選んだ室だけを開ける。 */
export default function CompartmentToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Compartment Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-compartment-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span></span>
</button>;
}
