'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** キルティングのような奥行きと、落ち着いた光沢。 */
export default function VelvetSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-velvet-segments ${className}`}/>;}
