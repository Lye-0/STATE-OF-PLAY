'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 二つ折りの確認カード。左の折り背と右下の折り面を本文から分け、封筒を開いた構図に。 */
export default function TheatreWingDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-theatre-wing-dialog ${className}`}/>;}
