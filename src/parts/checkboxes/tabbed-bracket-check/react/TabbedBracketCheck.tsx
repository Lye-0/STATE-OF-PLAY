'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 二枚の括弧がチェック面を閉じる。チェックが主役になるよう、追加の丸い選択印を使わない。 */
const TabbedBracketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TabbedBracketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-tabbed-bracket-check ${className}`}/>;});
export default TabbedBracketCheck;
