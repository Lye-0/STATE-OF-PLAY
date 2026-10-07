'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 短い確認内容を収める小さな面。 Content, state and actions belong to the consumer. */
export default function CompactActionDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-compact-action-dialog ${className}`}/>;}
