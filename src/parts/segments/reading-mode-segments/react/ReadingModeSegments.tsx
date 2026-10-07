'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 読み物に合わせた穏やかな切り替え。 */
export default function ReadingModeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-reading-mode-segments ${className}`}/>;}
