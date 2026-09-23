'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 絵の具見本のような色面と、実際に選べるパレット。 Content, state and actions belong to the consumer. */
export default function AtelierPalette({className='',...props}:PopupProps){return <TransitPopupView mode="atelier" {...props} className={`sop-atelier-palette ${className}`}/>;}
