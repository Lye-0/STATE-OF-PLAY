'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 段差のある外周と平らな文章面を分ける。 Content, state and actions belong to the consumer. */
export default function SteppedCornerDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-stepped-corner-dialog ${className}`}/>;}
