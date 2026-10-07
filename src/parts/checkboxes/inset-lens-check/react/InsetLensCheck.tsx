'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** レンズの四角い支持枠を絞る。 */
const InsetLensCheck=forwardRef<HTMLInputElement,CheckboxProps>(function InsetLensCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-inset-lens-check ${className}`}/>;});
export default InsetLensCheck;
