'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 磁器の押印面が枠の中へ沈む。 */
const CeramicStampCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CeramicStampCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ceramic-stamp-check ${className}`}/>;});
export default CeramicStampCheck;
