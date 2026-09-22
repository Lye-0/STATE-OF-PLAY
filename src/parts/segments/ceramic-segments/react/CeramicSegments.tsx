'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 暖かな白とわずかな段差。立体的で優しい選択面。 */
export default function CeramicSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ceramic-segments ${className}`}/>;}
