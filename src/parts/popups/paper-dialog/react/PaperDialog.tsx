'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 白い背景で、名前の変更などに使えるシンプルな入力。 Content, state and actions belong to the consumer. */
export default function PaperDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-paper-dialog ${className}`}/>;}
