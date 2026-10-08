'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つのアーチ形の観測窓を並べるセグメント。各窓へ同じ23pxの上の曲率と4pxの下の受けを設け、選択した窓だけを明るくする。ひとつの色面が移動する形を廃し、アーチの上の細い稜線を各窓の支持へ合わせる。 */
export default function RaisedBridgeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-raised-bridge-segments ${className}`}/>;}
