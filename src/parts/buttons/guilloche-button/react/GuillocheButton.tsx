'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 彫線を文字面の外へ分け、上下の曲線版が逆向きに滑る。 */
const GuillocheButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function GuillocheButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-guilloche-button ${className}`}/>;
});
export default GuillocheButton;
