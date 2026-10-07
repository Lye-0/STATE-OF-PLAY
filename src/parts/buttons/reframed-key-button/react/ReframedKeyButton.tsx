'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 離れた角の線が近づき、操作の瞬間だけ輪郭を完成させる。 */
const ReframedKeyButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ReframedKeyButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-reframed-key-button ${className}`}/>;
});
export default ReframedKeyButton;
