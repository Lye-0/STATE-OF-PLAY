'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 紙の余白と活版のような文字組みのポップアップ。 Content, state and actions belong to the consumer. */
export default function FolioWindow({className='',...props}:PopupProps){return <TransitPopupView mode="folio" {...props} className={`sop-folio-window ${className}`}/>;}
