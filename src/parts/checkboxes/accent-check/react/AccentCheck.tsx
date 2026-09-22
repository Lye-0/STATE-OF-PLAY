'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 小さなアクセント色で、選択をはっきり示す。 */
const AccentCheck=forwardRef<HTMLInputElement,CheckboxProps>(function AccentCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-accent-check ${className}`}/>;});
export default AccentCheck;
