'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 落ち着いた配色と読みやすい選択肢。日常の設定画面に自然になじむ。 */
export default function SlateSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-slate-select ${className}`}/>;
}
