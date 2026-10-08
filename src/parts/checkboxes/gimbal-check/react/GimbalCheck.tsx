'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 固定された確認面を、二つの外の軸と細い支持枠で保持するジンバルのチェック。元の回る四角い枠を残し、金色と発光を除いて1pxの支持と8pxの軸へ絞る。確定すると支持枠だけが整列し、native欄と文字と記号は回転しない。 */
const GimbalCheck=forwardRef<HTMLInputElement,CheckboxProps>(function GimbalCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-gimbal-check ${className}`}/>;});
export default GimbalCheck;
