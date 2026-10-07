'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 小さな車窓のような値表示と、連結した角形の候補一覧。 */
export default function RailcarSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-railcar-select ${className}`}/>;
}
