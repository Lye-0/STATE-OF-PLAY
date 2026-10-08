'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 一枚の織帯に三つの織り位置を設ける。選択帯の上下だけに縫い糸が通る。 */
export default function TapeSpliceSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-tape-splice-segments ${className}`}/>;}
