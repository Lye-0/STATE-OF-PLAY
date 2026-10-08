'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "curtain-track-toggle",
  "name": "Curtain Track Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 70
};
/** 左右の布がレールの両端へ寄り、ONで明るいアーチの窓を開く。布の裾と吊り点を分け、OFF／ONの文字は動かさない。 */
export default function CurtainTrackToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Curtain Track Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-curtain-track-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
