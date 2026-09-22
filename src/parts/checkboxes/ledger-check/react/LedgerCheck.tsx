'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 罫線の上へ、ペンで記したような選択。 */
const LedgerCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LedgerCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ledger-check ${className}`}/>;});
export default LedgerCheck;
