'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 二本の線で吊られた切欠き札が、一本ずつ横桟へつながる選択列。穴・吊り線・レールを連続させ、選択札の線を暖かい金属色で示す。札と文字は固定する。 */
export default function RailcarSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-railcar-select ${className}`}/>;
}
