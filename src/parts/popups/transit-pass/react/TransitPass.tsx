'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 出発地と到着地を結ぶ、チケット型のポップアップ。 Content, state and actions belong to the consumer. */
export default function TransitPass({className='',...props}:PopupProps){return <TransitPopupView mode="ticket" {...props} className={`sop-transit-pass ${className}`}/>;}
