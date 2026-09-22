'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** オパールの干渉色と、柔らかな紹介のカード。 Content, state and actions belong to the consumer. */
export default function OpalWindow({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-opal-window ${className}`}/>;}
