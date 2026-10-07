'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 左右の金具が浅く開き、中央の操作名を囲む額縁に変わる。 */
const HingedEscutcheonButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function HingedEscutcheonButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-hinged-escutcheon-button ${className}`}/>;
});
export default HingedEscutcheonButton;
