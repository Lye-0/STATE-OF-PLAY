'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 布のポケットから明るい本文カードを取り出す。 Content, state and actions belong to the consumer. */
export default function CanvasPocketDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-canvas-pocket-dialog ${className}`}/>;}
