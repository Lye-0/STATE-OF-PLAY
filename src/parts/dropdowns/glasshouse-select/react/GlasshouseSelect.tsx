'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 植物の標本札を思わせる選択肢。透き通る葉色と細い輪郭。 */
export default function GlasshouseSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-glasshouse-select ${className}`}/>;
}
