'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 額装の余白で内容を引き立てる。 Content, state and actions belong to the consumer. */
export default function GalleryMatDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-gallery-mat-dialog ${className}`}/>;}
