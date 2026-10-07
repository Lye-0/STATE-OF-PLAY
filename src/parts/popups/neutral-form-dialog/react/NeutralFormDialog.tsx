'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 入力フォームを優先する中立な面。 Content, state and actions belong to the consumer. */
export default function NeutralFormDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-neutral-form-dialog ${className}`}/>;}
