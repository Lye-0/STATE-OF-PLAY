'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 上下の横桟と左右の留め具に支えられた確認プレート。左右の留め具が閉じて状態を支え、中央のチェックと文字は動かさない。 */
const CrossbarCheck=forwardRef<HTMLInputElement,CheckboxProps>(function CrossbarCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-crossbar-check ${className}`}/>;});
export default CrossbarCheck;
