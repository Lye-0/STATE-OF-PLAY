'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 背と上下の大きな折返しが紙束を包む、開いたブックジャケットのセグメント。紙の右上を12px切り、9pxの背と上下の口へ連続させる。選択した表紙と紙束の密度だけを変え、文章は折返しの内側で読む。 */
export default function BookJacketSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-book-jacket-segments ${className}`}/>;}
