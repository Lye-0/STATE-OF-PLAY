'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 読み方を選ぶ静かな罫線付きの帯。選択位置には小さなしおりを置き、文字を動かさずに淡い紙面で状態を伝える。 */
export default function ReadingModeSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-reading-mode-segments ${className}`}/>;}
