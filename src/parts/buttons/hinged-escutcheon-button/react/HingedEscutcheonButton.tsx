'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 蝶番の二枚の翼が文字面の左右で持ち上がる。 */
const HingedEscutcheonButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function HingedEscutcheonButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-hinged-escutcheon-button ${className}`}/>;
});
export default HingedEscutcheonButton;
