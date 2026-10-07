'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 磨いた金属ケースの継ぎ目。 Content, state and actions belong to the consumer. */
export default function BrushedCaseDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-brushed-case-dialog ${className}`}/>;}
