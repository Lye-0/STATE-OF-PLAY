'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 鋸歯の小口を持つ索引タブ。切欠きを7pxへ揃え、三つの歯を端の40pxへ集中する。未選択の見出しを独立した紙色へ分け、選択した紙だけ本文の紙と連続させる。細い上の縁が選択位置を示し、文字の太さや位置は変えない。 */
export default function SawtoothIndexTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-sawtooth-index-tabs ${className}`}/>;}
