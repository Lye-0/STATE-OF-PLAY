'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 選択面を左右の二本の顎で固定する。開いた候補では行全体が顎の間に収まる。 */
export default function HexBolsterSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-hex-bolster-select ${className}`}/>;
}
