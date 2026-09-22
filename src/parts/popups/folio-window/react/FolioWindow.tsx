'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 紙の余白と活版のような文字組みのポップアップ。 Content, state and actions belong to the consumer. */
export default function FolioWindow({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-folio-window ${className}`}/>;}
