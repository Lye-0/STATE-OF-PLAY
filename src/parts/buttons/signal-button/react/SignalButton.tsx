'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 細いグリーンの走査線と、順番に立ち上がるピクセル。 */
const SignalButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SignalButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-signal-button ${className}`}/>;
});
export default SignalButton;
