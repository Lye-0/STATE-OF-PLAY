'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 穏やかな通知に適した紙の面。 Content, state and actions belong to the consumer. */
export default function WarmMessageDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-warm-message-dialog ${className}`}/>;}
