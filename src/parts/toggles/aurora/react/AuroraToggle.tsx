'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "aurora",
  "name": "Aurora",
  "initial": false,
  "stiffness": 205,
  "damping": 22,
  "tone": 469,
  "travel": 151
};
/** 薄い光のカーテンが開き、夜色のレンズに極光が映る。 */
export default function AuroraToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Aurora トグル'} aria-checked={checked} className={`sop-toggle sop-aurora ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="au-sky"><span className="au-curtain c1"></span><span className="au-curtain c2"></span><span className="au-curtain c3"></span><span className="au-horizon"></span><span className="au-state on">ON / AWAKE</span><span className="au-state off">OFF / SILENT</span></span><span className="au-orb"><span></span><i></i></span></span>
  </button>;
}
