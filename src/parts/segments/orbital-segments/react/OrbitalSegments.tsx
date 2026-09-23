'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 丸い軌道と小さな光点。選んだ方向が明確に点灯する。 */
export default function OrbitalSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="orbit" {...props} className={`sop-orbital-segments ${className}`}/>;}
