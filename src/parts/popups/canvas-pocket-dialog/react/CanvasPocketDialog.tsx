'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 布のポケットの縫い目を持つ。 Content, state and actions belong to the consumer. */
export default function CanvasPocketDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-canvas-pocket-dialog ${className}`}/>;}
