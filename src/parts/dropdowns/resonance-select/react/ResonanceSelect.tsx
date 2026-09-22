'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 木目と真鍮色のパネル。アルバムのような選択肢を一曲ずつ。 */
export default function ResonanceSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-resonance-select ${className}`}/>;
}
