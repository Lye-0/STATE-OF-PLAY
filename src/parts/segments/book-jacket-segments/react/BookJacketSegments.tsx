'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** クリップの固定文字と、下からせり出す赤いタブ。選択された一枚だけを摘み上げた形。 */
export default function BookJacketSegments({className='',...props}:SegmentProps){return <SegmentView {...props} className={`sop-book-jacket-segments ${className}`}/>;}
