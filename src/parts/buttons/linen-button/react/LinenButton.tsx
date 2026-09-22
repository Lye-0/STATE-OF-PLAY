'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 紙の色と、温かいグレーの境界。明るい画面にも。 */
const LinenButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function LinenButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-linen-button ${className}`}/>;
});
export default LinenButton;
