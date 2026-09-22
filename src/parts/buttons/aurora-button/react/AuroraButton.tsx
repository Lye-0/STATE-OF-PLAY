'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 夜の面を泳ぐ緑と紫の光。文字は静止したまま。 */
const AuroraButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function AuroraButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-aurora-button ${className}`}/>;
});
export default AuroraButton;
