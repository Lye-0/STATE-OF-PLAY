'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 汎用的な確認・説明に使えるニュートラルなダイアログ。 Content, state and actions belong to the consumer. */
export default function EssentialDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-essential-dialog ${className}`}/>;}
