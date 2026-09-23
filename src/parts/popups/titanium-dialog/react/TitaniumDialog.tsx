'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 金属プレートと円盤の構造を持つコントロール。 Content, state and actions belong to the consumer. */
export default function TitaniumDialog({className='',...props}:PopupProps){return <TransitPopupView mode="split" {...props} className={`sop-titanium-dialog ${className}`}/>;}
