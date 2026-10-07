'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 金属の窪みに収めた小さなレンズ。 */
const InsetLensCheck=forwardRef<HTMLInputElement,CheckboxProps>(function InsetLensCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-inset-lens-check ${className}`}/>;});
export default InsetLensCheck;
