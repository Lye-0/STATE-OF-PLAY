'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 本の背を三つの巻へ分ける。選択した巻の上端と下端を金色の帯で留める。 */
export default function CoinSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-coin-seat-segments ${className}`}/>;}
