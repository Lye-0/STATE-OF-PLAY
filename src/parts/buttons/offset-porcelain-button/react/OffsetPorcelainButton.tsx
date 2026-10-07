'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 二枚の薄い陶板の段差が縮み、押すための面が定まる。 */
const OffsetPorcelainButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function OffsetPorcelainButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-offset-porcelain-button ${className}`}/>;
});
export default OffsetPorcelainButton;
