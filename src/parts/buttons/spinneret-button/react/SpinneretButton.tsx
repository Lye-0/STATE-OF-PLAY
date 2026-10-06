'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 小さな糸巻きの軸がラベルの脇で回り、押下の手応えを伝える。 */
const SpinneretButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SpinneretButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-spinneret-button ${className}`}/>;
});
export default SpinneretButton;
