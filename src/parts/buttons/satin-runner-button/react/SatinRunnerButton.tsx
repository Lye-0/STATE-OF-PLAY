'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** サテンの左右の折り輪を小さな巻き結びへつなぎ、中央の平たい帯へ文字を置く。ホバーでは輪がしなり、本文面の色と位置は変わらない。 */
const SatinRunnerButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SatinRunnerButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-satin-runner-button ${className}`}/>;
});
export default SatinRunnerButton;
