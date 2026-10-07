'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 選択面を橋のように持ち上げる。 */
export default function RaisedBridgeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-raised-bridge-segments ${className}`}/>;}
