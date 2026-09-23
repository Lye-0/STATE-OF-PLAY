'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 明るい灰白色のフィールドと薄い光学面。候補へ移動する背景面が文字を引き立て、細い側線が現在位置を示す。 */
export default function OpticSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-optic-select ${className}`}/>;
}
