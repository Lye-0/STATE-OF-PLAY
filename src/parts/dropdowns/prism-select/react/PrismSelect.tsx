'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 切り欠きのある半透明の背景面。候補へ移ると淡い分光と輪郭が動き、内容を包む形が変わる。 */
export default function PrismSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-prism-select ${className}`}/>;
}
