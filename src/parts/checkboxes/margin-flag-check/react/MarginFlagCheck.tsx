'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 余白の旗が選択面の下へ折れる。 */
const MarginFlagCheck=forwardRef<HTMLInputElement,CheckboxProps>(function MarginFlagCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-margin-flag-check ${className}`}/>;});
export default MarginFlagCheck;
