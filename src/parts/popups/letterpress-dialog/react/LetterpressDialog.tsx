'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 活版の見出しと細い署名線で読む順序を作る。 Content, state and actions belong to the consumer. */
export default function LetterpressDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-letterpress-dialog ${className}`}/>;}
