'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 小さなラベルと密度の高い選択値を一枚の面に収める。44px以上の操作高さを保ち、候補の内容を優先する。 */
export default function DenseListSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-dense-list-select ${className}`}/>;
}
