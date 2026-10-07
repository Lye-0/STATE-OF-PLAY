'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** ジャケットの折り返しを選ぶ。 */
export default function BookJacketSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-book-jacket-segments ${className}`}/>;}
