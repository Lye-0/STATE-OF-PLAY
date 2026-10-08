'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 目盛りを持つ走行枠へ、現在の章のカーソルを固定するタブ。選択した見出しの両端の枠と、その下の三角の指標が同じ計器の断面へつながる。本文は走行枠の直下へ収め、番号や目盛りを増やさず選択位置を形へ対応させる。 */
export default function InstrumentTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-instrument-tabs ${className}`}/>;}
