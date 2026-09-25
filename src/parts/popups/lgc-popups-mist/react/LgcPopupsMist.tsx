'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 読みやすい霧ガラスの入力ダイアログ。 Content, state and actions belong to the consumer. */
export default function LgcPopupsMist({className='',...props}:PopupProps){return <PopupView {...props} className={`lgc-root sop-lgc-popups-mist ${className}`}/>;}
