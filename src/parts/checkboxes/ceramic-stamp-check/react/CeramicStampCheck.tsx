'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 陶製スタンプの浅い凹み。チェック時に外周が沈み、白い底面に記号が現れる。 */
const CeramicStampCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CeramicStampCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ceramic-stamp-check ${className}`}/>;});
export default CeramicStampCheck;
