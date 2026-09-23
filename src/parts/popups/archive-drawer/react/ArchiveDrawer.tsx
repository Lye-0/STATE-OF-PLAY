'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 右から現れる、検索欄付きの静かなファイル棚。 Content, state and actions belong to the consumer. */
export default function ArchiveDrawer({className='',...props}:PopupProps){return <TransitPopupView mode="drawer" {...props} className={`sop-archive-drawer ${className}`}/>;}
