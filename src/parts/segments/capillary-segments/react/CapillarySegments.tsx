'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 淡く屈折する液体ガラス。レンズのような光が移動する。 */
export default function CapillarySegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="fluid" {...props} className={`sop-capillary-segments ${className}`}/>;}
