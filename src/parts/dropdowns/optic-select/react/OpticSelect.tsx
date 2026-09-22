'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** レンズのリングと精密な目盛り。撮影モードを選ぶ光学機器のようなUI。 */
export default function OpticSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-optic-select ${className}`}/>;
}
