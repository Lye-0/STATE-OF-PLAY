'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 紙の折り返しを上部に残す。 Content, state and actions belong to the consumer. */
export default function FoldedFolioDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-folded-folio-dialog ${className}`}/>;}
