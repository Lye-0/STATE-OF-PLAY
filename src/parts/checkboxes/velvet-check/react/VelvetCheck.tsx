'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 深い布の陰影に、細い金糸のチェック。 */
const VelvetCheck=forwardRef<HTMLInputElement,CheckboxProps>(function VelvetCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-velvet-check ${className}`}/>;});
export default VelvetCheck;
