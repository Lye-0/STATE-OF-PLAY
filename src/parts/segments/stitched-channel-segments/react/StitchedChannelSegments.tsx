'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 織物の溝の上を滑る帯。 */
export default function StitchedChannelSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-stitched-channel-segments ${className}`}/>;}
