'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 厚いガラスの縁と反射。レンズの焦点を合わせるように。 */
export default function LensSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-lens-segments ${className}`}/>;}
