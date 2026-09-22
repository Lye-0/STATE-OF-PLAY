'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 淡いオーロラを閉じ込めたガラスのチェック。 */
const AuroraCheck=forwardRef<HTMLInputElement,CheckboxProps>(function AuroraCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-aurora-check ${className}`}/>;});
export default AuroraCheck;
