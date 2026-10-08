'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 大きい索引番号と、斜めに裁断した背を組むタブ。各見出しの左の15pxの斜面と本文の同じ幅の背の断面を接続し、罫線だけだった輪郭へ厚みを示す。数字の端正な組み方を保ち、文字や本文は斜めへ傾けない。 */
export default function SlantedSpineTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-slanted-spine-tabs ${className}`}/>;}
