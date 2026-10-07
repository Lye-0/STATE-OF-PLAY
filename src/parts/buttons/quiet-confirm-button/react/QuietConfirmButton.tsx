'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 丸い隅と低い明暗差で、フォーム末尾に置きやすい確認ボタン。 */
const QuietConfirmButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function QuietConfirmButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-quiet-confirm-button ${className}`}/>;
});
export default QuietConfirmButton;
