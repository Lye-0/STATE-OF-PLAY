'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 線と文字の発光で、現在のモードをはっきり示す。 */
export default function SignalSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="signal" {...props} className={`sop-signal-segments ${className}`}/>;}
