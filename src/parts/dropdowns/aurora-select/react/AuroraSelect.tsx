'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 光の帯と透ける選択肢。穏やかな色の移ろいをまとったメニュー。 */
export default function AuroraSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-aurora-select ${className}`}/>;
}
