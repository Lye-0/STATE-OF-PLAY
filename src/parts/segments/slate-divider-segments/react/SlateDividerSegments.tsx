'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 石板の割れ目に合わせて選択する。 */
export default function SlateDividerSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-slate-divider-segments ${className}`}/>;}
