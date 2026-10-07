'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 余白の広い展示マットに解説と操作を配置。 Content, state and actions belong to the consumer. */
export default function GalleryMatDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-gallery-mat-dialog ${className}`}/>;}
