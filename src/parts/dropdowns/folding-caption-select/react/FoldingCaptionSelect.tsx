'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 選択肢を一枚のカード索引へ分け、見出しと確定印を対角へ配置したブックプレート。 */
export default function FoldingCaptionSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-folding-caption-select ${className}`}/>;
}
