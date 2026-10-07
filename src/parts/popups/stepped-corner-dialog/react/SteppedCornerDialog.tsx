'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 角に段を持つ石板状の面。 Content, state and actions belong to the consumer. */
export default function SteppedCornerDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-stepped-corner-dialog ${className}`}/>;}
