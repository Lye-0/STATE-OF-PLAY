'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 封緘を下辺に置き、引くと折り目が開く。 */
const ClosureTabButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ClosureTabButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-closure-tab-button ${className}`}/>;
});
export default ClosureTabButton;
