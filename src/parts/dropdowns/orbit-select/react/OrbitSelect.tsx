'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 深い夜の選択肢に軌道番号が浮かぶ、静かな航行パネル。 */
export default function OrbitSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-select-sculpted sop-orbit-select ${className}`}/>;
}
