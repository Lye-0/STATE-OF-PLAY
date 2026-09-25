'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 日常のフォームになじむ、ニュートラルなチェック。 */
const LgcCheckboxesLens=forwardRef<HTMLInputElement,CheckboxProps>(function LgcCheckboxesLens({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`lgc-root sop-lgc-checkboxes-lens ${className}`}/>;});
export default LgcCheckboxesLens;
