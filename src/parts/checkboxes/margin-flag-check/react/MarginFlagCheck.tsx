'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 余白に貼った小さな旗。 */
const MarginFlagCheck=forwardRef<HTMLInputElement,CheckboxProps>(function MarginFlagCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-margin-flag-check ${className}`}/>;});
export default MarginFlagCheck;
