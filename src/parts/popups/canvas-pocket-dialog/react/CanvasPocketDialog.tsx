'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 確認範囲を示す図面枠。枠の寸法線を読む面の外へ置き、本文と承認キーを別の区画へ。 */
export default function CanvasPocketDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-canvas-pocket-dialog ${className}`}/>;}
