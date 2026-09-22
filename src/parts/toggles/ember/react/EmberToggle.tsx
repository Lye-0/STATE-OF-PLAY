'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from '../../../../shared/use-toggle';
import '../styles.css';
const config = {
  "id": "ember",
  "name": "Ember",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 361,
  "travel": 144
};
/** 冷たい鉄に火種が走り、陶器のつまみに橙の光が映る。 */
export default function EmberToggle(props: ToggleProps) {
  const {element, checked} = useToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Ember トグル'} aria-checked={checked} className={`sop-toggle sop-ember ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="em-body"><span className="em-well"><span className="em-heat"></span><span className="em-coils"><i className="em-coil" style={{"--i": "0"} as CSSProperties}></i><i className="em-coil" style={{"--i": "1"} as CSSProperties}></i><i className="em-coil" style={{"--i": "2"} as CSSProperties}></i><i className="em-coil" style={{"--i": "3"} as CSSProperties}></i><i className="em-coil" style={{"--i": "4"} as CSSProperties}></i><i className="em-coil" style={{"--i": "5"} as CSSProperties}></i><i className="em-coil" style={{"--i": "6"} as CSSProperties}></i><i className="em-coil" style={{"--i": "7"} as CSSProperties}></i><i className="em-coil" style={{"--i": "8"} as CSSProperties}></i></span><span className="em-text on">ON / IGNITED</span><span className="em-text off">OFF / COLD</span></span><span className="em-knob"><span></span><i></i></span><span className="em-dots"></span></span></span>
  </button>;
}
