'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 結晶の面と光の線が重なる、スペクトルの窓。 Content, state and actions belong to the consumer. */
export default function PrismWindow({className='',...props}:PopupProps){return <TransitPopupView mode="prism" {...props} className={`sop-prism-window ${className}`}/>;}
