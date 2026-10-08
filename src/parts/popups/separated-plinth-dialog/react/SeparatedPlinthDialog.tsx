'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 帯をほどいて読む確認札。左右の折り返しと同じ色の主操作を下端へ結びつける。 */
export default function SeparatedPlinthDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-separated-plinth-dialog ${className}`}/>;}
