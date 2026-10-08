'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 固定チェック面を外側の支持枠が回って保持。内側の四角と記号は回転しない。 */
const GimbalCheck=forwardRef<HTMLInputElement,CheckboxProps>(function GimbalCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-gimbal-check ${className}`}/>;});
export default GimbalCheck;
