'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 発送票の二重罫と折り返し。 Content, state and actions belong to the consumer. */
export default function DispatchSheetDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-dispatch-sheet-dialog ${className}`}/>;}
