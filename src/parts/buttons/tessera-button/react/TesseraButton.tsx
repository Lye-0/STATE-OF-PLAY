'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 曇りガラスの面が、フォーカスに応じて別々に光る。 */
const TesseraButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function TesseraButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-tessera-button ${className}`}/>;
});
export default TesseraButton;
