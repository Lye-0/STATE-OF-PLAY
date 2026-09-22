'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 淡い選択面と丸い輪郭の、控えめなチェック。 */
const SoftCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SoftCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-soft-check ${className}`}/>;});
export default SoftCheck;
