'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 乗車券の切り取り線と時刻。開いた先まで旅行の気配が続く。 */
export default function TransitSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-transit-select ${className}`}/>;
}
