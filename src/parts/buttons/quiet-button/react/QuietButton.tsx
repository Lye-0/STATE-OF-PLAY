'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 読みやすい文字と、控えめな奥行きの基本ボタン。 */
const QuietButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function QuietButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-quiet-button ${className}`}/>;
});
export default QuietButton;
