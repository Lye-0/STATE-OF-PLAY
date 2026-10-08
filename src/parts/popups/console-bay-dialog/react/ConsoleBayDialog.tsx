'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 制御卓の承認画面。暗い外装と明るい確認領域を分け、主操作を装置の固定キーにする。 */
export default function ConsoleBayDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-console-bay-dialog ${className}`}/>;}
