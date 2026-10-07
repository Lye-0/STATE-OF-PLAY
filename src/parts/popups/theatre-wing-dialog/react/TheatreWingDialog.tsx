'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 舞台の袖を思わせる厚い両端。 Content, state and actions belong to the consumer. */
export default function TheatreWingDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-theatre-wing-dialog ${className}`}/>;}
