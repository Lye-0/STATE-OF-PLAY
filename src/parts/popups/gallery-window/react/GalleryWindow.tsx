'use client';
import React from 'react';
import {type PopupProps} from '../../../../shared/popup-view';
import {TransitPopupView} from '../../../../shared/transit-popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 大きな作品面とエディトリアルな文字を持つ窓。 Content, state and actions belong to the consumer. */
export default function GalleryWindow({className='',...props}:PopupProps){return <TransitPopupView mode="gallery" {...props} className={`sop-gallery-window ${className}`}/>;}
