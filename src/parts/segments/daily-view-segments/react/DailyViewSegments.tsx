'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 日常的な表示切り替えに適した面。 */
export default function DailyViewSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-daily-view-segments ${className}`}/>;}
