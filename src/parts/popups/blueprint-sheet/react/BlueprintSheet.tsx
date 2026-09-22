'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 格子と製図線で構成した、編集可能なシート。 Content, state and actions belong to the consumer. */
export default function BlueprintSheet({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-blueprint-sheet ${className}`}/>;}
