'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 細い弾性の縁が広がる、アイボリーの浮いた操作面。 */
const IvoryGasketButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function IvoryGasketButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-ivory-gasket-button ${className}`}/>;
});
export default IvoryGasketButton;
