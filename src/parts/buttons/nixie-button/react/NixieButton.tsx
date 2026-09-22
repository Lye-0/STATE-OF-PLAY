'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 橙の文字、ガラスの奥の配線、側面の冷却フィン。 */
const NixieButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function NixieButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-nixie-button ${className}`}/>;
});
export default NixieButton;
