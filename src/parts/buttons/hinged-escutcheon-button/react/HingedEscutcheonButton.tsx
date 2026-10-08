'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 固定した明るい押し面を、左右の蝶番と薄い翼で保持する金具。円筒の継ぎ目を残して翼だけが開き、文字と確認アイコンは移動しない。 */
const HingedEscutcheonButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function HingedEscutcheonButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-hinged-escutcheon-button ${className}`}/>;
});
export default HingedEscutcheonButton;
