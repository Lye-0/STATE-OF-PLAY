'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** プリズムの稜を左右へ開く押し面。光の面を文字の外へ分け、中央の行は水平に保つ。 */
const PrismaticCutButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function PrismaticCutButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-prismatic-cut-button ${className}`}/>;
});
export default PrismaticCutButton;
