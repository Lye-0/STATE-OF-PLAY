'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 等高線と氷の青。地形を読みながら道筋を選ぶナビゲーション。 */
export default function FjordSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-select-sculpted sop-fjord-select ${className}`}/>;
}
