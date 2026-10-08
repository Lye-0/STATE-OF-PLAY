'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 活字の組版台。選択した区画を太いインク面で充填し、三つの活字の境界を残す。 */
export default function StitchedChannelSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-stitched-channel-segments ${className}`}/>;}
