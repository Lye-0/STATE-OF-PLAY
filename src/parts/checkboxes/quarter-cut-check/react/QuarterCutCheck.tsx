'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 切削した四分の一の面が角へ収納される。 */
const QuarterCutCheck=forwardRef<HTMLInputElement,CheckboxProps>(function QuarterCutCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-quarter-cut-check ${className}`}/>;});
export default QuarterCutCheck;
