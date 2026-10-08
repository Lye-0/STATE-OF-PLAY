'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 布の背を通る縫い線へ、小さな折った留め帯で各候補を接続する選択カバー。淡い布の本文と、背へつながるタブを分け、確定印を縫い付けた小片として示す。 */
export default function MarginaliaSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-marginalia-select ${className}`}/>;
}
