'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 二本の橋脚が平らな橋面を支えるセグメント。文字の下にアーチ状の空隙を開け、選択時は上の梁と細い反射線で位置を示す。文字と操作領域は動かさない。 */
export default function RaisedBridgeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-raised-bridge-segments ${className}`}/>;}
