'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 橋脚の上を選択した床がつなぐ。 */
export default function RaisedBridgeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-raised-bridge-segments ${className}`}/>;}
