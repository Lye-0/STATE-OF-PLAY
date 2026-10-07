'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 小さなコイン状の選択座。 */
export default function CoinSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-coin-seat-segments ${className}`}/>;}
