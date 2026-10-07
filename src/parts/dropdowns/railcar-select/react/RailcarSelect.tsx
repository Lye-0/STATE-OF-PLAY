'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 客車の窓を縦に接続し、選んだ駅に梁が合う。 */
export default function RailcarSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-railcar-select ${className}`}/>;
}
