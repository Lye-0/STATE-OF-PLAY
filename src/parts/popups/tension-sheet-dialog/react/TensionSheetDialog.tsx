'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 四隅の張力で支えた薄い面が、内容を水平に保つ。 Content, state and actions belong to the consumer. */
export default function TensionSheetDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-tension-sheet-dialog ${className}`}/>;}
