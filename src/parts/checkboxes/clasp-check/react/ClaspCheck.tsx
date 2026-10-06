'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四角い留め具が押さえ込まれ、確認した項目を固定する。 */
const ClaspCheck=forwardRef<HTMLInputElement,CheckboxProps>(function ClaspCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-clasp-check ${className}`}/>;});
export default ClaspCheck;
