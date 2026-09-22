'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 白いフォームや設定画面へ自然に置ける入力。 */
const PaperCheck=forwardRef<HTMLInputElement,CheckboxProps>(function PaperCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-paper-check ${className}`}/>;});
export default PaperCheck;
