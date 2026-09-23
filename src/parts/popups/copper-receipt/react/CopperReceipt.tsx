'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 銅の光とレシートの細い罫線で、情報を整理。 Content, state and actions belong to the consumer. */
export default function CopperReceipt({className='',...props}:PopupProps){return <TransitPopupView mode="receipt" {...props} className={`sop-copper-receipt ${className}`}/>;}
