'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 小さな軌道リングと、夜空のような深い青。 */
const OrbitButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function OrbitButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-orbit-button ${className}`}/>;
});
export default OrbitButton;
