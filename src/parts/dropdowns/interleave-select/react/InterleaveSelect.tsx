'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 重なる紙を展開すると候補が一枚ずつ独立するインターリーブ。選択紙だけが綴じ位置へ接続。 */
export default function InterleaveSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-interleave-select ${className}`}/>;
}
