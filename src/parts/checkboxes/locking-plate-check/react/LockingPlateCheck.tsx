'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 四角い留め板が閉じてチェックを固定する。文字とチェック記号を同じ位置に保つ。 */
const LockingPlateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LockingPlateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-locking-plate-check ${className}`}/>;});
export default LockingPlateCheck;
