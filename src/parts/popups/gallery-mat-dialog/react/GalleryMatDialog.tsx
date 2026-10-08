'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 縫い目で綴じた確認の手帳。内側の本文を一枚の布へまとめ、下の留め帯で確定する。 */
export default function GalleryMatDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-gallery-mat-dialog ${className}`}/>;}
