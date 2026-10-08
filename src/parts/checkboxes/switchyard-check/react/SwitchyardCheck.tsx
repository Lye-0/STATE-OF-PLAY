'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 分岐器の切替を外側のレールで表す。操作は四角いチェック一つに保つ。 */
const SwitchyardCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SwitchyardCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-switchyard-check ${className}`}/>;});
export default SwitchyardCheck;
