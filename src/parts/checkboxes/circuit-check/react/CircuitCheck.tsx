'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 基板のラインと接点が結ぶ、緑のチェック。 */
const CircuitCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CircuitCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-circuit-check ${className}`}/>;});
export default CircuitCheck;
