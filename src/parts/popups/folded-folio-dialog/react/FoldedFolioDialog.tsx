'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 大きい余白を持つ横書きの確認状。本文を縁飾りから解放し、下端の一つの強い操作へ導く。 */
export default function FoldedFolioDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-folded-folio-dialog ${className}`}/>;}
