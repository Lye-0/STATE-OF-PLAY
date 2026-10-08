'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 折った見出しを差し込む選択欄。対角の二つの金属の角帽子が紙端の外側から上面へ回り込み、厚い唇で一枚を保持する。選択印と角帽子の濃さを連動し、本文は動かさない。 */
export default function FoldingCaptionSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-folding-caption-select ${className}`}/>;
}
