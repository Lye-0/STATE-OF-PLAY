'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 斜めの小さな窓と直線の本文を分離し、選択の輪郭を強く出す。 */
const ObliqueCheck=forwardRef<HTMLInputElement,CheckboxProps>(function ObliqueCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-oblique-check ${className}`}/>;});
export default ObliqueCheck;
