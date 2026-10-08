'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 石の確認台。上段の見出しと一段下がった本文を同じ塊の中に配置し、下端へ操作を集める。 */
export default function LedgerFlapDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ledger-flap-dialog ${className}`}/>;}
