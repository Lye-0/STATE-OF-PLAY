'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 梯子の桟が選択済みの面を支える。 */
const LadderSeatCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LadderSeatCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ladder-seat-check ${className}`}/>;});
export default LadderSeatCheck;
