'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 透ける光の幕と、軽やかな紹介パネル。 Content, state and actions belong to the consumer. */
export default function AuroraWindow({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-aurora-window ${className}`}/>;}
