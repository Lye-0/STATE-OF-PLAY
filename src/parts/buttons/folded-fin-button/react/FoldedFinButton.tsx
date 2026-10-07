'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 側面の羽根が横へ折れ、中央の平面から厚みが現れる。 */
const FoldedFinButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function FoldedFinButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-folded-fin-button ${className}`}/>;
});
export default FoldedFinButton;
