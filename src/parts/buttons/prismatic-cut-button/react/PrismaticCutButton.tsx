'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 片側の斜面にだけ光が寄り、切削した塊の厚みを見せる。 */
const PrismaticCutButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function PrismaticCutButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-prismatic-cut-button ${className}`}/>;
});
export default PrismaticCutButton;
