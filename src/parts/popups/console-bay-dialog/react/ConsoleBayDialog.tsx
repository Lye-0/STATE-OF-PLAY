'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** コンソールの情報面と下の操作列を明確に分離。 Content, state and actions belong to the consumer. */
export default function ConsoleBayDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-console-bay-dialog ${className}`}/>;}
