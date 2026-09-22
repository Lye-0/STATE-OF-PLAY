'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** アイコンとラベルを併記。意味を隠さない表示切り替え。 */
export default function IconSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-icon-segments ${className}`}/>;}
