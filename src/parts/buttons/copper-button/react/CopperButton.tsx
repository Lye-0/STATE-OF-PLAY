'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 磨いた銅と四隅のリベット。厚みのある押下感。 */
const CopperButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function CopperButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-copper-button ${className}`}/>;
});
export default CopperButton;
