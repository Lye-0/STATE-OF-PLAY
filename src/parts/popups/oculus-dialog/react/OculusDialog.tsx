'use client';
import React from 'react';
import {PopupView,type PopupProps} from '../../../../shared/popup-view';
import '../styles.css';
export type {PopupProps} from '../../../../shared/popup-view';
/** 片隅の丸い採光窓と、直線の本文面を併せ持つ小さな展示室。 Content, state and actions belong to the consumer. */
export default function OculusDialog({className='',...props}:PopupProps){return <PopupView {...props} className={`sop-oculus-dialog ${className}`}/>;}
