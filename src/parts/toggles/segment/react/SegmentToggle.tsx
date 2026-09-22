'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "segment",
  "name": "Segment",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 577,
  "travel": 64
};
/** OFFとONが明確に並ぶ、小さなセグメントスイッチ。 */
export default function SegmentToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Segment トグル'} aria-checked={checked} className={`sop-toggle sop-segment ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="sg-bed"><span className="sg-selection"></span><span className="sg-label off">OFF</span><span className="sg-label on">ON <i></i></span></span></span>
  </button>;
}
