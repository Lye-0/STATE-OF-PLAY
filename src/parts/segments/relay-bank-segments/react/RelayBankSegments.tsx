'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 三つの札の折った接点脚を、同じ厚みの下の受けへ収めるセグメント。8pxの折脚と13pxの受けを札の下端へ接続し、細い針金のように見える脚を実際の折面へ整える。選択した札と接点を同じ赤茶へ対応させ、文字を固定する。 */
export default function RelayBankSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-relay-bank-segments ${className}`}/>;}
