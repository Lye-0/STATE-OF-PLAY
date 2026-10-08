'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 紙の断面をずらして綴じた選択帳。輪が背と各候補の穿孔をまたぎ、選択した紙の綴じ線だけを銅色にする。文字を動かさず、紙の層と接合を見せる。 */
export default function InterleaveSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-interleave-select ${className}`}/>;
}
