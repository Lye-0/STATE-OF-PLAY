'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 内壁を持つ白い磁器の確認皿。見出しは縁、確認内容は凹み、操作は手前の平面へ置く。 */
export default function LetterpressDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-letterpress-dialog ${className}`}/>;}
