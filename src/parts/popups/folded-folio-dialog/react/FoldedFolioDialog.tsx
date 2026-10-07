'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 折った二つの紙面を本文と操作に割り当てる。 Content, state and actions belong to the consumer. */
export default function FoldedFolioDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-folded-folio-dialog ${className}`}/>;}
