'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 番号が浮かび上がる三連の真空管。項目数は自在に。 */
export default function NixieSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-nixie-segments ${className}`}/>;}
