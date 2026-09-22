'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 短い選択や通知を伝えるためのコンパクトな窓。 Content, state and actions belong to the consumer. */
export default function CompactDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-compact-dialog ${className}`}/>;}
