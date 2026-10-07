'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 狭幅でも対等な三択を同じ面積で配置。 */
export default function DailyViewSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-daily-view-segments ${className}`}/>;}
