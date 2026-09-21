'use client';
import React, { type CSSProperties } from 'react';
import { useToggle, type ToggleProps } from './use-toggle';
import './styles.css';
const config = {
    "id": "eclipse",
    "name": "Eclipse",
    "initial": false,
    "stiffness": 155,
    "damping": 23,
    "tone": 330,
    "travel": 154
};
/** 月が滑り、静かな夜に朝焼けが満ちる。 */
export default function EclipseToggle(props: ToggleProps) {
    const { element, checked } = useToggle(config, props);
    const { checked: _checked, defaultChecked: _initial, onCheckedChange: _change, className = '', ...buttonProps } = props;
    return (<button {...buttonProps} ref={element} type="button" role="switch" aria-label={props['aria-label'] ?? 'Eclipse トグル'} aria-checked={checked} className={`sop-toggle sop-eclipse ${className}`}>
      <span aria-hidden="true" className="switch-art"><span className="eclipse-sky"><span className="eclipse-dawn"></span><span className="stars"><i style={{ "--x": "56%", "--y": "22%", "--s": "2px" } as CSSProperties}></i><i style={{ "--x": "70%", "--y": "40%", "--s": "3px" } as CSSProperties}></i><i style={{ "--x": "85%", "--y": "21%", "--s": "2px" } as CSSProperties}></i><i style={{ "--x": "63%", "--y": "65%", "--s": "2px" } as CSSProperties}></i><i style={{ "--x": "92%", "--y": "55%", "--s": "1px" } as CSSProperties}></i><i style={{ "--x": "47%", "--y": "42%", "--s": "1px" } as CSSProperties}></i><i style={{ "--x": "78%", "--y": "73%", "--s": "2px" } as CSSProperties}></i><i style={{ "--x": "34%", "--y": "19%", "--s": "2px" } as CSSProperties}></i></span><span className="sun-halo"></span><span className="eclipse-cloud c1"></span><span className="eclipse-cloud c2"></span><svg className="eclipse-landscape" viewBox="0 0 260 108"><path d="M0 100 22 85 42 89 69 72 94 86 130 54 160 76 180 62 224 88 240 75 260 88V108H0Z" fill="currentColor" opacity=".5"></path><path d="m0 108 45-18 30 7 49-13 30 8 47-13 59 25v4Z" fill="currentColor"></path></svg></span><span className="celestial-body"><span className="crater crater1"></span><span className="crater crater2"></span><span className="crater crater3"></span><span className="moon-shade"></span></span></span>
    </button>);
}
