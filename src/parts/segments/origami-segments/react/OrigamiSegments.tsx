'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 折り紙の切り込みと、面で変化する柔らかな陰影。 */
export default function OrigamiSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="paper" {...props} className={`sop-origami-segments ${className}`}/>;}
