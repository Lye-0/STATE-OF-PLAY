'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 一枚のフォーム面に小さなラベルと選択値をまとめる。説明は読みやすく、操作面を主役にする。 */
export default function EverydaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-everyday-select ${className}`}/>;
}
