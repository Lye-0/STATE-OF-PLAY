'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "porcelain",
  "name": "Porcelain",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 523,
  "travel": 43
};
/** やわらかな白と、控えめな青。明るい画面にも使いやすい小さな面。 */
export default function PorcelainToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Porcelain トグル'} aria-checked={checked} className={`sop-toggle sop-porcelain ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="pc-bed"><span className="pc-word on">ON</span><span className="pc-word off">OFF</span></span><span className="pc-thumb"><i></i></span></span>
  </button>;
}
