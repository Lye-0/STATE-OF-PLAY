'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 選択肢の番号を上端に並べ、下の案内線が現在の位置で折れる。 */
export default function RailSwitchSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-rail-switch-segments ${className}`}/>;}
