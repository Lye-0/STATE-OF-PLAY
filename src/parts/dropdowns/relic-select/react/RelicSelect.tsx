'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 古い真鍮の縁と打刻番号。収蔵品を選ぶ引き出しのようなメニュー。 */
export default function RelicSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-select-sculpted sop-relic-select ${className}`}/>;
}
