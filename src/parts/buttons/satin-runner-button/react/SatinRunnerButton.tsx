'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** 無地の文字面の上下を、短いサテンの光が静かに行き来する。 */
const SatinRunnerButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SatinRunnerButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-satin-runner-button ${className}`}/>;
});
export default SatinRunnerButton;
