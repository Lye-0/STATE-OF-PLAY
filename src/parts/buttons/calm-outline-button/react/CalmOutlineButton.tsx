'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 輪郭だけで主張を抑え、副操作として使いやすいボタン。 */
const CalmOutlineButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function CalmOutlineButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-calm-outline-button ${className}`}/>;
});
export default CalmOutlineButton;
