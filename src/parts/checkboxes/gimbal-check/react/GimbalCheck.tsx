'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 円環の中の角形チェック。 */
const GimbalCheck=forwardRef<HTMLInputElement,CheckboxProps>(function GimbalCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-gimbal-check ${className}`}/>;});
export default GimbalCheck;
