'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 革のループを思わせる湾曲した枠。 */
const SaddleLoopCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SaddleLoopCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-saddle-loop-check ${className}`}/>;});
export default SaddleLoopCheck;
