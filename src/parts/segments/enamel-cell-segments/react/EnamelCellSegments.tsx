'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 厚いエナメルの縁を共有し、選んだセルの面だけを明るくする。 */
export default function EnamelCellSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-enamel-cell-segments ${className}`}/>;}
