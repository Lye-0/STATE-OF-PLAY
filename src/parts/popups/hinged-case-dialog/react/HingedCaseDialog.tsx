'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 蓋の蝶番と内部の仕切りが、確認内容を小さなケースに収める。 Content, state and actions belong to the consumer. */
export default function HingedCaseDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-hinged-case-dialog ${className}`}/>;}
