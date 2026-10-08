'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 小包の左右の折り込みと下のV字の口で、候補の紙を保持する選択欄。選択した口だけを深いクラフト色へ変え、読む面と折り返しの場所を分離する。 */
export default function ThumbIndexSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-thumb-index-select ${className}`}/>;
}
