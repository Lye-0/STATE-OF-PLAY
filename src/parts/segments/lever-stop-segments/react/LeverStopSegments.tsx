'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 左右の糸巻きの端板が、三つの位置の帯を受けるセグメント。選択した区画の下の実軸からレバーを返し、先の受けで帯の張りを止める。文字を載せる帯は固定し、端板・軸・レバー・受けを同じ木と金属の断面へ揃える。 */
export default function LeverStopSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-lever-stop-segments ${className}`}/>;}
