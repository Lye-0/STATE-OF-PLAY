'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 横桟が四角い面の下で閉じる。 */
const CrossbarCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CrossbarCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-crossbar-check ${className}`}/>;});
export default CrossbarCheck;
