'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** タイポグラフィと斜めの切り込み。端正な編集的スイッチ。 */
export default function AtlasSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-atlas-segments ${className}`}/>;}
