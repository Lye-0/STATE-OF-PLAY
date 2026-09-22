'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 乳白色のふくらみに、青緑の印が浮かぶ。 */
const PorcelainCheck=forwardRef<HTMLInputElement,CheckboxProps>(function PorcelainCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-porcelain-check ${className}`}/>;});
export default PorcelainCheck;
