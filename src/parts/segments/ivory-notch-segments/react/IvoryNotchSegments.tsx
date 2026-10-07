'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 象牙色のキーに切欠きで現在位置を示す。 */
export default function IvoryNotchSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-ivory-notch-segments ${className}`}/>;}
