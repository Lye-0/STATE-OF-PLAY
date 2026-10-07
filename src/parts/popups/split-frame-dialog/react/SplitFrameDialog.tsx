'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 上下のフレームを本文と操作に分けて張る。 Content, state and actions belong to the consumer. */
export default function SplitFrameDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-split-frame-dialog ${className}`}/>;}
