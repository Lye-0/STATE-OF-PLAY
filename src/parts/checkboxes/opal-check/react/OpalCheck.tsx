'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 淡い干渉色が現れる、オパールのレンズ。 */
const OpalCheck=forwardRef<HTMLInputElement,CheckboxProps>(function OpalCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-opal-check ${className}`}/>;});
export default OpalCheck;
