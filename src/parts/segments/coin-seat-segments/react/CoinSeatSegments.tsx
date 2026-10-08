'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つの硬貨形の筒を、上下の楕円の座へ収めるセグメント。読む面の上下に弧を作り、外の二つの支持面と側の5pxの支えへつなぐ。選択した筒の金属だけを明るくし、文字とnative radioを動かさない。 */
export default function CoinSeatSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-coin-seat-segments ${className}`}/>;}
