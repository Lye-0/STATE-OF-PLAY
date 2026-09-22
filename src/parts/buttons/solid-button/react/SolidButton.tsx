'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 穏やかなインディゴ。画面の主要操作を明確に。 */
const SolidButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SolidButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-solid-button ${className}`}/>;
});
export default SolidButton;
