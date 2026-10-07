'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 外枠と浅い内側のカーブで、陶器の器を選ぶような感触をつくる。 */
export default function CurvedInsetSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-curved-inset-select ${className}`}/>;
}
