'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 植物の輪郭と、入力できる短いノート。 Content, state and actions belong to the consumer. */
export default function BotanicalNote({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-botanical-note ${className}`}/>;}
