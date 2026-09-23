'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 方眼と発光する信号色。小さな計測器のような選択インターフェース。 */
export default function SpectrumSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-select-sculpted sop-spectrum-select ${className}`}/>;
}
