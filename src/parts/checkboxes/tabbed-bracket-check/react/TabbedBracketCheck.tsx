'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 折れた小口を持つ二枚の括弧で、固定された確認面を左右から保持するチェック。15pxの幅と上下の斜めの折返しを実輪郭に作り、確定時は括弧だけが2px内側へ寄る。チェックと混在線、文字とnativeの押し面は動かさない。 */
const TabbedBracketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TabbedBracketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-tabbed-bracket-check ${className}`}/>;});
export default TabbedBracketCheck;
