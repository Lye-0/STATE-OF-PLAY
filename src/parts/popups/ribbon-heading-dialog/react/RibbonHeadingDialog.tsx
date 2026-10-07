'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 見出しを横切る控えめな帯。 Content, state and actions belong to the consumer. */
export default function RibbonHeadingDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ribbon-heading-dialog ${className}`}/>;}
