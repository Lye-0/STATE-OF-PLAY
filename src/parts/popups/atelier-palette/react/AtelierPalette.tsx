'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 絵の具見本のような色面と、実際に選べるパレット。 Content, state and actions belong to the consumer. */
export default function AtelierPalette({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-atelier-palette ${className}`}/>;}
