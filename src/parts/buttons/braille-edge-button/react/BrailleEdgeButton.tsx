'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 点列を下部の押圧計に集約し、接近に合わせて順に浮かせる。 */
const BrailleEdgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BrailleEdgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-braille-edge-button ${className}`}/>;
});
export default BrailleEdgeButton;
