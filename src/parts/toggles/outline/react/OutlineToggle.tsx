'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "outline",
  "name": "Outline",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 604,
  "travel": 43
};
/** 塗りを抑えた細い境界と、端正な円。余白の多い画面に。 */
export default function OutlineToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Outline トグル'} aria-checked={checked} className={`sop-toggle sop-outline ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="ol-border"><span className="ol-label on">ON</span><span className="ol-label off">OFF</span></span><span className="ol-thumb"><i></i></span></span>
  </button>;
}
