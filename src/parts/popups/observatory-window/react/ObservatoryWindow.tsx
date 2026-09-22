'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 軌道と静かな数値で描く、天体観測のパネル。 Content, state and actions belong to the consumer. */
export default function ObservatoryWindow({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-observatory-window ${className}`}/>;}
