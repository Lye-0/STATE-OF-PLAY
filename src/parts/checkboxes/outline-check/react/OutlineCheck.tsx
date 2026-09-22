'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 塗りを抑えた、輪郭中心のチェックボックス。 */
const OutlineCheck=forwardRef<HTMLInputElement,CheckboxProps>(function OutlineCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-outline-check ${className}`}/>;});
export default OutlineCheck;
