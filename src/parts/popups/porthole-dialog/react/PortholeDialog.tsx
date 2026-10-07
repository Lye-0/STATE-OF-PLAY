'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 丸い肩を持つ舷窓の確認面。 Content, state and actions belong to the consumer. */
export default function PortholeDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-porthole-dialog ${className}`}/>;}
