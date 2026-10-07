'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 陶器の深い縁から水平な内容面へ視線を導く。 Content, state and actions belong to the consumer. */
export default function CeramicBasinDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ceramic-basin-dialog ${className}`}/>;}
