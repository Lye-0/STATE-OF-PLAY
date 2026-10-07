'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** レバーの止まり位置を弧で示す。 */
export default function LeverStopSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-lever-stop-segments ${className}`}/>;}
