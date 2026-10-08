'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "raster-reveal-toggle",
  "name": "Raster Reveal Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 100
};
/** 二枚の細い格子を半周期ずらし、OFFでは閉じた暗い面、ONでは縞の間に明るい開口を出す。端の格子と銀の持ち手を残し、固定目盛りで状態を確認できる。 */
export default function RasterRevealToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Raster Reveal Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-raster-reveal-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
