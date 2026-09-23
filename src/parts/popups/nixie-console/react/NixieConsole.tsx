'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 琥珀色の読み取り表示と、機器の目盛り。 Content, state and actions belong to the consumer. */
export default function NixieConsole({className='',...props}:PopupProps){return <TransitPopupView mode="filament" {...props} className={`sop-nixie-console ${className}`}/>;}
