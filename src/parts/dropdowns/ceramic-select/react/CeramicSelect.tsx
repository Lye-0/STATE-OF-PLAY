'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 白い磁器の滑らかな面。丸い背景が候補に沿って滑り、浅い影と明るい縁が操作面を示す。 */
export default function CeramicSelect({className='',...props}:SelectProps){
 return <SelectView autoIcon={false} showHeading={false} showHints={false} {...props} className={`sop-select-sculpted sop-ceramic-select ${className}`}/>;
}
