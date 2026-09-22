'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 淡く屈折する液体ガラス。レンズのような光が移動する。 */
export default function CapillarySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-capillary-segments ${className}`}/>;}
