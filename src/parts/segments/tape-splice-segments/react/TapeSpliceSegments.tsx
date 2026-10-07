'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 継ぎ目にだけ色を留めたテープ。 */
export default function TapeSpliceSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-tape-splice-segments ${className}`}/>;}
