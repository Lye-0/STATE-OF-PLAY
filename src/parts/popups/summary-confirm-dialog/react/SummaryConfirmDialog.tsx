'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 要約を左の縦線でまとめ、確認とキャンセルを明快に分ける。 Content, state and actions belong to the consumer. */
export default function SummaryConfirmDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-summary-confirm-dialog ${className}`}/>;}
