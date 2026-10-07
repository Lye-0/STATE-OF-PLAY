'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 通常のフォームに使える明快なチェック。 */
const FormDefaultCheck=forwardRef<HTMLInputElement,CheckboxProps>(function FormDefaultCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-form-default-check ${className}`}/>;});
export default FormDefaultCheck;
