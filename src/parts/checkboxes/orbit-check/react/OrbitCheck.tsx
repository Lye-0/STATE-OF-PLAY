'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 浮かぶ球体と傾いた軌道が、選択を囲む。 */
const OrbitCheck=forwardRef<HTMLInputElement,CheckboxProps>(function OrbitCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-orbit-check ${className}`}/>;});
export default OrbitCheck;
