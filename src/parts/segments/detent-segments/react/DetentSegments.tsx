'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 物理的なクリックストップを思わせる立体レール。 */
export default function DetentSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="detent" {...props} className={`sop-detent-segments ${className}`}/>;}
