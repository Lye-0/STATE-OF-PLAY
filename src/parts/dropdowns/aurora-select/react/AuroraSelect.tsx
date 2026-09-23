'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 低彩度のガラス面が候補へ滑り、ポインター位置に反応して背景の光が変わる。文字を動かさず、透明な面だけを変化させる。 */
export default function AuroraSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-aurora-select ${className}`}/>;
}
