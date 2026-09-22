'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 手順を短く案内する、汎用的なヘルプの窓。 Content, state and actions belong to the consumer. */
export default function HelpDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-help-dialog ${className}`}/>;}
