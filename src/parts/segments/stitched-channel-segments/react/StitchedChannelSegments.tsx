'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 縫い目の流路に選択札を通す。 */
export default function StitchedChannelSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-stitched-channel-segments ${className}`}/>;}
