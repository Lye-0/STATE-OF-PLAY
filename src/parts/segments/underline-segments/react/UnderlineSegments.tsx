'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 細い線が現在値を示す、装飾の少ないスイッチ。 */
export default function UnderlineSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-underline-segments ${className}`}/>;}
