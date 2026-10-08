'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** レンズ状の厚い外壁と平たい四角い確認面。確定時は外壁に光が集まる。 */
const InsetLensCheck=forwardRef<HTMLInputElement,CheckboxProps>(function InsetLensCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-inset-lens-check ${className}`}/>;});
export default InsetLensCheck;
