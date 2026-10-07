'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 丸い座に選択した貨幣面をはめ込む。 */
export default function CoinSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-coin-seat-segments ${className}`}/>;}
