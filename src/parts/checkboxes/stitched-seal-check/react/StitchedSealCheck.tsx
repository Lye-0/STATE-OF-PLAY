'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 布の封印がチェック面を縫い留める。チェックを塗りつぶす代わりに周囲の糸が締まる。 */
const StitchedSealCheck=forwardRef<HTMLInputElement,CheckboxProps>(function StitchedSealCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-stitched-seal-check ${className}`}/>;});
export default StitchedSealCheck;
