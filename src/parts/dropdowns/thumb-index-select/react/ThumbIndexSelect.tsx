'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 折った小包の口から選択面が現れる。候補を段として分け、選択行の折り返しを閉じる。 */
export default function ThumbIndexSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-thumb-index-select ${className}`}/>;
}
