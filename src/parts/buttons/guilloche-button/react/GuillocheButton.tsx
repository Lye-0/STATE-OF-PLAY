'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 細かな彫線が奥だけでずれ、中央の文字面は落ち着いて残る。 */
const GuillocheButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function GuillocheButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-guilloche-button ${className}`}/>;
});
export default GuillocheButton;
