'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 夜の作業画面に馴染む確認面。 Content, state and actions belong to the consumer. */
export default function NightTaskDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-night-task-dialog ${className}`}/>;}
