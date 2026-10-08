'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 固定した銀青の押し面の下で、二つの折返しが中央の深い稜へ集まる。外側の端より中央が下へ出るV字の輪郭を作り、文字面を動かさず両側の折り面だけを反らせる。 */
const InvertedRidgeButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function InvertedRidgeButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-inverted-ridge-button ${className}`}/>;
});
export default InvertedRidgeButton;
