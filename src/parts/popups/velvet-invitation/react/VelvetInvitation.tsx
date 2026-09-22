'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 深い布の背景と金の縁取りで見せる招待。 Content, state and actions belong to the consumer. */
export default function VelvetInvitation({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-velvet-invitation ${className}`}/>;}
