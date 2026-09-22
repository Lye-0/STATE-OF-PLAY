'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 丸い軌道と小さな光点。選んだ方向が明確に点灯する。 */
export default function OrbitalSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-orbital-segments ${className}`}/>;}
