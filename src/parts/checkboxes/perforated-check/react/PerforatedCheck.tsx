'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 切り取り線の内側にチェックを置き、選んだ項目を半券として示す。 */
const PerforatedCheck=forwardRef<HTMLInputElement,CheckboxProps>(function PerforatedCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-perforated-check ${className}`}/>;});
export default PerforatedCheck;
