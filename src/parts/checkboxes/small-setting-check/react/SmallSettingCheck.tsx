'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 小さな設定行向けのチェック。 */
const SmallSettingCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SmallSettingCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-small-setting-check ${className}`}/>;});
export default SmallSettingCheck;
