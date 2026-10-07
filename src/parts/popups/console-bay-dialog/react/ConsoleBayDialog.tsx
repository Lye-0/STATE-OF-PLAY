'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 操作盤の小さな照明と情報面。 Content, state and actions belong to the consumer. */
export default function ConsoleBayDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-console-bay-dialog ${className}`}/>;}
