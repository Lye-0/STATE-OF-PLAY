'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 汎用的な確認操作に適した余白。 Content, state and actions belong to the consumer. */
export default function PlainConfirmDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-plain-confirm-dialog ${className}`}/>;}
