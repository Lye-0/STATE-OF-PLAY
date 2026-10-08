'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 斜めに重ねた継ぎ片を、織帯の両端の繊維へ揃えるセグメント。8pxの斜めの切口と4pxの織端、内側の一本の縫い目を同じ方向へ整える。傷のような上下の細線を省き、選択した継ぎ片の素材だけを明るくする。 */
export default function TapeSpliceSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-tape-splice-segments ${className}`}/>;}
