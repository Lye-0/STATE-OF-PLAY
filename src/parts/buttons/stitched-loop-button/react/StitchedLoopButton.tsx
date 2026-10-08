'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 左側の革のループを二つの小さな留めで紙布の面へ縫い付ける。ループの穴・縫い目・取り付け点を分け、ホバーでは革だけがしなる。 */
const StitchedLoopButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function StitchedLoopButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-stitched-loop-button ${className}`}/>;
});
export default StitchedLoopButton;
