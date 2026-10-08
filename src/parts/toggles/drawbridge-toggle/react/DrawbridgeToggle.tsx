'use client';
import React, { type CSSProperties } from 'react';
import { useSimpleToggle, type SimpleToggleProps } from '../../../../shared/use-simple-toggle';
import '../styles.css';
const config = {
  "id": "drawbridge-toggle",
  "name": "Drawbridge Toggle",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 72
};
/** 二枚の橋桁が支点から下り、ONで中央の銅の継手を閉じる跳ね橋。空いた水路と接続した通路の違いを、固定の状態目盛りと併せて示す。 */
export default function DrawbridgeToggle(props: SimpleToggleProps) {
  const {element, checked} = useSimpleToggle(config, props);
  const {checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps} = props;
  return <button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Drawbridge Toggle トグル'} aria-checked={checked} className={`sop-toggle sop-drawbridge-toggle ${className}`}>
    <span className="switch-art" aria-hidden="true"><span className="x-bed"></span><span className="x-piece"></span><span className="x-sign"></span><span className="x-detail"></span><span className="x-labels"><span>OFF</span><span>ON</span></span></span>
</button>;
}
