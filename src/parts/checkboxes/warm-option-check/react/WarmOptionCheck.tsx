'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 柔らかな紙色の選択欄。 */
const WarmOptionCheck=forwardRef<HTMLInputElement,CheckboxProps>(function WarmOptionCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-warm-option-check ${className}`}/>;});
export default WarmOptionCheck;
