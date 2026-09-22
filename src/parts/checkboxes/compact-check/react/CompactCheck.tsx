'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 密度の高い一覧やフィルター向けのチェック。 */
const CompactCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CompactCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-compact-check ${className}`}/>;});
export default CompactCheck;
