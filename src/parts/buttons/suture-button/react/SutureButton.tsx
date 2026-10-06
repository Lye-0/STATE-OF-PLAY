'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 細い縫い目で包んだ布の面が、触れると柔らかく張る。 */
const SutureButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SutureButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-suture-button ${className}`}/>;
});
export default SutureButton;
