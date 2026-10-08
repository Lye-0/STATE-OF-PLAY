'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 湾曲した航路の駅票を選ぶ。開いた面の左に連続するルートと選択駅を示す。 */
export default function CurvedInsetSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-curved-inset-select ${className}`}/>;
}
