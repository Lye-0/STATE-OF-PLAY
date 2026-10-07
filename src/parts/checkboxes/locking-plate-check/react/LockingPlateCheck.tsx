'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 留め板の二枚の扉が閉じる。 */
const LockingPlateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LockingPlateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-locking-plate-check ${className}`}/>;});
export default LockingPlateCheck;
