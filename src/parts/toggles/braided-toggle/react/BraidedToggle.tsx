'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "braided-toggle",
  "name": "Braided Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 二本の革紐が編み目を変えて、留め具を反対側へ運ぶ。 */
export default function BraidedToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Braided Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-braided-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="br-bed"><i className="br-strand one"></i><i className="br-strand two"></i><span className="br-clasp"></span></span></span>
  </button>;
}
