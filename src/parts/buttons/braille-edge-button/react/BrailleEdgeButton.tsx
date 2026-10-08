'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 左の五つの留め金が、押し面の切欠きをまたいで鋲でつながる。留め板と本文の輪郭を噛み合わせ、点を側帯へ足すだけではなく、保持している面と接合を見せる。 */
const BrailleEdgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function BrailleEdgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-braille-edge-button ${className}`}/>;
});
export default BrailleEdgeButton;
