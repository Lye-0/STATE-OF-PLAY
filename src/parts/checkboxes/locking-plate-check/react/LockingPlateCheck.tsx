'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 二つの外の留め板で、四角い確認面の上下を保持するチェック。24pxの曲がった板は枠の外で重ね、内側へ装飾線を入れない。チェックと混在状態の線を中央の無地へ一つずつ表示し、文字とヒット領域を固定する。 */
const LockingPlateCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LockingPlateCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-locking-plate-check ${className}`}/>;});
export default LockingPlateCheck;
