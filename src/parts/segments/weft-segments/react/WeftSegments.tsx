'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 織り込んだ短い帯が、選択時だけ一段浮き上がる。 */
export default function WeftSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-weft-segments ${className}`}/>;}
