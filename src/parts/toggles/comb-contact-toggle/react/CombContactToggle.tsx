'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "comb-contact-toggle",
  "name": "Comb Contact Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 62
};
/** 三つの銅の歯と銀の歯が、交互の高さを保って噛み合う接点。閉じた箱を省き、接合する端部と固定した状態目盛りを読みやすく分ける。 */
export default function CombContactToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Comb Contact Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-comb-contact-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
