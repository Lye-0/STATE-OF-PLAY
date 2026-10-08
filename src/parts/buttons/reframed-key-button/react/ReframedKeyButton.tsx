'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 左右のクランプが固定した押し面を締める。押下と締結の向きを一致させる。 */
const ReframedKeyButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ReframedKeyButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-reframed-key-button ${className}`}/>;
});
export default ReframedKeyButton;
