'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 上下の二つの顎が、選択した区画のレールへ接続するセグメント。20pxの顎と9pxの厚みを、各区画の3pxの上下の支持面へ重ねる。短い装飾点だった接点を実際の保持へ整え、読む面とnative radioの値を安定させる。 */
export default function CircuitRailSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-circuit-rail-segments ${className}`}/>;}
