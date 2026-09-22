'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** セージグリーンの柔らかなカプセル。次の操作へ。 */
const PillButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function PillButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>} className={`sop-pill-button ${className}`}/>;
});
export default PillButton;
