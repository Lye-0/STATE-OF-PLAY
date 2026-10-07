'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 印章を下の独立した溝へ移し、動作状態の欄を空ける。 */
const SlidingSignetButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SlidingSignetButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-sliding-signet-button ${className}`}/>;
});
export default SlidingSignetButton;
