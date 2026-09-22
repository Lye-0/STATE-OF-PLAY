'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 説明を読みやすく配置した、汎用的な同意の入力。 */
const ConsentCheck=forwardRef<HTMLInputElement,CheckboxProps>(function ConsentCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-consent-check ${className}`}/>;});
export default ConsentCheck;
