'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 舷窓の上半分を導入、下半分を判断の面にする。 Content, state and actions belong to the consumer. */
export default function PortholeDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-porthole-dialog ${className}`}/>;}
