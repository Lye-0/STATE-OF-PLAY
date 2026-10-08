'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 革のループが四角いチェック面の下を通る。選択するとループが張り、記号を保持。 */
const SaddleLoopCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SaddleLoopCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-saddle-loop-check ${className}`}/>;});
export default SaddleLoopCheck;
