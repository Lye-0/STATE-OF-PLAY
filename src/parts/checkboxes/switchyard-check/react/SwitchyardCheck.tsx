'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 枕木と連続するレールの上に確認プレートを置き、下の分岐レバーで状態を表す。チェックの位置を固定し、レバーだけを滑らかに接続する。 */
const SwitchyardCheck=forwardRef<HTMLInputElement,CheckboxProps>(function SwitchyardCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-switchyard-check ${className}`}/>;});
export default SwitchyardCheck;
