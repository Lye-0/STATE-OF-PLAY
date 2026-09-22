'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 日常のフォームになじむ、ニュートラルなチェック。 */
const EssentialCheck=forwardRef<HTMLInputElement,CheckboxProps>(function EssentialCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-essential-check ${className}`}/>;});
export default EssentialCheck;
