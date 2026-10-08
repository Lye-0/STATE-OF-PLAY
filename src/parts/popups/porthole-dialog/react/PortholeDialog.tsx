'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 観測窓の丸い上端と下の操作台。内容の区域を変えずに、窓全体を一つの光学面へまとめる。 */
export default function PortholeDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-porthole-dialog ${className}`}/>;}
