'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 両側の梯子に選択面を掛ける。 */
const LadderSeatCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LadderSeatCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ladder-seat-check ${className}`}/>;});
export default LadderSeatCheck;
