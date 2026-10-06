'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "shoji-toggle",
  "name": "Shoji Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
/** 木の桟をもつ障子が滑り、奥の灯りを開く。 */
export default function ShojiToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Shoji Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-shoji-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="sj-frame"><span className="sj-glow"></span><span className="sj-leaf"><i></i><i></i><i></i><i></i><i></i><i></i></span><b className="sj-grip"></b></span></span>
  </button>;
}
