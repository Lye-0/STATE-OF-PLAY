'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 青灰色の面で、選択した表示を明確にする。 */
export default function SlateSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-slate-segments ${className}`}/>;}
