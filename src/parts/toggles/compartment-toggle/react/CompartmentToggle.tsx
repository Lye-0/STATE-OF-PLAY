'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "compartment-toggle",
  "name": "Compartment Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 66
};
/** 銀の戸を右へ滑らせて、ONで左の明るい小室を開く。開いた室と収納された戸を分け、右ドラッグへ直接追従する。固定したOFF／ON表示で状態を明示する。 */
export default function CompartmentToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Compartment Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-compartment-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
