'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 琥珀色のグリッドと、真空管のような発光。 */
const NixieCheck=forwardRef<HTMLInputElement,CheckboxProps>(function NixieCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-nixie-check ${className}`}/>;});
export default NixieCheck;
