'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 二つの支持桁と細い折枠へ、縫った帯の三つの区画を通すセグメント。選択した位置の上下27pxの折返しが桁をまたいで中央の読む帯へ接続する。縫い目を帯の端へ限定し、文字を載せる面を無地へ保つ。読む文字とnativeの選択値は動かさない。 */
export default function StitchedChannelSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-stitched-channel-segments ${className}`}/>;}
