'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 紙の索引を選択欄の横へ広げる。候補の大きい符号を独立した索引列に置く。 */
export default function ShelfBaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-shelf-bay-select ${className}`}/>;
}
