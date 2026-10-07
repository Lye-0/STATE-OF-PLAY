'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 中央を沈めた稜線に光を走らせ、金属の凹みを表現する。 */
const InvertedRidgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function InvertedRidgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-inverted-ridge-button ${className}`}/>;
});
export default InvertedRidgeButton;
