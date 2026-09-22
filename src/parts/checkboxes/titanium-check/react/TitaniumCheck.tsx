'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 切削痕と刻印を持つ、金属のプッシュプレート。 */
const TitaniumCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TitaniumCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-titanium-check ${className}`}/>;});
export default TitaniumCheck;
