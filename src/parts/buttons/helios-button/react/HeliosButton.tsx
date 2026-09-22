'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 重なった日輪と、琥珀色の縁。押すと光が沈み込む。 */
const HeliosButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function HeliosButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-helios-button ${className}`}/>;
});
export default HeliosButton;
