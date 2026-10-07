'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 独立した台座に確認操作を載せる。 Content, state and actions belong to the consumer. */
export default function SeparatedPlinthDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-separated-plinth-dialog ${className}`}/>;}
