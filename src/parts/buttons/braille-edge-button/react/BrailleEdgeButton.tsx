'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 押下で一列の鋲が沈む計器キー。小点を飾りにせず、押された面の境界として使う。 */
const BrailleEdgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BrailleEdgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-braille-edge-button ${className}`}/>;
});
export default BrailleEdgeButton;
