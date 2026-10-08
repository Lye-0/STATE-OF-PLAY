'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 四隅の支柱で保持した確認面。左から読む本文と下端の操作を大きい開口の中へ置く。 */
export default function RibbonHeadingDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-ribbon-heading-dialog ${className}`}/>;}
