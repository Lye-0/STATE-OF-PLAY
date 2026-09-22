'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 強すぎない赤の面。破壊的操作の意味を伝える。 */
const DangerButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function DangerButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/></svg>} className={`sop-danger-button ${className}`}/>;
});
export default DangerButton;
