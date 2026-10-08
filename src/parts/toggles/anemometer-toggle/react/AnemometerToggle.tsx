'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "anemometer-toggle",
  "name": "Anemometer Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 80
};
/** 三つのカップと腕を持つ小さな風向機。OFFでは銅のブレーキが中心軸へ接続し、ONでは左へ退いて軸を解放する。回転するカップに加え、係合と隙間で二つの状態を示す。 */
export default function AnemometerToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Anemometer Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-anemometer-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"><i></i><i></i><i></i></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
