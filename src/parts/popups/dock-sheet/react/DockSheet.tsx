'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 下から浮かび上がる、ゆとりのある設定シート。 Content, state and actions belong to the consumer. */
export default function DockSheet({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-dock-sheet ${className}`}/>;}
