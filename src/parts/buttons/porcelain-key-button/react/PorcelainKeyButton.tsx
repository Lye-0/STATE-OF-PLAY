'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 小さな磁器のキーが、文字を囲む縁と押し込みの影を持つ。 */
const PorcelainKeyButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function PorcelainKeyButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-porcelain-key-button ${className}`}/>;
});
export default PorcelainKeyButton;
