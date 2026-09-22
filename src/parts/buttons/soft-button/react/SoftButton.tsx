'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 淡いラベンダーと、優しい丸みの低強調ボタン。 */
const SoftButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SoftButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14"/></svg>} className={`sop-soft-button ${className}`}/>;
});
export default SoftButton;
