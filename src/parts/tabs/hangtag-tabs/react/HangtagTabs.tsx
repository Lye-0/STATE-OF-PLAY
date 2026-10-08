'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 一本の杆から、孔へ実際に通る紐で三枚の吊り札を下げるタブ。上の孔と紐の接点、斜めの肩と下の裁ち端を札の形へまとめ、選択した札だけを焼いた赤茶へ変える。縦配置では杆を左へ立てて紐を左の孔へ渡し、すべての札を杆へ接続する。札と読む位置は動かさない。 */
export default function HangtagTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-hangtag-tabs ${className}`}/>;}
