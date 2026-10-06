'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "cantilever-toggle",
  "name": "Cantilever Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 支点をもつ長いレバーが、二つの停止位置へしなやかに傾く。 */
export default function CantileverToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Cantilever Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-cantilever-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="cl-base"><i className="cl-pin"></i><span className="cl-lever"><b></b></span><em className="cl-light"></em></span></span>
  </button>;
}
