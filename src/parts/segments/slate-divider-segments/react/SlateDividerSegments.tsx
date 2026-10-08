'use client';
import React from 'react';
import {SegmentView,type SegmentProps} from '../../../../shared/segment-view';
import '../styles.css';
export type {SegmentProps,SegmentItem} from '../../../../shared/segment-view';
/** 割った三枚の岩棚の小口を、別々の座へ合わせるセグメント。10pxの欠けと斜めの切断面を各石の輪郭へ作り、下の12pxの座へ連続させる。選択した石の読む面だけ明るくし、緑の角丸の箱と動く色面を使わない。 */
export default function SlateDividerSegments({className='',...props}:SegmentProps){return <SegmentView {...props} markerArt={<span className="sop-segment-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-slate-divider-segments ${className}`}/>;}
