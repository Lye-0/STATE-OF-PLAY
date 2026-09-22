'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 厚いガラスの縁と、奥を泳ぐ水色の光。 */
const LiquidButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function LiquidButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-liquid-button ${className}`}/>;
});
export default LiquidButton;
