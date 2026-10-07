'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 切り落とした端と厚みのある留め具で、精密な道具の選択欄にする。 */
export default function HexBolsterSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-hex-bolster-select ${className}`}/>;
}
