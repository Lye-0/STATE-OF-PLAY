'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 台帳の折返しから本文が続き、最後に署名を置く。 Content, state and actions belong to the consumer. */
export default function LedgerFlapDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ledger-flap-dialog ${className}`}/>;}
