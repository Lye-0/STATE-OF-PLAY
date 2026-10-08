'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 三つの切妻の見出しを、本文へ直接つなぐタブ。4pxの屋根の稜線を実際の斜面へ合わせ、選択した入口だけ本文と同じ紙にする。屋根の下に余計な水平線を重ねず、見出しの基線と本文の座標を保つ。 */
export default function GabledTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-gabled-tabs ${className}`}/>;}
