'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 表紙のような選択肢と、静かな余白。読む時間を選ぶ書棚。 */
export default function NocturneSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-nocturne-select ${className}`}/>;
}
