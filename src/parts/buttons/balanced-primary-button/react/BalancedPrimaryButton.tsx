'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 明るい文字と控えめな影で、主操作を素直に示す。 */
const BalancedPrimaryButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BalancedPrimaryButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-balanced-primary-button ${className}`}/>;
});
export default BalancedPrimaryButton;
