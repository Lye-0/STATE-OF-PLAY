'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 打刻する三連の票券。選択した区画だけをインクで押し、下の切り取り線を残す。 */
export default function SatinKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-satin-key-segments ${className}`}/>;}
