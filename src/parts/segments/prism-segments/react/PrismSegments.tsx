'use client';
import React from 'react';
import {type SegmentProps} from '../../../../shared/segment-view';
import {TransitSegmentView} from '../../../../shared/transit-selection-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 六角形を思わせる切り込みと、淡いスペクトル。 */
export default function PrismSegments({className='',...props}:SegmentProps){return <TransitSegmentView mode="prism" {...props} className={`sop-prism-segments ${className}`}/>;}
