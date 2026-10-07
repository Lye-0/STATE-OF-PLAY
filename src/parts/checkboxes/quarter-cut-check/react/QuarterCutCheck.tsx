'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四隅を異なる大きさで切り欠いた枠。 */
const QuarterCutCheck=forwardRef<HTMLInputElement,CheckboxProps>(function QuarterCutCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-quarter-cut-check ${className}`}/>;});
export default QuarterCutCheck;
