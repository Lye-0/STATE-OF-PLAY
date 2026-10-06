'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 薄い舞台枠の奥で内容を見せ、上端の庇が開閉の奥行きを作る。 Content, state and actions belong to the consumer. */
export default function ProsceniumDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-proscenium-dialog ${className}`}/>;}
