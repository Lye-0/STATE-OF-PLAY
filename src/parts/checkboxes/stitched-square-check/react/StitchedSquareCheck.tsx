'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 小さな布の四隅を縫い留め、チェックが縫い目の内側に収まる。 */
const StitchedSquareCheck=forwardRef<HTMLInputElement,CheckboxProps>(function StitchedSquareCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-stitched-square-check ${className}`}/>;});
export default StitchedSquareCheck;
