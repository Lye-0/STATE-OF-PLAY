'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 広いラベル面と矢尻形の先端が、実行の向きを明確にする。 */
const ArrowheadButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function ArrowheadButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-arrowhead-button ${className}`}/>;
});
export default ArrowheadButton;
