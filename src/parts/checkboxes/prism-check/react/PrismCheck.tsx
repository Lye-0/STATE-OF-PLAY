'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 六角形の結晶に浮かぶ、スペクトルのチェック。 */
const PrismCheck=forwardRef<HTMLInputElement,CheckboxProps>(function PrismCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-prism-check ${className}`}/>;});
export default PrismCheck;
