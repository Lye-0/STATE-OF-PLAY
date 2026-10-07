'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 行間を詰めても文字を読みやすく保つ、短い候補の選択欄。 */
export default function DenseListSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-dense-list-select ${className}`}/>;
}
