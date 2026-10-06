'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "pneumatic-toggle",
  "name": "Pneumatic Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 透明な空気室の中で、弾性膜が凹凸を反転する。 */
export default function PneumaticToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Pneumatic Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-pneumatic-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="pn-housing"><i className="pn-membrane"></i><b className="pn-core"></b><em className="pn-meter"></em></span></span>
  </button>;
}
