'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 柔らかなサテンの帯の左右を、浅く巻き込むセグメント。元の二つの折れた端を保ち、茶色の光沢と票券の説明を除く。選択した帯を明るい淡紅へ分け、薄い折返しと無地の読む面だけで状態を示す。 */
export default function SatinKeySegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-satin-key-segments ${className}`}/>;}
