'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 説明とチェック項目を並べた、柔らかな設定パネル。 Content, state and actions belong to the consumer. */
export default function SoftPreferences({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-soft-preferences ${className}`}/>;}
