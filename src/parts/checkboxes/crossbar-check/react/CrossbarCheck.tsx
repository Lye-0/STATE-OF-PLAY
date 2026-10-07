'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 交差する留め具の中心にチェック。 */
const CrossbarCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CrossbarCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-crossbar-check ${className}`}/>;});
export default CrossbarCheck;
