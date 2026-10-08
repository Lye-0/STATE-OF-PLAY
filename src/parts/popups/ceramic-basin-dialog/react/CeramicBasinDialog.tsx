'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 帳簿の照合画面。見出しと操作欄を太い罫線で挟み、確認事項を一つの記入欄として見せる。 */
export default function CeramicBasinDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ceramic-basin-dialog ${className}`}/>;}
