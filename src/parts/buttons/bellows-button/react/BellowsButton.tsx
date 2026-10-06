'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 折り畳んだ金属の側面が、押下に合わせて縮む。 */
const BellowsButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BellowsButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-bellows-button ${className}`}/>;
});
export default BellowsButton;
