'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** ラベルと余白を整えた、名前とメールの入力例。 Content, state and actions belong to the consumer. */
export default function FormDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-form-dialog ${className}`}/>;}
