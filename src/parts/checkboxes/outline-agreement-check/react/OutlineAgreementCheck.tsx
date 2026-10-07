'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 契約や同意の文章に添える輪郭。 */
const OutlineAgreementCheck=forwardRef<HTMLInputElement,CheckboxProps>(function OutlineAgreementCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-outline-agreement-check ${className}`}/>;});
export default OutlineAgreementCheck;
