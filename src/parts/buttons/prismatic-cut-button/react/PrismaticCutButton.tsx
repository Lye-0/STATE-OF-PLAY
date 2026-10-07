'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 切削面の三角形が押す方向へ折れ、上面を明快に残す。 */
const PrismaticCutButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function PrismaticCutButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-prismatic-cut-button ${className}`}/>;
});
export default PrismaticCutButton;
