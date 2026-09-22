'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 細かな製図線と寸法目盛りを持つチェック。 */
const BlueprintCheck=forwardRef<HTMLInputElement,CheckboxProps>(function BlueprintCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-blueprint-check ${className}`}/>;});
export default BlueprintCheck;
