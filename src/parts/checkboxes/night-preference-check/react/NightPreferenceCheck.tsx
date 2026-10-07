'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 暗い環境でも境界を読めるチェック。 */
const NightPreferenceCheck=forwardRef<HTMLInputElement,CheckboxProps>(function NightPreferenceCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-night-preference-check ${className}`}/>;});
export default NightPreferenceCheck;
