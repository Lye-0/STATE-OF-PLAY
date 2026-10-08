'use client';
import React, {forwardRef} from 'react';
import {ActionButtonView,type ActionButtonProps} from '../../../../shared/action-button-view';
import '../styles.css';
export type {ActionButtonProps} from '../../../../shared/action-button-view';
/** サテンの結び目を文字の左右へ分け、帯の張力を押下で緩める。ストライプの繰り返しを廃止。 */
const SatinRunnerButton=forwardRef<HTMLButtonElement,ActionButtonProps>(function SatinRunnerButton({className='',icon,...props},ref){
 return <ActionButtonView {...props} ref={ref} icon={icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6"/></svg>} className={`sop-satin-runner-button ${className}`}/>;
});
export default SatinRunnerButton;
