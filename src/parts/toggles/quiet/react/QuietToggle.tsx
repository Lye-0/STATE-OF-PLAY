'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "quiet",
  "name": "Quiet",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 496,
  "travel": 40
};
/** 44pxの静かなスイッチ。明確な位置とチェックで、設定に馴染む。 */
export default function QuietToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Quiet トグル'} aria-checked={checked} className={`sop-toggle sop-quiet ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="qt-track"><span className="qt-label on">ON</span><span className="qt-label off">OFF</span></span><span className="qt-thumb"><i className="qt-check"></i></span></span>
  </button>;
}
