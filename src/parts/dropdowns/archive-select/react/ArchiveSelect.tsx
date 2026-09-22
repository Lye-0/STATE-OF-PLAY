'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 分類ラベルとタブ。静かな資料室から目的の記録を取り出す。 */
export default function ArchiveSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-archive-select ${className}`}/>;
}
