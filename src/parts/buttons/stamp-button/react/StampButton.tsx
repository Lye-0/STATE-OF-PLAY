'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 厚い朱色の印面と内側の二重枠。印を押す手触り。 */
const StampButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function StampButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-stamp-button ${className}`}/>;
});
export default StampButton;
