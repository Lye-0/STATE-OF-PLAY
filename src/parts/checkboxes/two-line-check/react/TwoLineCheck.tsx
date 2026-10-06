'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** チェック・タイトル・補足を揃え、長い説明でも読めるフォーム項目。 */
const TwoLineCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TwoLineCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-two-line-check ${className}`}/>;});
export default TwoLineCheck;
