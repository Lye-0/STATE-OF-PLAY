'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 階段状の受け座がチェック面へ上がる。単一の記号で状態を読み取れる構造。 */
const LadderSeatCheck=forwardRef<HTMLInputElement,CheckboxProps>(function LadderSeatCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-ladder-seat-check ${className}`}/>;});
export default LadderSeatCheck;
