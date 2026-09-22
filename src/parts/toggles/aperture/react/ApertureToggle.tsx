'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "aperture",
  "name": "Aperture",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 307,
  "travel": 147
};
/** 六枚の絞りがほどけ、レンズの奥に青い光が現れる。 */
export default function ApertureToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Aperture トグル'} aria-checked={checked} className={`sop-toggle sop-aperture ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="ap-body"><span className="ap-index">F / 1.4</span><span className="ap-index right">OPTICAL</span><span className="ap-track"></span><span className="ap-word on">ON<br/><small>OPEN</small></span><span className="ap-word off">OFF<br/><small>CLOSED</small></span><span className="ap-lens"><span className="ap-grooves"></span><span className="ap-glass"></span><span className="ap-leaves"><i className="ap-leaf" style={{"--i": "0"} as CSSProperties}></i><i className="ap-leaf" style={{"--i": "1"} as CSSProperties}></i><i className="ap-leaf" style={{"--i": "2"} as CSSProperties}></i><i className="ap-leaf" style={{"--i": "3"} as CSSProperties}></i><i className="ap-leaf" style={{"--i": "4"} as CSSProperties}></i><i className="ap-leaf" style={{"--i": "5"} as CSSProperties}></i></span><span className="ap-rim"></span><i className="ap-glint"></i></span></span></span>
  </button>;
}
