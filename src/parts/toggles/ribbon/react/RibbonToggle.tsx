'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "ribbon",
  "name": "Ribbon",
  "initial": false,
  "stiffness": 210,
  "damping": 20,
  "tone": 388,
  "travel": 151
};
/** サテンがするりと伸び、金色の留め具に吸い付く。 */
export default function RibbonToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Ribbon トグル'} aria-checked={checked} className={`sop-toggle sop-ribbon ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="rb-shadow"></span><span className="rb-track"><span className="rb-cloth"><i></i><b></b></span><span className="rb-label on">ON · CONNECTED</span><span className="rb-label off">OFF · REST</span><span className="rb-stitches"></span></span><span className="rb-buckle"><span className="rb-face"></span><i></i></span></span>
  </button>;
}
