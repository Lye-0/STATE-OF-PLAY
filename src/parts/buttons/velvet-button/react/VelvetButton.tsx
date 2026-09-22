'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 深いワイン色、縫い目の縁、真鍮の小さな矢印。 */
const VelvetButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function VelvetButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-velvet-button ${className}`}/>;
});
export default VelvetButton;
