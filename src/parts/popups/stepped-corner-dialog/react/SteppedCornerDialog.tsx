'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 大きい索引と内容の二段組。短い確認文でも情報の優先順位が明確な編集的な画面。 */
export default function SteppedCornerDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-stepped-corner-dialog ${className}`}/>;}
