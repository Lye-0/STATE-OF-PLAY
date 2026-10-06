'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 柔らかな正方形のクッションが、確認に合わせて押し込まれる。 */
const CushionCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CushionCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-cushion-check ${className}`}/>;});
export default CushionCheck;
