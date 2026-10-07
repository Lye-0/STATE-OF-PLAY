'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 棚板の上に候補を置き、選択した棚だけ内側の面が開く。 */
export default function ShelfBaySelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-shelf-bay-select ${className}`}/>;
}
